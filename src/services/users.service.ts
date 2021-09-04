import bcrypt from 'bcrypt'
import { ForbiddenException } from '../exceptions/forbidden.exception'
import { InvalidCredentialsException } from '../exceptions/invalid-credentials.exception'
import { RequestContext } from '../interfaces/request-context.interface'
import { createUserRecord, getUserRecordByEmail, getUsersRecords, getUserRecordById, updateUserRecord, deleteUserRecord, APIUser, DbUser } from '../repositories/users.repository'
import { createToken } from './jwt.service'

interface UserToken {token : string}

async function createUser(ctx: RequestContext): Promise<UserToken> {
  const { email, name, password } = ctx.request.body
  const hash = await bcrypt.hash(password, 10)
  const [id] = await createUserRecord({ email, name, password:hash }, ctx)
  const token = await createToken(id)
  return { token }
}

async function validateUser(ctx: RequestContext): Promise<UserToken> {
  const {email, password} = ctx.request.body
  const user = await getUserRecordByEmail(email, ctx)
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw new InvalidCredentialsException()
  }
  else {
    const token = await createToken(user.id)
    return { token }
  }
}

function getUsers(ctx: RequestContext): Promise<APIUser[]> {
  return getUsersRecords(ctx)
}

function getUser(userId: string, ctx: RequestContext): Promise<APIUser> {
  return getUserRecordById(userId, ctx)
}

function updateUser(userId: string, body: Partial<DbUser>, ctx: RequestContext): Promise<APIUser> {
  return updateUserRecord(userId, body, ctx)
}

async function deleteUser(userId: string, ctx: RequestContext): Promise<void> {
  if (!(Number(userId) === ctx.state.user?.userId)) {
    throw new ForbiddenException('Do not have rights to perform this operation')
  }
  await deleteUserRecord(userId, ctx)
}

export {
  createUser,
  validateUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
}
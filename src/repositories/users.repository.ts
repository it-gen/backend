import { UserAlreadyExistsException } from "../exceptions/user-already-exists.exception"
import { UserNotFoundException } from "../exceptions/user-not-found.exception"
import { RequestContext } from "../interfaces/request-context.interface"


interface BaseUser {
  email: string,
  name: string
}

interface UserId {
  id: number
}

interface UserPassword {
  password: string
}

export type CreateUserInput = BaseUser & UserPassword

export type DbUser = BaseUser & UserPassword & UserId

export type APIUser = BaseUser & UserId

async function createUserRecord(user: CreateUserInput, ctx: RequestContext): Promise<number[]> {
  const { connection } = ctx.state
  try {
    const id = await connection('users').insert(user).returning('id')
    return id
  } catch (e: any) {
    if (e.code === '23505') {
      throw new UserAlreadyExistsException()
    }
    throw e
  }
}

async function getUserRecordByEmail(email: string, ctx: RequestContext): Promise<DbUser> {
  const { connection } = ctx.state
  const user = await connection('users').where({ email }).first()
  return user
}

async function getUserRecordById(userId: string, ctx: RequestContext): Promise<APIUser> {
  const { connection } = ctx.state
  const user = await connection('users').select(['id', 'name', 'email']).where({ id: userId }).first()
  if (!user) {
    throw new UserNotFoundException()
  }
  return user
}

async function getUsersRecords(ctx: RequestContext): Promise<APIUser[]> {
  const { connection } = ctx.state
  const users = await connection('users').select(['id', 'name', 'email']) 
  return users
}

async function updateUserRecord(userId: string, body: Partial<DbUser>, ctx: RequestContext): Promise<APIUser> {
  const { connection } = ctx.state
  const [user] = await connection('users').where({ id: userId }).update(body).returning(['id', 'name', 'email'])
  if (!user) {
    throw new UserNotFoundException()
  }
  return user
}

async function deleteUserRecord(userId: string, ctx: RequestContext): Promise<void> {
  const { connection } = ctx.state
  const [user] = await connection('users').where({ id: userId }).delete().returning(['id', 'name', 'email'])
  if (!user) {
    throw new UserNotFoundException()
  }
}

export {
  createUserRecord,
  getUserRecordByEmail,
  getUsersRecords,
  getUserRecordById,
  updateUserRecord,
  deleteUserRecord
}
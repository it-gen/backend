import Router from '@koa/router'
import { RequestState } from '../interfaces/request-context.interface'
import { tokenValidatorMiddleware } from '../middlewares/token-validator.middleware'
import { getUsers, getUser, updateUser, deleteUser } from '../services/users.service'

const userController = new Router<RequestState>()

userController.get('/users', async (ctx) => {
  ctx.body = await getUsers(ctx)
})

userController.get('/users/:userId', tokenValidatorMiddleware, async (ctx) => {
  const user = await getUser(ctx.params.userId, ctx)
  ctx.body = user
})

userController.put('/users/:userId', tokenValidatorMiddleware, async (ctx) => {
  const userId = ctx.params.userId
  const {name, surname} = ctx.request.body 
  const user = await updateUser(userId, {name, surname}, ctx)
  ctx.body = user
})

userController.delete('/users/:userId', tokenValidatorMiddleware, async (ctx) => {
  const userId = ctx.params.userId
  await deleteUser(userId, ctx)
  ctx.status = 204
})

export {userController}
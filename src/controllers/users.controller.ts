import Router from '@koa/router'
import { RequestState } from '../interfaces/request-context.interface'
import { tokenValidatorMiddleware } from '../middlewares/token-validator.middleware'
import { getUsers, getUser, updateUser, deleteUser } from '../services/users.service'

const userController = new Router<RequestState>()

userController.get('/api/users', async (ctx) => {
  ctx.body = await getUsers(ctx)
})

userController.get('/api/users/:userId', tokenValidatorMiddleware, async (ctx) => {
  const user = await getUser(ctx.params.userId, ctx)
  ctx.body = user
})

userController.put('/api/users/:userId', tokenValidatorMiddleware, async (ctx) => {
  const userId = ctx.params.userId
  const {name} = ctx.request.body 
  const user = await updateUser(userId, {name}, ctx)
  ctx.body = user
})

userController.delete('/api/users/:userId', tokenValidatorMiddleware, async (ctx) => {
  const userId = ctx.params.userId
  await deleteUser(userId, ctx)
  ctx.status = 204
})

export {userController}
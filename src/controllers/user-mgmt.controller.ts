import Router from '@koa/router'
import { RequestState } from '../interfaces/request-context.interface'
import { tokenValidatorMiddleware } from '../middlewares/token-validator.middleware'
import { createUser, validateUser } from '../services/users.service'


const userMgmtController = new Router<RequestState>()

userMgmtController.post('/register', async (ctx) => {
  const body = await createUser(ctx)
  ctx.body = body
})

userMgmtController.post('/login', async (ctx) => {
  const body = await validateUser(ctx)
  ctx.body = body
})

userMgmtController.post('/validate', tokenValidatorMiddleware, async (ctx) => {
  const { connection } = ctx.state

  ctx.body = await connection('users').select()
})

export { userMgmtController }
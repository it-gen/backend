import { Next } from 'koa'
import { UnauthorizedException } from '../exceptions/unauthorized.exception'
import { RequestContext } from '../interfaces/request-context.interface'
import { validateToken } from '../services/jwt.service'

async function tokenValidatorMiddleware(ctx: RequestContext, next: Next) {
  const token = ctx.headers['authorization'] && ctx.headers['authorization'].split(' ')[1]

  if (token) {
    const user = await validateToken(token)
    ctx.state.user = user
    console.log('User validated')
    return next()
  } else {
    throw new UnauthorizedException('Unauthorized')
  }
}

export {
  tokenValidatorMiddleware
}
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { userMgmtController } from './controllers/user-mgmt.controller'
import { userController } from './controllers/users.controller'
import { errorHandlerMiddleware } from './middlewares/error-handler.middleware'
import { handleConnectionMiddleware } from './middlewares/handle-connection.middleware'
import { loggerMiddleware, logger } from './middlewares/logger.middleware'

const app = new Koa()

app.use(loggerMiddleware())
app.use(handleConnectionMiddleware())
app.use(errorHandlerMiddleware())
app.use(bodyParser())

registerRoutes(app)

app.listen(3000, () => logger.info('Server started on http://localhost:3000'))

function registerRoutes(app: Koa) {
  app
    .use(userMgmtController.routes())
    .use(userMgmtController.allowedMethods())
    .use(userController.routes())
    .use(userController.allowedMethods())
  logger.info({ message: 'Registered routes for user-mgmt:', routes: userMgmtController.stack.map(i => i.path) })
  logger.info({ message: 'Registered routes for user:', routes: userController.stack.map(i => i.path) })
}
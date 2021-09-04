import { BaseException } from "./base.exceptions";

class UnauthorizedException extends BaseException{
  constructor(message: string) {
    super(401, message)
  }
}

export {
  UnauthorizedException
}
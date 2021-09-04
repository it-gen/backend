import { BaseException } from "./base.exceptions";

class ForbiddenException extends BaseException{
  constructor(message: string) {
    super(403, message)
  }
}

export {
  ForbiddenException
}
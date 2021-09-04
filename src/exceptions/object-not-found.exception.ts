import { BaseException } from "./base.exceptions";

class ObjectNotFoundException extends BaseException{
  constructor(message: string) {
    super(404, `${message} not found`)
  }
}

export {
  ObjectNotFoundException
}
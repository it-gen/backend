import { BaseException } from "./base.exceptions";

class UserAlreadyExistsException extends BaseException{
  constructor() {
    super(400, 'User already exists')
  }
}

export {
  UserAlreadyExistsException
}
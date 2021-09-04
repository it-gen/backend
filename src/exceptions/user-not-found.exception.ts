import { BaseException } from "./base.exceptions";

class UserNotFoundException extends BaseException{
  constructor() {
    super(404, 'User not found')
  }
}

export {
  UserNotFoundException
}
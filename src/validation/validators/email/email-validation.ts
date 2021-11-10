import { InvalidFieldError } from '@/validation/errors'
import { IFielValidation } from '@/validation/protocols/field-validation'

export class EmailValidation implements IFielValidation {
  constructor (readonly field: string) {}
  validate (value: string): Error {
    return new InvalidFieldError()
  }
}

import { InvalidFieldError } from '@/validation/errors'
import { IFielValidation } from '@/validation/protocols/field-validation'

export class MinLengthValidation implements IFielValidation {
  constructor (readonly field: string, private readonly minLength: number) {}
  validate (value: string): Error {
    return new InvalidFieldError()
  }
}

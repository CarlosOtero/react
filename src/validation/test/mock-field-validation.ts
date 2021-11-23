import { IFieldValidation } from '@/validation/protocols/field-validation'

export class FieldValidationSpy implements IFieldValidation {
  error: Error = null

  constructor (readonly field: string) {}
  validate (input: object): Error {
    return this.error
  }
}

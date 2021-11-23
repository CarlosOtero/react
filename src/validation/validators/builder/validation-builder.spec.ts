import { EmailValidation, RequiredFieldValidation, MinLengthValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'
import { CompareFieldsValidation } from '../compare-fields/compare-fields-validation'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation ', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation ', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLengthValidation ', () => {
    const field = faker.database.column()
    const lenght = faker.datatype.number()
    const validations = sut.field(field).min(lenght).build()
    expect(validations).toEqual([new MinLengthValidation(field, lenght)])
  })

  test('Should return CompareFieldsValidation ', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const validations = sut.field(field).sameAs(fieldToCompare).build()
    expect(validations).toEqual([new CompareFieldsValidation(field, fieldToCompare)])
  })

  test('Should return a list of validators', () => {
    const field = faker.database.column()
    const lenght = faker.datatype.number()
    const validations = sut.field(field).required().min(lenght).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, lenght),
      new EmailValidation(field)
    ])
  })
})

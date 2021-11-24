import { LocalStorageAdapter } from '@/infra/cache'

import 'jest-localstorage-mock'
import faker from 'faker'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  test('Should call localStorage (JS) with correct values', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.datatype.uuid()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})

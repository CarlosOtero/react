import { LocalStorageAdapter } from './local-storage-adapter'
import faker from 'faker'
import 'jest-localstorage-mock'

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  test('Should call localStorage (JS) with correct values', async () => {
    const sut = new LocalStorageAdapter()
    const key = faker.database.column()
    const value = faker.datatype.uuid()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})

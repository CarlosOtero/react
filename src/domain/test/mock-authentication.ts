import { AuthenticationParans } from '@/domain/usecases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParans => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

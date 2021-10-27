import axios from 'axios'
import faker from 'faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mokedAxios = axios as jest.Mocked<typeof axios>
  mokedAxios.post.mockResolvedValue({
    data: faker.random.objectElement(),
    status: faker.datatype.number()
  })
  return mokedAxios
}

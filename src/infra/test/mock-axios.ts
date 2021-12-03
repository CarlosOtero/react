import axios from 'axios'
import faker from 'faker'

export const mockHttpResponse = (): any => ({
  data: faker.random.objectElement(),
  status: faker.datatype.number()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mokedAxios = axios as jest.Mocked<typeof axios>
  mokedAxios.post.mockClear().mockResolvedValue(mockHttpResponse())
  mokedAxios.get.mockClear().mockResolvedValue(mockHttpResponse())
  return mokedAxios
}

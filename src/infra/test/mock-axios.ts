import axios from 'axios'
import faker from 'faker'

export const mockHttpResponse = (): any => ({
  data: faker.random.objectElement(),
  status: faker.datatype.number()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mokedAxios = axios as jest.Mocked<typeof axios>
  mokedAxios.post.mockResolvedValue(mockHttpResponse())
  mokedAxios.get.mockResolvedValue(mockHttpResponse())
  return mokedAxios
}

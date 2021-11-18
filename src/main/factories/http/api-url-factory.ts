export const makeApiUrl = (path: string): string => {
// return `http://fordevs.herokuapp.com/api${path}`
  return `${process.env.API_URL}${path}`
}

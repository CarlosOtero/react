export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errado aconteeu. Tente novamente mais tarde.')
    this.name = 'UnexpectedError'
  }
}

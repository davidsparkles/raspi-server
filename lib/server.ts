import * as express from 'express'

export class Server {
  
  private app: express.Express

  constructor() {
    this.app = express()

    this.app.get('/', (req, res) => res.status(200).send('Hello World'))
  }

  public listen(port: string): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.app.listen(port, (error) => {
        if (error) rej(error)
        else res()
      })
    })
  }
}

import * as express from 'express'
import * as Promise from 'bluebird'

import { Logger } from './logger'
import { ChatManager } from './chatManager'

export class Server {
  
  private app: express.Express
  private chatManager: ChatManager
  private logger: Logger

  constructor() {
    this.app = express()
    this.logger = new Logger()
    this.chatManager = new ChatManager()
    this.logger.log('Server started')

    this.configureRoutes()    
  }

  public listen(port: string): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.app.listen(port, (error) => {
        if (error) rej(error)
        else res()
      })
    })
  }

  private configureRoutes() {
    this.app.get('/', (req, res) => {
      this.logger.log('Base route was requested.')
      res.status(200).send('Hello World')
    })

    this.app.get('/logs', (req, res) => {
      res.status(200).send(this.logger.getPrintedLogs())
    })

    this.app.get('/start', (req, res) => {
      this.logger.log('Start the routine')
      this.chatManager.startRoutine()
      res.sendStatus(200)      
    })

    this.app.get('/stop', (req, res) => {
      this.logger.log('Stop the routine')
      this.chatManager.stopRoutine()
      res.sendStatus(200)   
    })
  }
}

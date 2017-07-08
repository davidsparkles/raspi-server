export class Logger {

  private logs: string[]

  constructor(){
    this.logs = []
  }

  public log(message: string): void {
    const date = new Date()
    const log = `${date.toLocaleString()}: ${message}`
    this.logs.push(log)
  }

  public getLogs(): string[] {
    return this.logs
  }

  public getPrintedLogs(): string {
    return this.logs.join('<br>')
  }
}
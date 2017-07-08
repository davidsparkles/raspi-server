import * as request from 'request-promise'
import * as Promise from 'bluebird'

import { DictumDatabase } from './dictumDatabase'

export class ChatManager {

  private botToken = '321940604:AAF39SaO9LqWDVXHp9xoYlJzCpSQ33B654Y'
  private baseUrl = `https://api.telegram.org/bot${this.botToken}`
  private registeredChats: number[] = []

  private dictumDatabase: DictumDatabase

  private timer: NodeJS.Timer
  private interval: number = 24 * 60 * 60 * 1000

  constructor() {
    this.dictumDatabase = new DictumDatabase()
    this.registeredChats.push(8253637)
    this.registeredChats.push(29574127)
  }

  public startRoutine(): void {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      const message = this.dictumDatabase.getDictum()
      if (message) this.sendMessageToRegisteredChats(message)
    }, this.interval)
  }

  public stopRoutine(): void {
    clearInterval(this.timer)
  }

  public sendMessageToRegisteredChats(message: string): Promise<void[]> {
    const sendMessagePromises = this.registeredChats.map((chat_id) => {
      const body: SendMessageBody = {
        chat_id,
        text: message
      }
      return this.sendMessage(body)
    })
    return Promise.all(sendMessagePromises)
  }

  public getMe(): Promise<Me> {
    const options = {
      method: 'GET',
      json: true
    }
    return request(`${this.baseUrl}/getMe`, options)
      .then((response: ApiResponse<Me>) => {
        return response.result
      })
  }

  public getUpdates(): Promise<Update[]> {
    const options = {
      method: 'GET',
      json: true
    }
    return request(`${this.baseUrl}/getUpdates`, options)
      .then((response: ApiResponse<Update[]>) => {
        return response.result
      })
  }
  
  public sendMessage(body: SendMessageBody): Promise<void> {
    const options = {
      method: 'POST',
      body,
      json: true
    }
    return request(`${this.baseUrl}/sendMessage`, options)
  }

}



class ApiResponse<RequestType> {
  ok: string
  result: RequestType
}

class Me {
  id: number
  first_name: string
  username: string
}

class Update {
  update_id: number
  message: Message
}

class Message {
  message_id: number
  from: User
  chat: Chat
  date: number
  text: string
}

class User {
  id: number
  first_name: string
  last_name: string
  language_code: string
}

class Chat {
  id: number
  first_name: string
  last_name: string
  type: string
}

class SendMessageBody {
  chat_id: number
  text: string
  parse_mode?: string
  disable_notification?: string
}
import { BConsole } from '../console/BConsole/BConsole'

export class ServerWrappers {
  static info (data: any): void {
    BConsole.print(data, {
      date: {
        show: true,
        textColor: 'blackBright'
      },
      textColor: 'cyan',
      emojiRight: 'lightbulb'
    })
  }

  static error (data: any): void {
    BConsole.print(data, {
      date: {
        show: true,
        textColor: 'yellowBright'
      },
      textColor: 'redBright',
      emojiRight: 'bomb'
    })
  }

  static success (data: any): void {
    BConsole.print(data, {
      date: {
        show: true,
        textColor: 'greenBright'
      },
      emojiRight: 'smilingFaceWithSmilingEyes',
      textColor: 'green'
    })
  }
}

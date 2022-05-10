import chalk from 'chalk'
import { BackgroundTextColor, TextColor } from './Color.types'

export class ColorUtil {
  public static paintText (data: any, color?: TextColor, bgColor?: BackgroundTextColor): string {
    if (bgColor && color) {
      return chalk[bgColor][color](data)
    }

    if (color) {
      return chalk[color](data)
    }

    if (bgColor) {
      return chalk[bgColor](data)
    }

    return data
  }
}

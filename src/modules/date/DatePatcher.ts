import { PrintOptions } from '../../console/BConsole/BConsole.types'
import { ColorUtil } from '../../modules/color/ColorUtil'
import { DateUtil } from './DateUtil'

export class DatePatcher {
  static patch (output: string, options?: PrintOptions): string {
    if (options?.date?.show) {
      if (options.date.textColor) {
        output += `[${ColorUtil.paintText(DateUtil.now(options.date?.format), options.date.textColor)}] `
      } else {
        output += `[${DateUtil.now(options.date?.format)}] `
      }
    }

    return output
  }
}

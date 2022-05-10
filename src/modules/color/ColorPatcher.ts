import { PrintLongItem, PrintLongOptions, PrintOptions } from '../../console/BConsole/BConsole.types'
import { ColorUtil } from './ColorUtil'

export class ColorPatcher {
  static patch (data: any, output: string, options?: PrintOptions): string {
    if (options?.textColor) {
      output += ColorUtil.paintText(data, options.textColor, options.backgroundColor)
    } else {
      output += data
    }

    return output
  }

  static patchMany (data: PrintLongItem[], output: string, options?: PrintLongOptions) {
    data.forEach(line => {
      output += ColorUtil.paintText(line.data, line.options?.textColor, line.options?.backgroundColor)
    })

    return output
  }
}

import {
  PrintLongOptions,
  PrintOptions,
  PrintLongItem
} from './BConsole.types'
import { ColorPatcher } from '../../modules/color/ColorPatcher'
import { DatePatcher } from '../../modules/date/DatePatcher'
import { EmojiPatcher } from '../../modules/emoji/EmojiPatcher'

export class BConsole {
  public static print (data: any, options?: PrintOptions): void {
    let output = ''

    output = DatePatcher.patch(output, options)
    output = EmojiPatcher.patch(output, 'left', options)
    output = ColorPatcher.patch(data, output, options)
    output = EmojiPatcher.patch(output, 'right', options)

    console.log(output)
  }

  public static printLong (data: PrintLongItem[], options: PrintLongOptions): void {
    let output = ''

    output = DatePatcher.patch(output, options)
    output = EmojiPatcher.patch(output, 'left', options)
    output = ColorPatcher.patchMany(data, output, options)
    output = EmojiPatcher.patch(output, 'right', options)

    console.log(output)
  }
}

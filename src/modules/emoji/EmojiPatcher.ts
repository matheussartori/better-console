import { PrintOptions, PrintLongOptions } from '../../console/BConsole/BConsole.types'
import { EmojiUtil } from './EmojiUtil'

export type EmojiSide = 'left' | 'right'

export class EmojiPatcher {
  static patch (output: string, side: EmojiSide, options?: PrintOptions): string {
    if (side === 'left' && options?.emojiLeft) {
      output += EmojiUtil.getEmojiBySlug(options.emojiLeft, side)
    }
    if (side === 'right' && options?.emojiRight) {
      output += EmojiUtil.getEmojiBySlug(options.emojiRight, side)
    }

    return output
  }

  static patchMany (output: string, side: EmojiSide, options?: PrintLongOptions): string {
    if (side === 'left' && options?.emojiLeft) {
      output += EmojiUtil.getEmojiBySlug(options.emojiLeft, side)
    }
    if (side === 'right' && options?.emojiRight) {
      output += EmojiUtil.getEmojiBySlug(options.emojiRight, side)
    }

    return output
  }
}

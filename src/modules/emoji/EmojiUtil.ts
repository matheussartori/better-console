import { Emoji } from './Emoji.types'
import { EmojiSide } from './EmojiPatcher'

export class EmojiUtil {
  public static getEmojiBySlug (emojiSlug: Emoji, side: EmojiSide): string {
    let output = ''

    if (side === 'right') {
      output += ' '
    }

    switch (emojiSlug) {
      case 'tangerine':
        output += '🍊'
        break
      case 'redHeart':
        output += '❤️'
        break
      case 'fire':
        output += '🔥'
        break
      case 'faceWithPeekingEye':
        output += '🫣'
        break
      case 'faceHoldingBackTears':
        output += '🥹'
        break
      case 'heartHands':
        output += '🫶'
        break
      case 'dottedLineFade':
        output += '🫥'
        break
      case 'smilingFaceWithSmilingEyes':
        output += '😊'
        break
      case 'bomb':
        output += '💣'
        break
      case 'battery':
        output += '🔋'
        break
      case 'lightbulb':
        output += '💡'
        break
      case 'flag:brazil':
        output += '🇧🇷'
    }

    if (side === 'left') {
      output += '  '
    }

    return output
  }
}

import { Emoji } from '../../modules/emoji/Emoji.types'
import {
  BackgroundTextColor,
  TextColor
} from '../../modules/color/Color.types'

type DateOptions = {
  show: boolean
  textColor?: TextColor
  format?: string
}

export interface PrintOptions {
  date?: DateOptions,
  textColor?: TextColor
  backgroundColor?: BackgroundTextColor
  emojiRight?: Emoji
  emojiLeft?: Emoji
}

export interface PrintLongOptions {
  date?: DateOptions,
  emojiRight?: Emoji
  emojiLeft?: Emoji
}

export interface PrintLongItemOptions {
  textColor?: TextColor
  backgroundColor?: BackgroundTextColor
}

export interface PrintLongItem {
  data: any
  options?: PrintLongItemOptions
}

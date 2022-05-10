import { format } from 'date-fns'

export class DateUtil {
  public static now (dateFormat?: string): string {
    let dateNow

    if (dateFormat) {
      dateNow = format(new Date(), dateFormat)
    } else {
      dateNow = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }

    return dateNow
  }
}

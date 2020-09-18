import dayjs from 'dayjs'
import QuarterPlugin from 'dayjs/plugin/quarterOfYear'
import AdvancedFormatPlugin from 'dayjs/plugin/advancedFormat'
import CustomParsePlugin from 'dayjs/plugin/customParseFormat'

dayjs.extend(QuarterPlugin)
dayjs.extend(AdvancedFormatPlugin)
dayjs.extend(CustomParsePlugin)

export function formatDate (date, format = 'DD/MM/YYYY') {
  return dayjs(date).format(format)
}

export default function useDate (date = null) {
  let currentDate = dayjs()
  
  if (date) {
    currentDate = dayjs(date)
  }

  return {
    moment: dayjs,
    date: currentDate,
    formatDate,
  }
}

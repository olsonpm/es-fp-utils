import { isBefore } from 'date-fns'

export default date2 => date1 => isBefore(date1, date2)

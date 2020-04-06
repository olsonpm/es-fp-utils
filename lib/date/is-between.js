import { isAfter, isBefore } from 'date-fns'

export default (date1, date2) => someDate =>
  isAfter(someDate, date1) !== isBefore(someDate, date2)

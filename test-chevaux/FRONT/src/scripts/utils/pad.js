export default function (value, length = 2) {
  const max = Math.max(length - `${value}`.length, 0) 
  let i = 0 
  let str = '' 

  while (i < max) {
    str += '0'
    i++
  }

  return `${str}${value}`
}
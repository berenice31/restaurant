import isNumber from 'lodash/isNumber'

export function getPercent (value, reference) {
  return value * 100 / reference
} 

export function toFixed (value, count = 2) {
  const float = parseFloat(value).toFixed(count)
  const regexp = new RegExp(`\\.0{${count}}`)

  return float.match(regexp) ? parseFloat(float.replace(regexp, '')) : float
}

// From https://stackoverflow.com/a/16637170
export function toThousand (value) {
  let parts = `${value}`.split('.')

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return parts.join(',')
}

export function toFrenchFloat (value) {
  return `${value}`.replace('.', ',')
}

export function displayAmount (value) {
  return toFrenchFloat(toThousand(toFixed(value)))
}

export default function useNumbers () {
  return {
    getPercent,
    toFixed,
    toThousand,
    toFrenchFloat,
    displayAmount,
    isNumber,
  }
}

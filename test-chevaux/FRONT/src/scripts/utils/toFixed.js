export default (value, count = 2) => {
  const float = parseFloat(value).toFixed(count)
  const regexp = new RegExp(`\\.0{${count}}`)

  return float.match(regexp) ? parseFloat(float.replace(regexp, '')) : float
}

export default (value) => {
  const float = parseFloat(value).toFixed(2)

  return float.match(/\.0{2}/) ? parseFloat(float.replace(/\.0{2}/, '')) : float
}

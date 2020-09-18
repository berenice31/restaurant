export default (value) => {
  return `${value}`
    .replace(/[/\\-_.]+/g, '')
    .split(' ')
    .map(w => w.substr(0, 1))
    .splice(0, 2)
    .join('')
}

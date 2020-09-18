export default function (str = '') {
  return str.match(/^(\d{3}\s*){3}(\d{5})+$/)
}

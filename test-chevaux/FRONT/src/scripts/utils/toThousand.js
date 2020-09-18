// From https://stackoverflow.com/a/16637170
export default function (value) {
  let parts = `${value}`.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return parts.join(',');
}
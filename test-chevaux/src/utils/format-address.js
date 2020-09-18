export default function (address = {}) {
  return {
    street: `${address.numero || ''} ${address.street || ''}`
      .replace(/\s+/gi, ' ')
      .trim(),
    city: `${address.zipcode || ''} ${address.city || ''}`
      .replace(/\s+/gi, ' ')
      .trim(),
    city_country: `${address.zipcode || ''} ${address.city || ''}, ${address.country || ''}`
      .replace(/\s+/gi, ' ')
      .trim()
      .replace(/^,/, ''),
  }
}
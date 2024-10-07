export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((e) => typeof e === 'string' && e.startsWith(startString))
    .map((e) => e.slice(startString.length))
    .join('-');
}

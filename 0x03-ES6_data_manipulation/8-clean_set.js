export default function cleanSet(set, startString) {
  set.reduce((e) => e.slice(0, startString.length) === startString)
    .map((e) => e.slice(startString.length, e.length))
    .join('-');
}

export default function createInt8TypedArray(length, position, value) {
  const view = new Int8Array(length);
  if (position >= length) {
    throw new Error('Position outside range');
  }
  view[position] = value;
  return new DataView(view.buffer);
}

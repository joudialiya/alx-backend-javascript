export default function createInt8TypedArray(length, position, value) {
  const view = new Int8Array(length);
  if ((position < 0) || (position >= length)) {
    throw new Error('Position outside range');
  }
  view[position] = value;
  return view.buffer;
}

export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (const element of array) {
    newArray = newArray.push(element + appendString);
  }

  return newArray;
}

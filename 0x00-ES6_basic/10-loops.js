export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (const element of array) {
    newArray.push(appendString + element);
  }

  return newArray;
}

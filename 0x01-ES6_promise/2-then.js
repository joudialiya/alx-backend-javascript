export default function handleResponseFromAPI(promise) {
  let result;
  promise.then(
    () => {
      result = {
        status: 200,
        body: 'Success',
      };
    },
    () => {
      result = new Error();
    },
  ).finally(() => {
    console.log('Got a response from the API');
  });

  return result;
}

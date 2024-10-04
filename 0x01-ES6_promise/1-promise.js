export default function getFullResponseFromAPI(success) {
  const content = (success) ? {
    status: 200,
    body: 'Success',
  } : 'The fake API is not working currently';

  return Promise.resolve(content);
}

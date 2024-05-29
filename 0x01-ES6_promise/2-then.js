function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error());
    }
  });
}

handleResponseFromAPI
  .then(console.log('Got a response from the API'))
  .then(console.log('Got a response from the API'))
  .then(console.log('Got a response from the API'));

export default handleResponseFromAPI;

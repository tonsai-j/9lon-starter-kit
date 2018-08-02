function to(promise) {
  return promise
    .then(data => {
      return {
        error: null,
        result: data
      };
    })
    .catch(err => {
      return {
        error: err
      };
    });
};

export default to
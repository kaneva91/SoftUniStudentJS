

const productsService = {
  load: function (data) {
    console.log(data)
    const path = `http://localhost:9999/api${data}`
    return fetch(path)
      .then(res => res.json());

  },

  getOne: function (path) {
    return fetch(path)
      .then(res => res.json());

  }
};

export default productsService;
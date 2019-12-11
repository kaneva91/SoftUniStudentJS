const productsService = {
    load: function (data) {
      const path = `http://localhost:9999/api${data}`
      console.log(path)
      return fetch(path)
      .then(res => res.json());
     
    },
    
  };

  export default productsService;
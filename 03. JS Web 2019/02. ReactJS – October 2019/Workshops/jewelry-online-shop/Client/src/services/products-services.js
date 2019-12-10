const productsService = {
    load: function (product) {
      
      return fetch(`http://localhost:9999/api/${product}`)
      .then(res => res.json());
     
    }
  };

  export default productsService;
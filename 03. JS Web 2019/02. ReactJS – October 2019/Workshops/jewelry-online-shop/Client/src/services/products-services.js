const productsService = {
    load: function (product) {
      
      return fetch(`http://localhost:9999/api/${product}`)
      .then(res => res.json());
     
    },
    details : function(category, id){
        return fetch(`http://localhost:9999/api/${category}/${id}`)
        .then(res=>res.json())
    }
  };

  export default productsService;
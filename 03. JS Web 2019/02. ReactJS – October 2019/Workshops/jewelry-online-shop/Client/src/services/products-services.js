const productsService = {
    load: function (product) {
      return fetch(`http://localhost:9999/api/${product}`)
      .then(res => res.json());
     
    },
    details : function(category, id){
     // console.log(category, id)
         return fetch(`http://localhost:9999/api/${category}/${id}`)
        .then(res=>res.json()) 
        .catch(err=>console.log(err))
    }
  };

  export default productsService;
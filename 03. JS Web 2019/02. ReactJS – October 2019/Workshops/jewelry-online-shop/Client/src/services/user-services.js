const userServices = {
    register: function (data) {
       
        return fetch(`http://localhost:9999/api/user/register`, {
          body: JSON.stringify(data),
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      },

    login: function (data) {
      return fetch(`http://localhost:9999/api/user/login`, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      }).then(res => res.json());
    },

    logout: function () {
      return fetch(`http://localhost:9999/api/user/logout`, {
        method: 'POST',
        credentials: 'include'
      }).then(res => res.text());
    },
    
    add : function(itemId){
       return fetch(`http://localhost:9999/api/user/add/${itemId}`)
       .then(res=>console.log(res))
       .catch(err => console.log(err))
    },
    getProfile: function(id){
        return fetch(`http://localhost:9999/api/user/${id}`)
        .then(res=>res.json())
        .catch(err=>console.log(err))
    }

      /* return fetch(`http://localhost:9999/api/user/add/${userId}`,{
        method : "POST",
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        },
        body: {
         itemId
        }
      })
      .then(res=> res.text())
    } */
}

export default userServices;
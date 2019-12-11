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
    add : function(userId, itemId){
      console.log(userId,itemId)
      return fetch(`http://localhost:9999/api/user/add${userId}`,{
        method : "POST",
        credentials: 'include',
        body : {
          itemId
        }
      })
      .then(res=> res.json())
    }
}

export default userServices;
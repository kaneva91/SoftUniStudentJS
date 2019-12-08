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

    }
}

export default userServices;
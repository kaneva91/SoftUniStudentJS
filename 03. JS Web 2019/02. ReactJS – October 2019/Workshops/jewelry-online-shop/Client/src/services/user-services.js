const userServices = {
    register: function (data) {
        console.log(data);
        return fetch(`http://localhost:9999/api/user/register`, {
          body: JSON.stringify(data),
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      },

    login: function () {

    },
    logout: function () {

    }
}

export default userServices;
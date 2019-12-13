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

   addItem: function (userId,itemId) {
    return fetch(`http://localhost:9999/api/user/add/${userId}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify({itemId}),
      headers: {
        'Content-type': 'application/json'
      }
      
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  },
  getProfile: function (id) {
    return fetch(`http://localhost:9999/api/user/${id}`)
      .then(res => res.json())
      .catch(err => console.log(err))
  },

  updateUser(id, data) {
    console.log(id, data)
    return fetch(`http://localhost:9999/api/user/${id}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    }
    )
      .then(res => res.json())
      .catch(err => console.log(err))

  },

  deleteUser: (id) => {
    return fetch(`http://localhost:9999/api/user/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  },

};


export default userServices;
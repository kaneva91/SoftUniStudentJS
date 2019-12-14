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

   addItem: function (userId,item) {
    return fetch(`http://localhost:9999/api/user/add/${userId}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(item),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
   
  },
  getProfile: function (id) {
    return fetch(`http://localhost:9999/api/user/${id}`)
      .then(res => res.json())
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
  },

  getCartItems:(id) =>{
    return fetch(`http://localhost:9999/api/user/get/${id}`)
    .then(res=> res.json())
  }
};


export default userServices;
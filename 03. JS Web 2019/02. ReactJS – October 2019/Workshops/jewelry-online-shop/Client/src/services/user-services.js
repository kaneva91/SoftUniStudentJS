const mainPath = 'http://localhost:9999/api/user/';
const userServices = {
  register: function (data) {

    return fetch(`${mainPath}register`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json());
  },

  login: function (data) {
    return fetch(`${mainPath}login`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json());
  },

  logout: function () {
    return fetch(`${mainPath}logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.text());
  },

  addItem: function (userId, item) {
    return fetch(`${mainPath}add/${userId}`, {
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
    return fetch(`${mainPath}${id}`)
      .then(res => res.json())
  },

  updateUser(id, data) {
    console.log(id, data)
    return fetch(`${mainPath}${id}`, {
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
    return fetch(`${mainPath}${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
  },

  getCartItems: (id) => {
    return fetch(`${mainPath}get/${id}`)
      .then(res => res.json())
  },

  deleteCart: (id) => {
    return fetch(`${mainPath}deleteCart/${id}`,{
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
  }
};


export default userServices;
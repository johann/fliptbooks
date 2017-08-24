class Auth {

  static login(user_params) {
    return fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(user_params),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
  }


  static currentUser() {
    return fetch('/api/currentuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`

      }
    })
    .then(res => res.json())
  }
}


export default Auth

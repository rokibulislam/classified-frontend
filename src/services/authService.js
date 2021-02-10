import jwtDecode from 'jwt-decode'
const tokenKey = 'auth_token'


export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt)
}

export function logout() {
  localStorage.removeItem('name')
  localStorage.removeItem('email')
  localStorage.removeItem('auth_token')
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey)
    return jwtDecode(jwt)
  } catch (ex) {
    return null
  }
}

export function updateCurrentUser({
  name,
  email,
  avatar,
  companyName,
  phoneNumber,
}) {
  localStorage.setItem('name', name)
  localStorage.setItem('email', email)
}

export function getJwt() {
  return localStorage.getItem(tokenKey)
}

export function setJwt( token ) {
  return localStorage.setItem(tokenKey, token )
}

export default {
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  setJwt
}
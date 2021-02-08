import jwtDecode from 'jwt-decode'
import http from './httpService'

const tokenKey = 'auth_token'

http.setAuthToken(getJwt())

export async function login(email, password) {
  const { data } = await http.post('/auth/login', { email, password })
}

const register = user => {
  return http.post('', {
    email: user.email,
    password: user.password,
    name: user.name,
  })
}

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
  localStorage.setItem('avatar', avatar || '')
  localStorage.setItem('companyName', companyName || '')
  localStorage.setItem('phoneNumber', phoneNumber || '')
}

export function getJwt() {
  return localStorage.getItem(tokenKey)
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  register,
}
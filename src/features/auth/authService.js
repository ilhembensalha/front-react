import axios from 'axios'

const API_URL = '/api/utilisateur/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'signup', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    localStorage.setItem('Bearer', response.data.token);
    localStorage.setItem('id', response.data.userId);
    
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    localStorage.setItem('Bearer', response.data.token);
    localStorage.setItem('id', response.data.userId);
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('Bearer')
  localStorage.removeItem('id')
}

const authService = {
  register,
  logout,
  login,
}

export default authService

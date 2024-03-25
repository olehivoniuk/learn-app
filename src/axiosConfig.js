import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Your API base URL
})

// Add a request interceptor to set the Authorization header with the token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance

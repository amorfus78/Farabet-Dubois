import axios from 'axios'
import { getToken } from '../utils/session'

const API_URL = 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: API_URL,
})

apiClient.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default apiClient

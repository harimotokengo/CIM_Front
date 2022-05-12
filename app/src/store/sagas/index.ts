import axios from 'axios'

export const baseURL = `${process.env.REACT_APP_DOMAIN || 'http://127.0.0.1:3000'}/api`

export const apiInstance = axios.create({
  headers: {
    ContentType: 'application/json',
  },
  baseURL,
  withCredentials: true,
})

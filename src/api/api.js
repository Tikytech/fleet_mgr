import axios from 'axios'

const baseURL = 'https://fm.wavebeep.com/v1/'

export const api = axios.create({
  baseURL: '/api',
  timeout: 50000,
  headers: {
    // 'Access-Control-Allow-Origin': 'http://localhost:5173',
    'Access-Control-Allow-Origin': baseURL
  }
})

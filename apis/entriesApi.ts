import axios from 'axios'

const BASE_URL = '/api'
export const ENDPOINTS = {
  entries: {
    url: `${BASE_URL}/entries/`,
  },
}

const entriesApi = axios.create({
  baseURL: BASE_URL,
})

export default entriesApi

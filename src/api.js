import axios from 'axios'

const swapiClient = axios.create({ baseURL: 'https://swapi.dev/api' })

const getPeople = (params) => swapiClient.get('/people', { params })
const getPerson = (id) => swapiClient.get(`/people/${id}`)

export const swapi = { getPeople, getPerson }

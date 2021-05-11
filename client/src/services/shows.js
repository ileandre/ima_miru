import api from './apiConfig'

export const getShows = async () => {
  try {
      const response = await api.get('/shows')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getShow = async id => {
  try {
      const response = await api.get(`/shows/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createShow = async show => {
  try {
      const response = await api.post('/shows', show)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateShow = async (id, show) => {
  try {
      const response = await api.put(`/shows/${id}`, show)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteShow = async id => {
  try {
      const response = await api.delete(`/shows/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}
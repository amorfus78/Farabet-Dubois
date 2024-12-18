import apiClient from './apiClient'

export const register = async (userData) => {
  try {
    const response = await apiClient.post('/register', userData)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message || "Erreur lors de l'inscription",
      )
    }
    throw new Error('Erreur réseau ou serveur non joignable')
  }
}

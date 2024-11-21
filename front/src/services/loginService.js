import apiClient from './apiClient'

export const login = async (userData) => {
  try {
    const response = await apiClient.post('/login', userData)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message || 'Erreur lors de la connexion',
      )
    }
    throw new Error('Erreur réseau ou serveur non joignable')
  }
}

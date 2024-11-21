import apiClient from './apiClient'

export const updateUser = async (userData) => {
  try {
    const response = await apiClient.patch('/users', userData)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message ||
          'Erreur lors de la mise à jour du profil',
      )
    }
    throw new Error('Erreur réseau ou serveur non joignable')
  }
}

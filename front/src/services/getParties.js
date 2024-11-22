import apiClient from './apiClient'

export const getParties = async (token, filters = {}) => {
  try {
    const response = await apiClient.get('/parties', {
      params: filters,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    if (error.response) {
      console.error('Erreur API:', error.response.data)
      throw new Error(
        error.response.data.message ||
          'Erreur lors de la récupération des soirées',
      )
    }
    throw new Error('Erreur réseau ou serveur non joignable')
  }
}

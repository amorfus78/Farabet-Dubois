import apiClient from './apiClient'

export const createParty = async (partyData, token) => {
  try {
    const response = await apiClient.post('/parties', partyData, {
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
          'Erreur lors de la création de la soirée',
      )
    }
    throw new Error('Erreur réseau ou serveur non joignable')
  }
}

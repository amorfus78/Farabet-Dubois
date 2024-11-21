import apiClient from './apiClient'

export const addAddress = async (addressData) => {
  if (!addressData.state) {
    throw new Error('Le champ "state" est requis.')
  }

  try {
    const response = await apiClient.post('/addresses', addressData)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message || 'Erreur lors de l’ajout de l’adresse',
      )
    }
    throw new Error('Erreur réseau ou serveur non joignable')
  }
}

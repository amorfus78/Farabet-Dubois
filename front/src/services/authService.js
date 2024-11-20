import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const register = async (userData) => {
  try {
    console.log(userData)

    const response = await axios.post(`${API_URL}/register`, userData)
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

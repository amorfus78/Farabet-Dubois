import { useState } from 'react'
import { login } from '../../services/loginService' // Assurez-vous d'importer votre service
import { setToken } from '../../utils/session'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email || !password) {
      setError('Tous les champs sont obligatoires')
      return
    }

    try {
      setLoading(true)
      const userData = { email, password }
      const response = await login(userData)
      console.log('Connexion réussie', response)

      setToken(response.token)
      window.location.href = '/home'
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Entrer votre e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Entrer votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
      >
        {loading ? 'Chargement...' : 'Se connecter'}
      </button>
    </form>
  )
}

export default LoginForm

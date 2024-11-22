import { useState } from 'react'
import { getParties } from '../../services/getParties'
import { getToken } from '../../utils/session'

const Search = () => {
  const [location, setLocation] = useState('')
  const [eventType, setEventType] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState([])

  const token = getToken()

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!token) {
      setError('Veuillez vous connecter pour rechercher des soirées.')
      setLoading(false)
      return
    }

    const filters = {
      city: location.trim(),
      type: eventType.trim(),
    }

    if (!filters.city && !filters.type) {
      setError('Veuillez spécifier au moins une ville ou un type de soirée.')
      setLoading(false)
      return
    }

    try {
      const data = await getParties(token, filters)
      if (data && data.parties && data.parties.length > 0) {
        setResults(data.parties)
      } else {
        setResults([])
        setError('Aucune soirée trouvée pour ces critères.')
      }
    } catch (err) {
      console.log(err)
      setError('Erreur lors de la récupération des soirées')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="search" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Trouve ta soirée idéale</h2>
        <form
          className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto"
          onSubmit={handleSearch}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="location"
                className="block text-gray-700 font-medium mb-2"
              >
                Ville
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ville"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div>
              <label
                htmlFor="eventType"
                className="block text-gray-700 font-medium mb-2"
              >
                Type de soirée
              </label>
              <select
                id="eventType"
                name="eventType"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="">Sélectionner un type</option>
                <option value="Jeux de société">Jeux de société</option>
                <option value="Jeux vidéo">Jeux vidéo</option>
                <option value="Soirée classique">Soirée classique</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            {loading ? 'Chargement...' : 'Rechercher'}
          </button>
        </form>

        {error && <div className="mt-4 text-red-500">{error}</div>}

        {results.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Résultats de recherche</h3>
            <ul className="mt-4">
              {results.map((party) => (
                <li
                  key={party.id}
                  className="bg-white p-4 mb-4 rounded-lg shadow-md"
                >
                  <h4 className="font-semibold">{party.name}</h4>
                  <p>{party.description}</p>
                  <p>
                    <strong>Type:</strong> {party.type}
                  </p>
                  <p>
                    <strong>Prix:</strong> {party.price}€
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default Search

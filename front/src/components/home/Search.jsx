const Search = () => {
  return (
    <section id="search" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Trouve ta soirée idéale</h2>
        <form className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option>Jeux de société</option>
                <option>Jeux vidéo</option>
                <option>Soirée classique</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Rechercher
          </button>
        </form>
      </div>
    </section>
  )
}

export default Search

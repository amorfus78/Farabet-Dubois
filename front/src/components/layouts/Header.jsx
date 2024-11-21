import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../../utils/session'
import { useState, useEffect } from 'react'

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setAuthenticated(isAuthenticated())
  }, [])

  const handleLogout = () => {
    removeToken()
    setAuthenticated(false)
    navigate('/auth')
  }

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          <Link to="/home" className="hover:text-gray-400">
            EventHub
          </Link>
        </h1>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/home" className="hover:text-gray-400">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-x-4">
          {authenticated ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
            >
              Connexion
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

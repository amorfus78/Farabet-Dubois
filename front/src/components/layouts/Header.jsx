const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">EventHub</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/home" className="hover:text-gray-400">
                Accueil
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                À propos
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

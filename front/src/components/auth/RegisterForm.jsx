const RegisterForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-gray-700 font-medium mb-2"
        >
          Nom d'utilisateur
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Entrer votre nom d'utilisateur"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Entrer votre e-mail"
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
          placeholder="Créer un mot de passe"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
      >
        S'inscrire
      </button>
    </form>
  )
}

export default RegisterForm

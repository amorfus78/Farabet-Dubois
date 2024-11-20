import { useState } from 'react'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-around mb-6 border-b border-gray-200">
          <button
            className={`w-1/2 text-center py-2 font-semibold ${activeTab === 'login' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('login')}
          >
            Connexion
          </button>
          <button
            className={`w-1/2 text-center py-2 font-semibold ${activeTab === 'register' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('register')}
          >
            Inscription
          </button>
        </div>
        {activeTab === 'login' ? (
          <LoginForm />
        ) : (
          <RegisterForm setActiveTab={setActiveTab} />
        )}
      </div>
    </div>
  )
}

export default AuthPage

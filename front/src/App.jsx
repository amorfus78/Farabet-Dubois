import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import AuthPage from './pages/AuthPage'
import ProtectedRoute from './utils/ProtectedRoute'
import EditProfilePage from './pages/EditProfilePage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

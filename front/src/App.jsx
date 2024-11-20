import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import AuthPage from './pages/AuthPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isAuthenticated } from '../utils/session'

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/auth" />
  }
  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProtectedRoute

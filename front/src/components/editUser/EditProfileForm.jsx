import { useState } from 'react'
import { updateUser } from '../services/updateUser'
import PropTypes from 'prop-types'

const EditProfileForm = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    age: '',
  })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    try {
      const response = await updateUser(formData)
      console.log(response)

      setSuccess('Profil mis à jour avec succès')
      onSuccess()
    } catch (err) {
      setError(err.message)
      onError(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}

      <div>
        <label htmlFor="first_name" className="block mb-2 font-medium">
          Prénom
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="last_name" className="block mb-2 font-medium">
          Nom
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="age" className="block mb-2 font-medium">
          Âge
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Enregistrer
      </button>
    </form>
  )
}

EditProfileForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
}

export default EditProfileForm

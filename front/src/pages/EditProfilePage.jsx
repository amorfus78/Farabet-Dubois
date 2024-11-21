import { useState } from 'react'
import { updateUser } from '../services/updateUser'
import AddressForm from '../components/editUser/AddressForm'

const EditProfilePage = () => {
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
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Modifier votre profil</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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

      <div className="mt-8">
        <AddressForm
          onSuccess={() => setSuccess('Adresse mise à jour avec succès')}
          onError={(err) => setError(err.message)}
        />
      </div>
    </div>
  )
}

export default EditProfilePage

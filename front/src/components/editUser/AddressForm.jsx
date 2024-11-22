import { useState } from 'react'
import { addAddress } from '../../services/addAddress'
import PropTypes from 'prop-types'

const AddressForm = ({ onSuccess, onError }) => {
  const [addressData, setAddressData] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    country: '',
    zip_code: '',
  })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setAddressData({ ...addressData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    const missingFields = Object.entries(addressData).filter(
      ([value]) => !value,
    )
    if (missingFields.length > 0) {
      setError('Tous les champs sont obligatoires.')
      return
    }

    try {
      await addAddress(addressData)
      setSuccess('Adresse mise à jour avec succès')
      setAddressData({
        line1: '',
        line2: '',
        city: '',
        state: '',
        country: '',
        zip_code: '',
      })
      if (onSuccess) onSuccess()
    } catch (err) {
      setError(err.message)
      if (onError) onError(err)
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Adresse</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        {error && <div className="text-red-600">{error}</div>}
        {success && <div className="text-green-600">{success}</div>}

        <div>
          <label htmlFor="line1" className="block mb-2 font-medium">
            Adresse (ligne 1)
          </label>
          <input
            type="text"
            id="line1"
            name="line1"
            value={addressData.line1}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="line2" className="block mb-2 font-medium">
            Adresse (ligne 2)
          </label>
          <input
            type="text"
            id="line2"
            name="line2"
            value={addressData.line2}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="city" className="block mb-2 font-medium">
            Ville
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={addressData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="state" className="block mb-2 font-medium">
            Région/État
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={addressData.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="country" className="block mb-2 font-medium">
            Pays
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={addressData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="zip_code" className="block mb-2 font-medium">
            Code postal
          </label>
          <input
            type="text"
            id="zip_code"
            name="zip_code"
            value={addressData.zip_code}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Enregistrer l&apos;adresse
        </button>
      </form>
    </div>
  )
}

AddressForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
}

export default AddressForm

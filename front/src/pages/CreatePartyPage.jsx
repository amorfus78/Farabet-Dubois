import { useState } from 'react'
import { createParty } from '../services/createParty'
import { getToken } from '../utils/session'
import PartyForm from '../components/PartyForm'

const CreatePartyPage = () => {
  const [partyData, setPartyData] = useState({
    name: '',
    description: '',
    price: 0,
    start_date: '',
    number_of_spots: 0,
    consumables_needed: false,
    type: '',
  })
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setPartyData({
      ...partyData,
      [name]: value === 'true' ? true : value === 'false' ? false : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    const token = getToken()
    if (!token) {
      setErrorMessage('Vous devez être connecté pour créer une soirée.')
      return
    }

    try {
      await createParty(partyData, token)
      setSuccessMessage('La soirée a été créée avec succès !')
      setPartyData({
        name: '',
        description: '',
        price: '',
        start_date: '',
        number_of_spots: '',
        consumables_needed: false,
        type: '',
      })
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Créer une nouvelle soirée</h1>
      {successMessage && (
        <div className="text-green-600 mb-4">{successMessage}</div>
      )}
      {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
      <PartyForm
        partyData={partyData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default CreatePartyPage

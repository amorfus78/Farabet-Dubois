import PropTypes from 'prop-types'

const PartyForm = ({ partyData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { label: 'Nom de la soirée', name: 'name', type: 'text' },
        { label: 'Description', name: 'description', type: 'textarea' },
        { label: 'Prix (€)', name: 'price', type: 'number' },
        { label: 'Date de début', name: 'start_date', type: 'datetime-local' },
        { label: 'Nombre de places', name: 'number_of_spots', type: 'number' },
        {
          label: 'Besoins en consommables',
          name: 'consumables_needed',
          type: 'checkbox',
          options: [
            { label: 'Oui', value: true },
            { label: 'Non', value: false },
          ],
        },
        { label: 'Type de soirée', name: 'type', type: 'text' },
      ].map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block font-medium mb-2">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={partyData[field.name]}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          ) : field.type === 'checkbox' ? (
            <div className="flex space-x-4">
              {field.options.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    name={field.name}
                    checked={partyData[field.name] === option.value}
                    onChange={() =>
                      handleChange({
                        target: {
                          name: field.name,
                          value: option.value,
                        },
                      })
                    }
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              ))}
            </div>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={partyData[field.name]}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Créer la soirée
      </button>
    </form>
  )
}

PartyForm.propTypes = {
  partyData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    start_date: PropTypes.string.isRequired,
    number_of_spots: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    consumables_needed: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
      .isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default PartyForm

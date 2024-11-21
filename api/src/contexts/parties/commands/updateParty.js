import PartyModel from '../../../../db/models/PartyModel.js'

const updateParty = async (partyId, name, description, price, start_date, number_of_spots, consumables_needed, type) => {
	try {
		const party = await PartyModel.query().findById(partyId)
		const updatedParty = await party.$query().patchAndFetch({
			name,
			description,
			price,
			start_date,
			number_of_spots,
			consumables_needed,
			type,
		})

		return [null, updatedParty]
	} catch (error) {
		console.log('error', error)
		return [error, null]
	}
}

export default updateParty

import PartyModel from '../../../../db/models/PartyModel.js'

const searchParties = async (city, type, offset = 0, limit = 5) => {
	try {

		let query = PartyModel.query()
			.join('participants', 'parties.id', 'participants.party_id')

		if (city) {
			query = query
				.join('users', 'participants.user_id', 'users.id')
				.join('addresses', 'users.address_id', 'addresses.id')
				.where('addresses.city', 'ilike', `%${city}%`)
		}

		if (type) {
			query = query.where('parties.type', type)
		}

		query = query.limit(limit).offset(offset)

		const partiesWithAddress = await query

		return [null, partiesWithAddress]
	} catch (error) {
		console.error('Erreur lors de la recherche des soirées:', error)
		return [error, null]
	}
}

export default searchParties

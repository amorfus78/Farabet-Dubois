
import PartyModel from '../../../../db/models/PartyModel.js'

const searchParties = async (city, type) => {
	try {
		const partiesWithAddress = await PartyModel.query()
			.join('participants', 'parties.id', 'participants.party_id')
			.join('users', 'participants.user_id', 'users.id')
			.join('addresses', 'users.address_id', 'addresses.id')
			.where('addresses.city', 'ilike', `%${city}%`)
			.where('parties.type', type)

		return [null, partiesWithAddress]
	} catch (error) {
		return [error, null]
	}
}

export default searchParties
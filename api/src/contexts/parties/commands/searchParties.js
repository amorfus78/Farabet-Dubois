
import PartyModel from '../../../../db/models/PartyModel.js'

const searchParties = async (city, type) => {
	try {
		console.log('city', city)
		console.log('type', type)

		let query = PartyModel.query()
			.join('participants', 'parties.id', 'participants.party_id')
			
		
		if (city) {
			console.log('city', city)
			query = 
				query.join('users', 'participants.user_id', 'users.id')
					.join('addresses', 'users.address_id', 'addresses.id')
					.where('addresses.city', 'ilike', `%${city}%`)
		}

		if (type) {
			console.log('type', type)
			query = query.where('parties.type', type)
		}

		const partiesWithAddress = await query
		
		return [null, partiesWithAddress]
	} catch (error) {
		return [error, null]
	}
}

export default searchParties
import PartyModel from '../../../../db/models/PartyModel.js'
import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const createParty = async (
	name,
	description,
	price,
	start_date,
	number_of_spots,
	consumables_needed,
	type,
	userId
) => {

	try {
		const party = await PartyModel.transaction(async (trx) => {
			const party = await PartyModel.query(trx).insertAndFetch({
				name,
				description,
				price,
				start_date,
				number_of_spots,
				consumables_needed,
				type
			})

			await ParticipantModel.query(trx).insert({
				user_id: userId,
				party_id: party.id,
				is_host: true,
				status: 'accepted'
			})
		
			return [null, party]
		})
		return party
	} catch (error) {
		return [error, null]
	}
}

export default createParty

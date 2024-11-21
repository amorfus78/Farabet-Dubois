import PartyModel from '../../../../db/models/PartyModel.js'
const getPartiesForUser = async (userId) => {

	try {
		const parties = await PartyModel.query().join('participants', 'parties.id', 'participants.party_id').where('participants.user_id', userId)
	
		return [null, parties]
	} catch (error) {
		console.error(error)
		return [error, null]
	}
}

export default getPartiesForUser
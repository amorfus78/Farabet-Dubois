import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const createPartyUser = async (partyId, userId) => {
	try {
		await ParticipantModel.query().insert({
			party_id: partyId,
			user_id: userId,
			is_host: false,
			status: 'pending',
		})
	} catch (error) {
		return error
	}
}

export default createPartyUser

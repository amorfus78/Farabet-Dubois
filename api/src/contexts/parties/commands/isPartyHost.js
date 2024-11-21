import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const isPartyHost = async (userId, partyId) => {
	const participant = await ParticipantModel
		.query()
		.where('user_id', userId)
		.where('party_id', partyId)
		.first()
	
	return participant?.is_host === true
}

export default isPartyHost
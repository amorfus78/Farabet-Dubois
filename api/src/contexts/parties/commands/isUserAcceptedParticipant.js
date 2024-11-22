import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const isUserAcceptedParticipant = async (partyId, userId) => {
	try {
		const participant = await ParticipantModel
			.query()
			.where('party_id', partyId)
			.andWhere('user_id', userId)
			.andWhere('status', 'accepted')
			.first()
		return [null, participant]
	} catch (error) {
		return [error, null]
	}
}

export default isUserAcceptedParticipant

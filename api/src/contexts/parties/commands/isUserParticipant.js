import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const isUserParticipant = async (partyId, userId) => {
	try {
		const participant = await ParticipantModel.query().where('party_id', partyId).andWhere('user_id', userId).first()
		return [null, participant]
	} catch (error) {
		return [error, null]
	}
}

export default isUserParticipant

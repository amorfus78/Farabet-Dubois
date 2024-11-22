import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const getParticipantById = async (participantId) => {
	try {
		const participant = await ParticipantModel.query().findById(participantId)
	
		return [null, participant]
	} catch (error) {
		return [error, null]
	}
}

export default getParticipantById
import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const updateParticipantStatus = async (participantId, status) => {
	try {
		const updatedParticipant = await ParticipantModel.query()
			.findById(participantId)
			.patch({ status })

		return [null, updatedParticipant]
	} catch (error) {
		return [error, null]
	}
}

export default updateParticipantStatus



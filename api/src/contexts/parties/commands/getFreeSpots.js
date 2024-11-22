import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const getFreeSpots = async (party) => {
	try {
		const participants = await ParticipantModel
			.query()
			.where('party_id', party.id)
			.andWhere('status', 'accepted')
		const freeSpots = party.number_of_spots - participants.length
		return [null, freeSpots]
	} catch (error) {
		return [error, null]
	}
}

export default getFreeSpots

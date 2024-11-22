import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const getAcceptedParticipants = async (partyId) => {
	try {	
		const participants = await ParticipantModel
			.query()
			.select('users.first_name', 'users.last_name', 'users.age', 'participants.id as participant_id', 'participants.status', 'participants.is_host')
			.join('users', 'users.id', 'participants.user_id')
			.where('party_id', partyId)
			.andWhere('status', 'accepted')
		
		console.log(participants)
		
		return [null, participants]
	} catch (error) {
		return [error, null]
	}
}

export default getAcceptedParticipants

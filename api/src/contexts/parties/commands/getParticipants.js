import ParticipantModel from '../../../../db/models/ParticipantModel.js'

const getParticipants = async (partyId) => {
	try {
		const acceptedParticipants = await ParticipantModel
			.query()
			.select('users.first_name', 'users.last_name', 'users.age', 'participants.id as participant_id', 'participants.status', 'participants.is_host')
			.join('users', 'users.id', 'participants.user_id')
			.where('party_id', partyId)
			.andWhere('status', 'accepted')
		
		const pendingParticipants = await ParticipantModel
			.query()
			.select('users.first_name', 'users.last_name', 'users.age', 'participants.id as participant_id', 'participants.status', 'participants.is_host')
			.join('users', 'users.id', 'participants.user_id')
			.where('party_id', partyId)
			.andWhere('status', 'pending')
		
		const rejectedParticipants = await ParticipantModel
			.query()
			.select('users.first_name', 'users.last_name', 'users.age', 'participants.id as participant_id', 'participants.status', 'participants.is_host')
			.join('users', 'users.id', 'participants.user_id')
			.where('party_id', partyId)
			.andWhere('status', 'rejected')
		
		return [null, {acceptedParticipants, pendingParticipants, rejectedParticipants}]
	} catch (error) {
		console.log(error)
		return [error, null]
	}
}

export default getParticipants

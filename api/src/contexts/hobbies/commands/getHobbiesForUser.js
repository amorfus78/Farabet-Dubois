import HobbyModel from '../../../../db/models/HobbyModel.js'

const getHobbiesForUser = async (user_id) => {
	try {
		const hobbies = await HobbyModel.query()
			.join('hobbies_users', 'hobbies.id', 'hobbies_users.hobby_id')
			.where('hobbies_users.user_id', user_id)

		return [null, hobbies]
	} catch (error) {
		return [error, null]
	}
}

export default getHobbiesForUser

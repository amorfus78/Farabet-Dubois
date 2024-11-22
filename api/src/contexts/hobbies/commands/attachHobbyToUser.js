import HobbyUserModel from '../../../../db/models/HobbyUserModel.js'

const attachHobbyToUser = async (hobby_id, userId) => {
	try {
		await HobbyUserModel.query().insert({
			hobby_id,
			user_id: userId,
		})
	} catch (error) {
		return error
	}
}

export default attachHobbyToUser

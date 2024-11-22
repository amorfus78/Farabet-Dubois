import HobbyModel from '../../../../db/models/HobbyModel.js'

const createHobby = async (name) => {
	try {
		await HobbyModel.query().insert({ name })
	} catch (error) {
		return error
	}
}

export default createHobby

import HobbyModel from '../../../../db/models/HobbyModel.js'

const getHobbies = async () => {
	try {
		const hobbies = await HobbyModel.query()

		return [null, hobbies]
	} catch (error) {
		return [error, null]
	}
}

export default getHobbies

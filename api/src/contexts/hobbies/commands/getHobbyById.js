import HobbyModel from '../../../../db/models/HobbyModel.js'

const getHobbyById = async (hobby_id) => {
	const hobby = await HobbyModel.query().findById(hobby_id)

	return hobby
}

export default getHobbyById

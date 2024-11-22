import HobbyModel from '../../../../db/models/HobbyModel.js'

const doesHobbyExists = async (name) => {
	const hobby = await HobbyModel.query().where('name', name).first()

	return !!hobby
}

export default doesHobbyExists

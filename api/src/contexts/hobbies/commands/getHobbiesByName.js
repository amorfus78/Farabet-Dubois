import HobbyModel from '../../../../db/models/HobbyModel.js'

const getHobbiesByName = async (name) => {
	console.log('getHobbiesByName', name)
	const hobbies = await HobbyModel.query().where('name', 'ilike', `%${name}%`)
	return [null, hobbies]
}

export default getHobbiesByName

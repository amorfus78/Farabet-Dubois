import doesHobbyExists from '../commands/doesHobbyExists.js'
import createHobby from '../commands/createHobby.js'
import { HOBBY_ALREADY_EXISTS, COULD_NOT_CREATE_HOBBY } from '../errors.js'

const createHobbyService = async (name) => {
	const hobbyExists = await doesHobbyExists(name)
	if (hobbyExists) {
		return HOBBY_ALREADY_EXISTS
	}

	const error = await createHobby(name)
	if (error) {
		return COULD_NOT_CREATE_HOBBY
	}
}

export default createHobbyService

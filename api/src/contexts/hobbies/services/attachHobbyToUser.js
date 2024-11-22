import {
	HOBBY_NOT_FOUND,
	COULD_NOT_ATTACH_HOBBY_TO_USER,
} from '../errors.js'
import getHobbyById from '../commands/getHobbyById.js'
import attachHobbyToUser from '../commands/attachHobbyToUser.js'

const attachHobbyToUserService = async (hobby_id, userId) => {
	const hobby = await getHobbyById(hobby_id)
	if (!hobby) {
		return HOBBY_NOT_FOUND
	}

	const error = await attachHobbyToUser(hobby_id, userId)

	if (error) {
		return COULD_NOT_ATTACH_HOBBY_TO_USER
	}
}

export default attachHobbyToUserService

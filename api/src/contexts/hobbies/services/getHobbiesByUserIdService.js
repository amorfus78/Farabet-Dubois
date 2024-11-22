import getUserById from '../commands/getUserById.js'
import getHobbiesForUser from '../commands/getHobbiesForUser.js'
import { COULD_NOT_GET_HOBBIES, USER_NOT_FOUND } from '../errors.js'

const getHobbiesByUserIdService = async (user_id) => {
	const [userError, user] = await getUserById(user_id)
	if (userError || !user) {
		return [USER_NOT_FOUND, null]
	}

	const [error, hobbies] = await getHobbiesForUser(user_id)
	if (error) {
		return [COULD_NOT_GET_HOBBIES, null]
	}

	return [null, hobbies]
}

export default getHobbiesByUserIdService

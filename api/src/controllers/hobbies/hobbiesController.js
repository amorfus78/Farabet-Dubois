import createHobbyService from '../../contexts/hobbies/services/createHobbyService.js'
import attachHobbyToUserService from '../../contexts/hobbies/services/attachHobbyToUser.js'
import HTTP_CODES from '../../httpCodes.js'
import { HOBBY_ALREADY_EXISTS, COULD_NOT_CREATE_HOBBY, HOBBY_NOT_FOUND, COULD_NOT_ATTACH_HOBBY_TO_USER } from '../../contexts/hobbies/errors.js'

export const createHobbyController = async (req, res) => {
	console.log('createHobbyController')
	const { name } = req.locals.body

	const error = await createHobbyService(name)
	switch (error) {
	case HOBBY_ALREADY_EXISTS:
		return res.status(HTTP_CODES.CONFLICT).json({ error: HOBBY_ALREADY_EXISTS })
	case COULD_NOT_CREATE_HOBBY:
		return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({ error: COULD_NOT_CREATE_HOBBY })
	}

	return res.status(HTTP_CODES.CREATED).json({ message: 'Hobby created successfully' })
}

export const attachHobbyToUserController = async (req, res) => {
	console.log('attachHobbyToUserController')

	const {
		params: { hobby_id },
		session: { userId },
	} = req.locals

	const error = await attachHobbyToUserService(hobby_id, userId)

	switch (error) {
	case HOBBY_NOT_FOUND:
		return res.status(HTTP_CODES.NOT_FOUND).json({ error: HOBBY_NOT_FOUND })
	case COULD_NOT_ATTACH_HOBBY_TO_USER:
		return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({ error: COULD_NOT_ATTACH_HOBBY_TO_USER })
	}

	return res.status(HTTP_CODES.CREATED).json({ message: 'Hobby attached to user successfully' })
}

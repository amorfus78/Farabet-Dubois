import createHobbyService from '../../contexts/hobbies/services/createHobbyService.js'
import HTTP_CODES from '../../httpCodes.js'
import { HOBBY_ALREADY_EXISTS, COULD_NOT_CREATE_HOBBY } from '../../contexts/hobbies/errors.js'

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
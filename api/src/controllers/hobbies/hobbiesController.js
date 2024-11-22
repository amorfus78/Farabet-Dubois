import createHobbyService from '../../contexts/hobbies/services/createHobbyService.js'
import attachHobbyToUserService from '../../contexts/hobbies/services/attachHobbyToUser.js'
import getHobbiesService from '../../contexts/hobbies/services/getHobbiesService.js'
import getHobbiesByUserIdService from '../../contexts/hobbies/services/getHobbiesByUserIdService.js'
import getHobbiesByNameService from '../../contexts/hobbies/services/getHobbiesByNameService.js'
import HTTP_CODES from '../../httpCodes.js'
import { HOBBY_ALREADY_EXISTS, COULD_NOT_CREATE_HOBBY, HOBBY_NOT_FOUND, COULD_NOT_ATTACH_HOBBY_TO_USER, COULD_NOT_GET_HOBBIES, USER_NOT_FOUND } from '../../contexts/hobbies/errors.js'

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

export const getHobbiesController = async (req, res) => {
	const [error, hobbies] = await getHobbiesService()

	switch (error) {
	case COULD_NOT_GET_HOBBIES:
		return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({ error: COULD_NOT_GET_HOBBIES })
	}

	return res.status(HTTP_CODES.OK).json({ hobbies })
}

export const getHobbiesByUserIdController = async (req, res) => {
	console.log('getHobbiesByUserIdController')

	const {
		params: { user_id },
	} = req.locals

	const [error, hobbies] = await getHobbiesByUserIdService(user_id)

	switch (error) {
	case USER_NOT_FOUND:
		return res.status(HTTP_CODES.NOT_FOUND).json({ error: USER_NOT_FOUND })
	case COULD_NOT_GET_HOBBIES:
		return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({ error: COULD_NOT_GET_HOBBIES })
	}

	return res.status(HTTP_CODES.OK).json({ hobbies })
}

export const getHobbiesByNameController = async (req, res) => {
	console.log('getHobbiesByNameController')

	const {
		query: { name },
	} = req.locals

	const [error, hobbies] = await getHobbiesByNameService(name)
	switch (error) {
	case COULD_NOT_GET_HOBBIES:
		return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).json({ error: COULD_NOT_GET_HOBBIES })
	}

	return res.status(HTTP_CODES.OK).json({ hobbies })
}

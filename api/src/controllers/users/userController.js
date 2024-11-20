import HTTP_CODES from '../../httpCodes.js'
import { USER_NOT_FOUND, USER_UPDATE_FAILED } from '../../contexts/users/errors.js'
import updateUserService from '../../contexts/users/services/updateUserService.js'

export const updateUserController = async (req, res) => {
	const error = await updateUserService(req.locals.session.userId, req.body)
	switch (error) {
	case USER_NOT_FOUND:
		res.status(HTTP_CODES.NOT_FOUND).send({ error: USER_NOT_FOUND })
		return
	case USER_UPDATE_FAILED:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ error: USER_UPDATE_FAILED })
		return
	}
	res.status(HTTP_CODES.NO_CONTENT).send()
}


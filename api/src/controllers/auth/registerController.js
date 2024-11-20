import HTTP_CODES from '../../httpCodes.js'
import { USER_ALREADY_EXISTS, USER_CREATION_FAILED } from '../../contexts/auth/errors.js'
import registerService from '../../contexts/auth/services/registerService.js'

const registerController = async (req, res) => {
	const error = await registerService(req.body)
	switch (error) {
	case USER_ALREADY_EXISTS:
		res.status(HTTP_CODES.CONFLICT).send({error: USER_ALREADY_EXISTS})
		return
	case USER_CREATION_FAILED:
		res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({error: USER_CREATION_FAILED})
		return
	}

	res.status(HTTP_CODES.CREATED).send({ message: 'User created successfully' })
}

export default registerController

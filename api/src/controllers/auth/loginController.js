import loginService from '../../contexts/auth/services/loginService.js'
import HTTP_CODES from '../../httpCodes.js'

const loginController = async (req, res) => {
	const [error, token] = await loginService(req.body)
	if (error) {
		return res.sendStatus(HTTP_CODES.UNAUTHORIZED)
	}
	return res.status(HTTP_CODES.OK).json({ token: token })
}

export default loginController

import { line1Validator, line2Validator, cityValidator, countryValidator, postalCodeValidator, stateValidator, verifyTokenValidator } from '../../validators.js'
import createAddressController from '../../controllers/addresses/addressController.js'
import { authenticate } from '../../middlewares/authenticate.js'
import validate from '../../middlewares/validate.js'

const addressRoutes = (app) => {
	app.post(
		'/addresses',
		validate({
			body: {
				line1: line1Validator,
				line2: line2Validator,
				city: cityValidator.required(),
				country: countryValidator,
				state: stateValidator,
				zip_code: postalCodeValidator,
			},
			headers: {
				authorization: verifyTokenValidator,
			},
		}),
		authenticate,
		createAddressController)
}

export default addressRoutes

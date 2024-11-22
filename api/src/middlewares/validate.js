import * as yup from 'yup'
import deepmerge from 'deepmerge'
import HTTP_CODES from '../httpCodes.js'

const validate = (schema) => {
	const validator = yup.object().shape({
		...(schema.body ? { body: yup.object().shape(schema.body) } : {}),
		...(schema.params ? { params: yup.object().shape(schema.params) } : {}),
		...(schema.query ? { query: yup.object().shape(schema.query) } : {}),
		...(schema.headers ? { headers: yup.object().shape(schema.headers) } : {}),
	})

	return async (req, res, next) => {
		const customReq = req

		try {
			console.log('validate')
			const { body } = await validator.validate(
				{
					body: customReq.body,
					params: customReq.params,
					query: customReq.query,
					headers: customReq.headers,
				},
				{ abortEarly: false },
			)

			customReq.locals = deepmerge(customReq.locals || {}, {
				body,
				params: customReq.params,
				query: customReq.query,
				headers: customReq.headers,
			})

			next()
		} catch (err) {
			console.log(err)
			if (err instanceof yup.ValidationError) {
				res.status(HTTP_CODES.UNPROCESSABLE_ENTITY).send({ error: err.errors })
				return
			}

			res
				.status(HTTP_CODES.INTERNAL_SERVER_ERROR)
				.send(HTTP_CODES.UNEXPECTED_ERROR)
		}
	}
}

export default validate

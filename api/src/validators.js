import * as yup from 'yup'

export const emailValidator = yup.string().email().required()

export const passwordValidator = yup.string().required()

export const nameValidator = yup.string().required()

export const ageValidator = yup.number().required()

export const verifyTokenValidator = yup.string().required('Token is required')

export const line1Validator = yup.string().required()

export const line2Validator = yup.string()

export const cityValidator = yup.string().required()

export const countryValidator = yup.string().required()

export const postalCodeValidator = yup.string().required()

export const stateValidator = yup.string().required()

export const messageValidator = yup.string().required()

export const idValidator = yup.number().required()
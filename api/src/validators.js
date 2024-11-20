import * as yup from 'yup'

export const emailValidator = yup.string().email().required()

export const passwordValidator = yup.string().required()

export const nameValidator = yup.string().required()

export const ageValidator = yup.number().required()

export const postalCodeValidator = yup.string().required()

export const cityValidator = yup.string().required()

export const verifyTokenValidator = yup.string().required('Token is required')
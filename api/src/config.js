import knexfile from '../knexfile.js'
import dotenv from 'dotenv'

dotenv.config()

const config = {
	port: 3000,
	db: knexfile,
	security: {
		password: {
			pepper: process.env.PASSWORD_PEPPER,
			saltlen: 128,
			iterations: 10,
			keylen: 128,
			digest: 'sha512',
		},
		jwt: {
			secret: process.env.JWT_SECRET,
			expiresIn: '2h',
		},
	},
}

export default config

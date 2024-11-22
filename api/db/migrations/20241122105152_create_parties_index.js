export const up = async (knex) => {
	await knex.raw('CREATE INDEX party_type_index ON parties (type)')
}

export const down = async (knex) => {
	await knex.raw('DROP INDEX party_type_index ON parties')
}

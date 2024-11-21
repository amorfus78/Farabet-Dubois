export const up = async (knex) => {
	await knex.schema.createTable('participants', (table) => {
		table.increments('id').primary()
		table.integer('user_id').references('id').inTable('users').notNullable()
		table.integer('party_id').references('id').inTable('parties').notNullable()
		table.boolean('is_host').notNullable()
		table.string('status').notNullable()
	})
}

export const down = async (knex) => {
	await knex.schema.dropTable('participants')
}

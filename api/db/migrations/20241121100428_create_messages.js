export const up = async (knex) => {
	await knex.schema.createTable('messages', (table) => {
		table.increments('id').primary()
		table.integer('recipient_id').references('id').inTable('users').notNullable()
		table.integer('sender_id').references('id').inTable('users').notNullable()
		table.string('message').notNullable()
		table.timestamps(true, true)
	})
}

export const down = async (knex) => {
	await knex.schema.dropTable('messages')
}

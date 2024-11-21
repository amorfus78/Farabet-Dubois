export const up = async (knex) => {
	await knex.schema.createTable('parties', (table) => {
		table.increments('id').primary()
		table.string('name').notNullable()
		table.string('description').notNullable()
		table.decimal('price').notNullable()
		table.datetime('start_date').notNullable()
		table.integer('number_of_spots').notNullable()
		table.boolean('consumables_needed').notNullable()
		table.string('type').notNullable()
	})
}

export const down = async (knex) => {
	await knex.schema.dropTable('parties')
}


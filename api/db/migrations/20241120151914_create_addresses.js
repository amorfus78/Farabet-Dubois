export const up = async (knex) => {
	return knex.schema.createTable('addresses', function (table) {
		table.increments('id')
		table.string('line1', 255).notNullable()
		table.string('line2', 255)
		table.string('city', 255).notNullable()
		table.string('country', 255).notNullable()
		table.string('state', 255).notNullable()
		table.string('zip_code', 255).notNullable()
	})
}

export const down = async (knex) => {
	return knex.schema.dropTable('addresses')
}

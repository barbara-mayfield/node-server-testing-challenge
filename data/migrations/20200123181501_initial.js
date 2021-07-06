exports.up = async function(knex) {
    await knex.schema.createTable("spells", (table) => {
        table.increments()
        table.string("name", 255).notNullable()
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("spells")
};

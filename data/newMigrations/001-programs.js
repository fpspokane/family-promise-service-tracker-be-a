/* eslint-disable prettier/prettier */
exports.up = function (knex) {
    return knex.schema.createTable('programs', tbl => {
        tbl.increments('program_id');
        tbl.text('program_name', 255)
            .notNullable()
            .unique();
        tbl.text('program_description')
            .notNullable();
        tbl.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('programs');
};

const dao = (fastify) => {
    const getAllDao = () => fastify.db.query('SELECT * FROM testtable');
    const saveDao = (title) => fastify.db.one( 'INSERT INTO testTable (title) VALUES ($1) RETURNING *', [title]);

    return { getAllDao, saveDao };
}

module.exports = dao;
const daoService = require('../dao/temp.dao');

const tempService = (fastify) => {

    const dao = daoService(fastify);
    const getAll = () => dao.getAllDao();
    

    const save =  (title) =>  dao.saveDao(title);
    


    return { getAll, save };
}

module.exports = tempService;
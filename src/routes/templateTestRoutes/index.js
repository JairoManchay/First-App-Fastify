const tempService = require("../../service/temp.service");
const  {getResponseBody, requestPostBody, responsePostBody} = require('./temp.schema');

const route  = (fastify) => {

    const {getAll, save} = tempService(fastify);
    // get route
    fastify.get('/', 
        {schema: {
            tags: ['data'],
            response: getResponseBody
        }},
        async (request, reply) => {
            const allTest = await getAll();
            reply.send({data: allTest});
        }
    );

    fastify.post('/',
        {schema: {
            tags: ['data'],
            body: requestPostBody,
            response: responsePostBody
        }},
        async (request, reply) => {
            fastify.log.info(`POST request received ${request}`);
            const {title} = request.body;
            const id = await save(title);
            console.log({id})
            reply.code(201).send({message: 'Data inserted successfully', data: id});
        }
    );
}

module.exports = route;
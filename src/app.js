const fastify = require('fastify');
const db = require('./plugin/database');
const testRoute = require('./routes/templateTestRoutes');
const swaggerPg = require('./plugin/swagger');


const build = (opts = {}) => {
  const app = fastify(opts);

  // register plugin 
  app.register(db);
  app.register(swaggerPg);

  // register route
  app.register(testRoute, {prefix: 'api/v1/test'});

  app.get('/', (request, reply) => {
    reply.send({ hello: 'world from Fastify!' });
  });

  return app;
};

module.exports = build;

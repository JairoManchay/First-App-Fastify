const fastify = require('fastify');

const build = (opts = {}) => {
  const app = fastify(opts);

  app.get('/', (request, reply) => {
    reply.send({ hello: 'world from Fastify!' });
  });

  return app;
};

module.exports = build;

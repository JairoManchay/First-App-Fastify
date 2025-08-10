const fp = require('fastify-plugin');
const swagger = require('@fastify/swagger');
const swaggerUi = require('@fastify/swagger-ui');

module.exports = fp(async (fastify) => {
  // Registro de Swagger (esquema OpenAPI)
  // url para levantar el swagger - http://localhost:4000/documentation
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: 'Fastify Project',
        description: 'Fastify Swagger API',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      servers: [
        { url: 'http://localhost:4000', description: 'Local server dev' }
      ],
      tags: [
        { name: 'data', description: 'Data related end-points' }
      ],
      components: {
        schemas: {
          data: {
            type: 'object',
            required: ['id', 'title'],
            properties: {
              id: { type: 'string', format: 'uuid' },
              title: { type: 'string' }
            }
          }
        }
      }
    }
  });
  

  // Registro de Swagger UI
  await fastify.register(swaggerUi, {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    staticCSP: true,
    transformStaticCSP: (header) => header
  });
});

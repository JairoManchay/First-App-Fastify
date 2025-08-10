require('dotenv').config(); // Cargar variables de entorno desde .env

const PORT = process.env.PORT || 4000;

const server = require('./src/app')({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  },
});

const start = async () => {
  try {
    await server.listen({ port: PORT, host:'0.0.0.0' });
    console.log('POST URI:', process.env.POSTGRES_URI);
    console.log(`Server listening on http://localhost:${PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

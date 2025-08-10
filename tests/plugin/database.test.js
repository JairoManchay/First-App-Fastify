const Fastify = require('fastify');
const dbPlugin = require('../../src/plugin/database');

jest.mock('../../src/plugin/helper/migrations', () => ({
    applyMigration: jest.fn().mockResolvedValue(0)
}));

describe('Database Plugin', () => {
    beforeAll(async ()=> {
        // Usar la misma configuración que Batect
        process.env.POSTGRES_URI="postgresql://app:123456@localhost:5435/db";
    })

    afterAll(async () => {
        // Limpiar variables de entorno después del test
        delete process.env.POSTGRES_URI;
    })

    it('should able to attach db decorate on fastify', async () => {
        const fastify = Fastify();
        fastify.register(dbPlugin);

        await fastify.ready();

        expect(fastify.db).toBeDefined();
        await fastify.close();
    })
});

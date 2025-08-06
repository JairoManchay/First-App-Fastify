const build = require('../../src/app');

describe('Root route', () => {
    let app;

    beforeEach(async () => {
        app = build({ logger: true }); // Desactivar logs en tests
        await app.ready(); // Esperar a que el servidor esté listo
    });

    afterEach(async () => {
        await app.close(); // Cerrar correctamente con await
    });

    it('should return 200 when root route called', async () => {
        const res = await app.inject({
            method: 'GET',
            url: '/'
        });

        expect(res.statusCode).toBe(200);
        expect(res.json()).toEqual({hello: 'world from Fastify!'});
    });
});


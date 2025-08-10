const build = require('../../src/app');

describe('Root route', () => {
    let app;

    beforeEach(async () => {
        app = build({ 
            logger: {
                level: 'info',
                // Remover pino-pretty en tests para evitar worker threads
                // transport: {
                //     target: 'pino-pretty',
                //     options: {
                //         colorize: true,
                //         translateTime: 'HH:MM:ss Z',
                //         ignore: 'pid,hostname'
                //     }
                // }
            }
        });
        await app.ready();
    });

    afterEach(async () => {
        await app.close(); // Cerrar correctamente con await
    });



    it('should return 200 when root route called', async () => {
        console.log('🧪 Iniciando test GET...');
         const res = await app.inject({
             method: 'GET',
             url: '/api/v1/test'
         });

         expect(res.statusCode).toBe(200);
         expect(res.json()).toBeDefined();
        console.log('✅ Test GET completado exitosamente');
        // console.log('📥 Response body:', JSON.stringify(res.json(), null, 2));
        expect(res.json()).toHaveProperty('data');
     });

    it('Should return id when post route is called with valid data', async () => {
        console.log('🧪 Iniciando test POST...');
        
        const testPayload = {
            title: "Test Title"
        };
        
        console.log('📤 Enviando payload:', JSON.stringify(testPayload, null, 2));
        
        const res = await app.inject({
            method: 'POST',
            url: '/api/v1/test',
            payload: testPayload
        });

        console.log('📥 Response status:', res.statusCode);
        console.log('📥 Response headers:', res.headers);
        console.log('📥 Response body:', JSON.stringify(res.json(), null, 2));
        

        expect(res.statusCode).toBe(201);
        expect(res.json()).toHaveProperty('message', 'Data inserted successfully');
        expect(res.json()).toHaveProperty('data');
        expect(res.json().data).toBeDefined();
        
        // Si quieres verificar que el ID contiene el title:
        expect(res.json().data).toHaveProperty('title', 'Test Title');
    });


    // afterAll(async () => {
    //     console.log('🧹 Limpiando recursos después de todos los tests');
        
    //     try {
    //         // Para pg-promise, necesitas cerrar la conexión así:
    //         if (app && app.db && app.db.$pool) {
    //             await app.db.$pool.end();
    //             console.log('🔌 Conexión de base de datos cerrada');
    //         }
    //     } catch (error) {
    //         console.log('⚠️ Error al cerrar conexión:', error.message);
    //     }
        
    //     console.log('✅ Recursos limpiados');
    // });
});


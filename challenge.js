import app from './app';
import request from 'supertest'

describe('Challenge', () => {
    describe('POST', ()=> {
        it('login de usuario', async () => {
            const body = {
                email: 'challengeautomation@rebill.to',
                pass: 'ChallengeAutomation123!'
            }
            
            const respuesta = await request(app.POST('https://docs.rebill.dev/reference/authcontroller_login')).send(body);
            expect (respuesta.status).toBe(201);
            expect (respuesta.body).toHaveProperty('success', true);
        });
    });

    describe('POST', () => {
        it('agregar carrito', async () =>{
            const body = {

                'item_1':{
                    id_articulo: '0010',
                    nombre: 'remera',
                    precio: '$1200',
                    cantidad: 2
                },
                'item_2':{
                    id_articulo: '0011',
                    nombre: 'pantalón',
                    precio: '$2200',
                    cantidad: 1
                },
                'item_3':{
                    id_articulo: '0021',
                    nombre: 'sweeter',
                    precio: '$2000',
                    cantidad: 2
                }
                
            }
            
            const respuesta = await request(app.POST('https://docs.rebill.dev/reference/itemcontroller_createitem')).send(body);
            expect (respuesta.status).toBe(201);
            expect (respuesta.body).toHaveProperty('success', true);

        });

    });

    describe('UPDATE', () => {
        it('actualizar carrito', async () =>{
            const body = {

                
                id_articulo: '0010',
                nombre: 'remera',
                precio: '$1200',
                cantidad: 4
            
                
            }
            
            const respuesta = await request(app.PUT('https://docs.rebill.dev/reference/itemcontroller_updateitem/id=item_1')).send(body);
            expect (respuesta.status).toBe(201);
            expect (respuesta.body).toHaveProperty('success', true);

        });

    });

    describe('GET', () => {
        it('ver carrito', async () =>{
                      
            const respuesta = await request(app.get('https://docs.rebill.dev/reference/itemcontroller_getallitems'));
            expect (respuesta.status).toBe(201);
            expect (respuesta.body).toHaveProperty('success', true);

        });

    });

});

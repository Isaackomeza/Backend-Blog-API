import chai from "chai";
import {expect} from "chai";
import chaiHttp from "chai-http";
import server from '../index';
import { v4 as uuidv4 } from 'uuid';


chai.use(chaiHttp);

describe('user API', ()=>{
    // Test GET route
    describe('GET /users', ()=>{
        it('It should get all users', (done)=>{
            chai.request(server)
                .get('/user')
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an('object');
                        done();
                    });
        });
    });

    // Test GET route by id
    describe('GET /user/:id', ()=>{
    it('It should GET a user by ID', (done)=>{
        const userId = uuidv4;
        chai.request(server)
            .get('/user' + userId)
                .end((err, res)=>{
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res).to.be.an('object');
                    done();
                });
    });
    it('It should not GET a user by ID that is not exist', (done) => {
        chai
          .request(server)
          .get('/user/5')
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
});

    // Test POST route
    describe('POST /users', ()=>{
        it('It should POST a new user', (done)=>{
            const user = {
                username: 'isaac12',
                email:'isaackomeza@gmail.com',
                password:'password',
                role:'user'
            };
            chai.request(server)
                .post('/user')
                .send(user)
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an('object');
                        expect(res.body.message).to.equal('Not found');
                        done();
                    });
        });
    });

    // Test PUT route
    describe('PUT /user/:id', ()=>{
        it('It should PUT a new user', (done)=>{
            const userId = uuidv4;
            const user = {
                username: 'isaackomeza',
                email:'isaackomeza@gmail.com',
                password:'password',
                role:'user'
            };
            chai.request(server)
                .put('/user' + userId)
                .send(user)
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an('object');
                        done();
                    });
        });
    });
    // Test DELETE route
    describe('DELETE /user/:id', ()=>{
        it('It should DELETE an existing user', (done)=>{
            const userId = uuidv4;

            chai.request(server)
                .delete('/user' + userId)
                    .end((err, res)=>{
                        expect(res).to.have.status(200);
                        done();
                    });
        });
        it('It should not DELETE a user by ID that is not exist', (done) => {
            chai
              .request(server)
              .delete('/user/5')
              .end((err, res) => {
                expect(res.status).to.equal(401);
                done();
              });
          });
    });

});
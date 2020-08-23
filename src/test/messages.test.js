import chai from "chai";
import {expect} from "chai";
import chaiHttp from "chai-http";
import server from '../index';
import { v4 as uuidv4 } from 'uuid';
chai.should();

chai.use(chaiHttp);

describe('message API', ()=>{
    // Test GET route
    describe('GET /messages', ()=>{
        it('It should get all messages', (done)=>{
            chai.request(server)
                .get('/message')
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an('object');
                        expect(res.body.data.messages).to.be.an('array');
                        res.body.data.messages.map(message=>{
                            expect(message.name).to.be.an('string')
                        });
                        //expect(res.body.data.messages[0].name).to.be.an('string');
                        done();
                    });
        });
    });

    // Test GET route by id
    describe('GET /message/:id', ()=>{
    it('It should GET a message by ID', (done)=>{
        const messageId = uuidv4;
        chai.request(server)
            .get('/message' + messageId)
                .end((err, res)=>{
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res).to.be.an('object');
                    done();
                });
    });
    it('It should not GET a message by ID that is not exist', (done) => {
        chai
          .request(server)
          .get('/message/5')
          .end((err, res) => {
            expect(res.status).to.equal(404);
            expect(res.body.error).to.equal('message not found');
            done();
          });
      });
});

    // Test POST route
    describe('POST /messages', ()=>{
        it('It should POST a new message', (done)=>{
            const message = {
                name:'Komezusenge',
                email:'isaackomeza@gmail.com',
                phone:'078786868',
                message:'jdsbdvbiqnvbaidjbvibduq'
            };
            chai.request(server)
                .post('/message')
                .send(message)
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(201);
                        expect(res).to.be.an('object');
                        expect(res.body.message).to.equal('message successfully created');
                        done();
                    });
        });
    });

    // Test PUT route
    describe('PUT /message/:id', ()=>{
        it('It should PUT a new message', (done)=>{
            const messageId = uuidv4;
            const message = {
                name:'Komezusenge updated',
                email:'isaackomeza@gmail.com',
                phone:'078786868',
                message:'jdsbdvbiqnvbaidjbvibduq  changed'
            };
            chai.request(server)
                .put('/message' + messageId)
                .send(message)
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an('object');
                        done();
                    });
        });
    });
    // Test DELETE route
    describe('DELETE /message/:id', ()=>{
        it('It should DELETE an existing message', (done)=>{
            const messageId = uuidv4;

            chai.request(server)
                .delete('/message' + messageId)
                    .end((err, res)=>{
                        expect(res).to.have.status(200);
                        done();
                    });
        });
        it('It should not DELETE a message by ID that is not exist', (done) => {
            chai
              .request(server)
              .delete('/message/5')
              .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body.error).to.equal('message not found');
                done();
              });
          });
    });

});
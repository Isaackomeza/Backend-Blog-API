import chai from "chai";
import {expect} from "chai";
import chaiHttp from "chai-http";
import server from '../index';
import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
chai.should();

chai.use(chaiHttp);

describe('comment API', ()=>{
    // Test GET route
    describe('GET /comments', ()=>{
        it('It should get all comments', (done)=>{
            chai.request(server)
                .get('/comment')
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an('object');
                        done();
                    });
        });
    });

    // Test GET route by id
    describe('GET /comment/:id', ()=>{
    it('It should GET a comment by ID', (done)=>{
        const commentId = mongoose.Types.ObjectId();
        chai.request(server)
            .get('/comment' + commentId)
                .end((err, res)=>{
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res).to.be.an('object');
                    done();
                });
    });
    it('It should not GET a comment by ID that is not exist', (done) => {
        chai
          .request(server)
          .get('/comment/5')
          .end((err, res) => {
            expect(res.status).to.equal(500);
            done();
          });
      });
});

    // Test POST route
    describe('POST /comments', ()=>{
        it('It should POST a new comment', (done)=>{
            const comment = {
                name: 'Isaac',
                email: 'komeza@gmail.com',
                comment: 'fgshviwbfuwbvui'
            };
            chai.request(server)
                .post('/comment')
                .send(comment)
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(401);
                        expect(res).to.be.an('object');
                        expect(res.body.message).to.equal('Auth failed');
                        done();
                    });
        });
    });

    // Test PUT route
    describe('PUT /comment/:id', ()=>{
        it('It should PUT a new comment', (done)=>{
            const commentId = mongoose.Types.ObjectId();
            const comment = {
                name: 'Isaac updated',
                email: 'komeza@gmail.com',
                comment: 'fgshviwbfuwbvui changed'
            };
            chai.request(server)
                .put('/comment' + commentId)
                .send(comment)
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an('object');
                        done();
                    });
        });
    });
    // Test DELETE route
    describe('DELETE /comment/:id', ()=>{
        it('It should DELETE an existing comment', (done)=>{
            const commentId = mongoose.Types.ObjectId();

            chai.request(server)
                .delete('/comment' + commentId)
                    .end((err, res)=>{
                        expect(res).to.have.status(200);
                        done();
                    });
        });
        it('It should not DELETE a comment by ID that is not exist', (done) => {
            chai
              .request(server)
              .delete('/comment/5')
              .end((err, res) => {
                expect(res.status).to.equal(401);
                done();
              });
          });
    });

});
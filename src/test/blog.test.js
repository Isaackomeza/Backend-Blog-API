import chai from "chai";
import {expect} from "chai";
import chaiHttp from "chai-http";
import server from '../index';
import { v4 as uuidv4 } from 'uuid';
chai.should();

chai.use(chaiHttp);

describe('Blog API', ()=>{
    // Test GET route
    describe('GET /blogs', ()=>{
        it('It should get all blogs', (done)=>{
            chai.request(server)
                .get('/blog')
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an('object');
                        done();
                    });
        });
    });

    // Test GET route by id
    describe('GET /blog/:id', ()=>{
    it('It should GET a blog by ID', (done)=>{
        const blogId = uuidv4;
        chai.request(server)
            .get('/blog' + blogId)
                .end((err, res)=>{
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res).to.be.an('object');
                    done();
                });
    });
    it('It should not GET a blog by ID that is not exist', (done) => {
        chai
          .request(server)
          .get('/blog/5')
          .end((err, res) => {
            expect(res.status).to.equal(500);
            done();
          });
      });
});

    // Test POST route
    describe('POST /blogs', ()=>{
        it('It should POST a new blog', (done)=>{
            const blog = {
                author: 'Peter',
                title: 'How to study javascript in one day',
                description: 'For sure cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw',
            };
            chai.request(server)
                .post('/blog')
                .send(blog)
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(401);
                        expect(res).to.be.an('object');
                        done();
                    });
        });
    });

    // Test PUT route
    describe('PUT /blog/:id', ()=>{
        it('It should PUT a new blog', (done)=>{
            const blogId = uuidv4;
            const blog = {
                author: 'Isaac new',
                title: 'How to study javascript in one day',
                description: ' cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw',
            };
            chai.request(server)
                .put('/blog' + blogId)
                .send(blog)
                    .end((err, res)=>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an('object');
                        done();
                    });
        });
    });
    // Test DELETE route
    describe('DELETE /blog/:id', ()=>{
        it('It should DELETE an existing blog', (done)=>{
            const blogId = uuidv4;

            chai.request(server)
                .delete('/blog' + blogId)
                    .end((err, res)=>{
                        expect(res).to.have.status(200);
                        done();
                    });
        });
        it('It should not DELETE a blog by ID that is not exist', (done) => {
            chai
              .request(server)
              .delete('/blog/5')
              .end((err, res) => {
                expect(res.status).to.equal(401);
                done();
              });
          });
    });

});
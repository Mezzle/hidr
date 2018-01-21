process.env.NODE_ENV = 'test';

const express = require('express');
const mezzle = require('../app/mezzle');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const app = express();

app.get('/', mezzle);

describe('GET /', () => {
    it('returns a 200 response', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            res.should.have.status(200);
            done();
        });
    });

    it('returns correct name', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            if (err) {
                return done(err);
            }

            res.text.should.match(/Martin Meredith/);
            done();
        });
    });


    it('returns correct hiring status', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            if (err) {
                return done(err);
            }

            res.text.should.match(/is hireable/);
            done();
        });
    });
});

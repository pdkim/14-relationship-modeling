'use strict';

require('babel-register');


const superagent = require('superagent');
import superT from 'supertest';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';


const mockgoose = new Mockgoose(mongoose);

const companyURL = '/api/v1/company';
const workerURL = '/api/v1/workers';

const { server } = require('../src/app.js');
const supertest = superT(server);


describe('API module should', () => {

  beforeAll((done) => {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect('mongodb://localhost/lab-13').then(() => done());
    });
  });

  afterEach((done) => {
    mockgoose.helper.reset().then(() => {
      done();
    });
  });


  xit('return an object when passing a valid id through worker URL', () => {
    let workerData = {
      firstName: 'Phil',
      lastName: 'Kim',
      hourlyWage: '50',
    };
    return supertest.post(workerURL)
      .send(workerData)
      .then(response => {
        let id = JSON.parse(response.text)._id;
        let companyData = {
          name: 'Lionbridge',
          employee: id,
        };
        return superagent.post(companyURL)
          .send(companyData)
          .then(response => {
            expect(JSON.parse(response.text).employee).toBe(id);
          });
      });
  });
});
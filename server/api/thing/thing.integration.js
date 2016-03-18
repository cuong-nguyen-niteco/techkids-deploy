'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

describe('Thing API:', function () {

  describe('GET /api/things', function () {
    var things;

    beforeEach(function (done) {
      (0, _supertest2['default'])(app).get('/api/things').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        things = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      things.should.be.instanceOf(Array);
    });
  });
});
//# sourceMappingURL=thing.integration.js.map

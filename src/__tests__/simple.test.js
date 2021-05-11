const app = require('../server');
const request = require('supertest');

describe('Only one test', () => {
  it('should get main route', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});

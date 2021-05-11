const app = require('../server');
const request = require('supertest');

describe('Only one test', () => {
  it('should get main route', async () => {
    const { body, statusCode } = await request(app).get('/');

    expect(statusCode).toEqual(200);
    expect(body).toEqual([
      {
        id: 'NaNNA776undefined',
        firstname: 'Iiris',
        lastname: 'Hatala',
        fullname: 'Iiris Hatala',
        gender: 'female',
        birthdate: '1973-12-20',
        age: 48,
        cell: '043-079-43-67',
        location: {
          street: {
            number: 3973,
            name: 'Tehtaankatu'
          },
          city: 'Ruokolahti',
          state: 'Northern Ostrobothnia',
          country: 'Finland',
          postcode: 45949,
        },
        email: 'iiris.hatala@example.com',
        login: {
          uuid: '52f56eb6-6254-4ce2-9b85-a98bbd54928f',
          username: 'goldenmouse659',
          password: 'lesbean'
        },
        picture: 'https://randomuser.me/api/portraits/women/71.jpg'
      }
    ]);
  });
});



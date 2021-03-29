const request = require('supertest')
const app = require('../index')

describe('controller test', () => {
  it('should return a message', async () => {
    const res = await request(app).get('/')
    expect(res.status).toEqual(200)
    expect(res.body.message).toEqual('hello world')
  })
})

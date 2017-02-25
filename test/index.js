const assert = require('assert')
const request = require('supertest')

describe('Server', () => {
	let server
	beforeEach(() => server = require('../lib/server'))
	afterEach(done => server.close(done))
	
	it('responds to /', (done) => {
	  request(server)
	    .get('/')
	    .expect(200, done)
	})
})
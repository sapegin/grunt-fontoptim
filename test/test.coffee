'use strict';

fs = require 'fs'
chai = require 'chai'
expect = chai.expect
chai.use require('chai-fs')

# Expected CSS
expected = {
	woff: fs.readFileSync('test/expected/woff.css', {encoding: 'utf-8'})
	woff2: fs.readFileSync('test/expected/woff2.css', {encoding: 'utf-8'})
}

describe 'grunt-fontoptim', ->

	it 'empty font list', (done) ->
		expect('test/tmp/empty').not.to.be.a.path()
		done()

	it 'basic', (done) ->
		expect('test/tmp/basic').to.be.a.directory()
		expect('test/tmp/basic/ptserif.woff.css').to.be.a.file()
		expect('test/tmp/basic/ptserif.woff.css').to.have.content(expected.woff)
		expect('test/tmp/basic/ptserif.woff2.css').to.be.a.file()
		expect('test/tmp/basic/ptserif.woff2.css').to.have.content(expected.woff2)
		done()

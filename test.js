const operations = require('./operations.js');
const assert = require('assert');

const filename = 'donald-duck.png';

//Test if the input file's checksum matches a given checksum
it('returns true if the checksums matches', () => {
	assert.equal(operations.validateChecksum(filename), true);
});

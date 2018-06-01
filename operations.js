
const crypto = require('crypto');
const path = require('path');

const originalChecksum = "ee5f271914df5b40c011825b77e63910";

function generateChecksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex');
}

const validateChecksum = (filename) => {
	const fs = require('fs');

	const data = fs.readFileSync(filename);
	const checksum = generateChecksum(data);

	return (originalChecksum === checksum)	
};

module.exports = { validateChecksum }
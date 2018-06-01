var fs = require('fs');
var crypto = require('crypto');

fs.readFile('donald-duck.png', function(err, data) {
  var checksum = generateChecksum(data);
  console.log(checksum);
});

function generateChecksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex');
}



const validateChecksum = (x, y) => {return x === y};

module.exports = { validateChecksum }
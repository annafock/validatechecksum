const operations = require('./operations.js');
const assert = require('assert');

//Define which file to use in this test
const filename = 'donald-duck.png';


//Test if the input file's checksum matches a given checksum
it('returns true if the checksums matches', () => {
	assert.equal(operations.validateChecksum(filename), true);
});



// Uppgiften är att göra en lambda service som validerar en "checksum" för en fil.

// Lambda-servicen tar emot en fil och en hash (checksum) avgör om hashen matchar filens hash. Hashen ska vara md5 eller dylikt.

// Det räcker med om lambdan returnerar true false.

// - Koden ska var läsbar och korrekt lintad
// - Ska vara skriven i javascript (använd gärna es6 features)
// - Det ska kunna testas så att det funger lokalt; antingen via test, skicka request till en deployad version 
//   eller starta lokalt. Gärna alla tre.
// - Koden ska vara tillgänglig antingen via github/bitbucket eller som zip

// Exempel: Bilagan donald-duck.png borde ha något is still med (md5):  ee5f271914df5b40c011825b77e63910

//https://www.taniarascia.com/tutorials/

const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

const password = process.env.cryptokey || 'secretPassword';

function decrypt(text) {
    const decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

exports.decrypt = decrypt;
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const pw = process.env.CIPHER_PW || '4euS9%h5rEH0Q%';
const iv = crypto.randomBytes(16);

const key = crypto
  .createHash('sha256')
  .update(pw)
  .digest('base64')
  .substr(0, 32);

function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

module.exports = encrypt;

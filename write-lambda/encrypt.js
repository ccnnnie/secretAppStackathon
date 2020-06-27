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
  let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}
const message = encrypt('this is secret!');
console.log('encrypt', message);

// function decrypt(text) {
//   let iv = Buffer.from(text.iv, 'hex');
//   let encryptedText = Buffer.from(text.encryptedData, 'hex');
//   let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
//   let decrypted = decipher.update(encryptedText);
//   decrypted = Buffer.concat([decrypted, decipher.final()]);
//   return decrypted.toString();
// }

// console.log('decrypt', decrypt(message));

module.exports = encrypt;

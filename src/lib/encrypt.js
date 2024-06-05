const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 10; // agrega diez caracteres aleatorios extra a la contraseña original y se encripta

function encrypt(text) {
  return bcrypt.hash(text, SALT_ROUNDS);
}

function compare(plainText, hash) {
  return bcrypt.compare(plainText, hash);
}

module.exports = {
  encrypt,
  compare,
};

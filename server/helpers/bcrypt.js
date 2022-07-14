"use strict";
const bcrypt = require('bcryptjs');

const hash = (password) => {
    return bcrypt.hashSync(password, 10);
};

const comp = (hashed, password) => {
    return bcrypt.compareSync(hashed, password);
};


module.exports = {
    hash, comp
};
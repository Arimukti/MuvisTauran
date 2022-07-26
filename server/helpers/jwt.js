const jwt = require('jsonwebtoken');
const key = process.env.KEYWORD;

const payloadToToken = (sentPayload) => {
    return jwt.sign(sentPayload, key);
};

const tokenToPay = (accessToken) => {
    return jwt.verify(accessToken, key);
};


module.exports = {
    payloadToToken, tokenToPay
};
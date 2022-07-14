const { tokenToPay } = require("../helpers/jwt");
const { User } = require('../models/index');

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;

        if (!access_token) {
            throw { name: "Invalid token" };
        }

        const payload = tokenToPay(access_token);
        const { id } = payload;

        const foundUser = await User.findByPk(id);

        if (!foundUser) {
            throw { name: "Invalid token" };
        }

        req.user = {
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email
        };

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authentication;
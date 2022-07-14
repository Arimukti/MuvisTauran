"use strict";
const { comp, hash } = require('../helpers/bcrypt');
const { payloadToToken } = require('../helpers/jwt');
const { User, Product } = require("../models/index");


class UserController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const foundUser = await User.findOne({
                where: {
                    email: email
                }
            });
            if (!foundUser) {
                throw { name: 'Not found user' };
            }

            const confirmedPassword = comp(password, foundUser.password);

            if (!confirmedPassword) {
                throw { name: 'Not found user' };
            }

            const sentPayload = {
                id: foundUser.id
            };

            const token = payloadToToken(sentPayload);

            res.status(200).json({
                acces_token: token
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController;
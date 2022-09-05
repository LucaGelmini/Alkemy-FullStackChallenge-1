const db = require('../database/models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validationResult } = require('express-validator');


module.exports = {
    login: async (req, res) => {

        const { userInfo } = req

        const token = jwt.sign(
            {
                userData: {
                    user_id: userInfo.id,
                    email: userInfo.email,
                    username: userInfo.username
                },
                fingerprint: req.fingerprint
            },
            'secret0-de-Luca',
            {
                expiresIn: "2h",
            }
        );
        res.status(202).json({
            userData: {
                user_id: userInfo.id,
                email: userInfo.email,
                username: userInfo.username
            },
            token
        })
    },

    get: async (req, res) => {
        const token = req.body.token
        try {
            const user = jwt.verify(token, 'secret0-de-Luca');
            // console.log(user)
            const userData = await db.User.findByPk(user.user_id)
            res.status(200).json({ data: userData })
            // console.log(req.fingerprint)
        } catch { console.log('token error') }
    },

    register: async (req, res) => {
        const validation = validationResult(req);
        const { name, password, family_name, username, email } = req.body;

        try {
            if (validation.errors.length > 0) throw validation.errors;
            const hashedPass = await bcrypt.hash(password, 10);
            await db.User.create({
                name,
                family_name,
                username,
                password: hashedPass,
                email
            })
            res.status(201).json({ data: { ...req.body } })

        } catch (err) {
            console.error({ registerErrors: err });
            res.status(422).json({ errors: err })
        }

    },

    edit: async (req, res) => {

    },

    delete: async (req, res) => {

    },


}


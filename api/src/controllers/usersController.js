const db = require('../database/models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


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
            console.log(req.fingerprint)
        } catch { console.log('token error') }
    },

    register: async (req, res) => {
        const { name, password, family_name, username, email } = req.body;
        const hashedPass = await bcrypt.hash(password, 10)
        console.log({ data: { ...req.body, hashedPass: hashedPass } })
        res.status(201).json({ data: { ...req.body, hashedPass: hashedPass } })
        try {
            await db.User.create({
                name,
                family_name,
                username,
                password: hashedPass,
                email
            })

        } catch (err) { console.error(err); }

    },

    edit: async (req, res) => {

    },

    delete: async (req, res) => {

    },


}


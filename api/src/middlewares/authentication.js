const bcrypt = require('bcrypt');
const db = require('../database/models');
const { validationResult } = require('express-validator');

// is an eMail or a username?
function userOrEmail(email, username) {
    if (email) return { email };
    if (username) return { username };
}

async function authentication(req, res, next) {
    const validation = validationResult(req);
    if (validation.errors.length > 0) {
        res.status(422).json({ errors: validation.errors });
        console.error(validation.errors);
        return
    };
    try {
        const userInfo = await db.User.findOne({
            where: userOrEmail(req.body.email, req.body.username),
            attributes: [
                'id', "username", "name", "family_name",
                "email", "avatar_path", "createdAt", "password"
            ]
        });

        if (!userInfo) throw 'User not found in database';

        const passwordOk = await bcrypt.compare(req.body.password, userInfo.password);

        if (!passwordOk) throw 'Invalid password';
        req.userInfo = userInfo
        next();

    } catch (err) {
        console.log(err)
        res.status(401).json(err);
    }


}

module.exports = authentication;
const bcrypt = require('bcrypt');
const db = require('../database/models')


async function authMiddleware(req, res, next) {
    // is an eMail or a username?
    function userOrEmail(email, username) {
        if (email) return { email };
        if (username) return { username };
    }

    //authentication


    try {
        const userInfo = await db.User.findOne({
            where: userOrEmail(req.body.email, req.body.username),
            attributes: [
                'id', "username", "name", "family_name",
                "email", "avatar_path", "createdAt", "password"
            ]
        });
        if (!userInfo) { throw 'User not found in database' }

        const passwordOk = await bcrypt.compare(req.body.password, userInfo.password);

        if (passwordOk) {
            req.userInfo = userInfo
            next();
        }
    } catch (err) {
        console.log(err)
        res.status(500).json();
    }


}

module.exports = authMiddleware;
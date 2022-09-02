const jwt = require("jsonwebtoken");

function authorization(req, res, next) {
    try {
        const { userData, fingerprint } = jwt.verify(
            JSON.parse(req.headers.token),
            'secret0-de-Luca');
        if (fingerprint.hash != req.fingerprint.hash) throw 'Invalid fingerprint';
        req.logedUser = userData;
        console.log(req.logedUser)

        next();
    } catch (err) {
        console.error(err)
        res.status(401) // 401: unauthorized
    }


}

module.exports = authorization;
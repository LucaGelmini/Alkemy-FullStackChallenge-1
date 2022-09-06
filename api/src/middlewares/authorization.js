const jwt = require("jsonwebtoken");

function authorization(req, res, next) {
    try {
        if (!req.headers.token) throw 'Access token required';
        const { userData, fingerprint } = jwt.verify(
            JSON.parse(req.headers.token),
            'secret0-de-Luca');
        if (fingerprint.hash != req.fingerprint.hash) throw 'Invalid fingerprint';
        req.logedUser = userData;
        // console.log(req.logedUser)

        next();
    } catch (err) {
        console.error(err)
        res.status(401).json(err) // 401: unauthorized
    }


}

module.exports = authorization;
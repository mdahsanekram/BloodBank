const JWT = require('jsonwebtoken');


module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        JWT.verify(token, process.env.JWT_SECRATE, (err, decode) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: "Auth Failed"
                })
            } else {
                req.body.userId = decode.dim;
                next();
            }
        })

    } catch (errors) {
        console.log(errors);
        return res.status(401).send({
            success: false,
            errors,
            message: "Auth Failed"
        })
    }
}
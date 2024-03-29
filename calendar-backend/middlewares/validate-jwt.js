const { response } = require( 'express');
const jwt = require('jsonwebtoken');

const validateJWT = ( req, res, next ) => {

    // ? x-token headers
    const token = req.header('x-token');
    // console.log(token);

    if (!token) {
        return res.status(401).json({
            ok:false,
            msg: 'There is no token in the request'
        });
    }

    try {
        const {uid, name }= jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        // console.log( payload );
        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token not valid'
        });
    }



    next();

}


module.exports = {
    validateJWT
}
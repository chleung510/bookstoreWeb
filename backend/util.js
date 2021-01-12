// JSON Web Token (JWT) is for securely transmitting information between parties as a JSON object.
// Tokens are signed using public/private key pairs, 
// The signature certifies that only the party holding the private key is the one that signed it.

import jwt from "jsonwebtoken";
import config from "./config";

const getToken = (user) => {
    return jwt.sign(
        {_id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin}
        , config.JWT_SECRET, {
        expiresIn: "48h"
    }) // first param: payload, second param: privateKey, third: signOptions(rules).
}

const isAuth = ( req, res, next ) => {
    // The HTTP Authorization request header contains the credentials 
    // to authenticate a user agent with a server.
    const token = req.headers.authorization;
    
    if (token) {
        const onlyToken = token.slice(7, token.length);

        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
            if (err){ // if error exists, send error message.
                return res.status(401).send( { msg: "Invalid Token" } );
            }
            // if error does not exist, assign decode to req.user.
            req.user = decode;
            next();
            return
        });
    } else {
        return res.status(401).send( { msg: "Token is not supplied." } )
    }
}

const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin){ // if token exist and matched???
        return next(); // accept the request.
    }
    return res.status(401).send({ msg: "Admin Token is not valid." })
}
export { getToken, isAuth, isAdmin }
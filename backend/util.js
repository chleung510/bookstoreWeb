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

export { getToken }
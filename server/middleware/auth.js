const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req, res, next) => {
    let token;
    let authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        // extracting the token
        token = authHeader.split(" ")[1]; // getting the element at the first index
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            console.log(decoded);
        })
        next();
    }

});

module.exports = validateToken;
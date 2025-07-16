const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async(req, res, next) => {
    let token;
    let authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        // extracting the token
        token = authHeader.split(" ")[1]; // getting the element at the first index
        
       try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            console.log(decoded);
            next();

       } catch (e) {
            res.status(401);
            throw new Error("invalid token")

       }
    }

});

module.exports = validateToken;
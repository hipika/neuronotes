const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient;
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");


// @desc Gets user information
// route GET /api/users/info
// @access private

const getUserInfo = asyncHandler(async(req, res) => {
    const users = await prisma.user.findMany({
        orderBy: {
            id: "asc"
        }
    });

    res.status(200).json(users);

});


// @desc Register user
// @route POST /api/users/register
// @access public

const registerUser = asyncHandler(async(req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    
    // checking if user is already registered
    const checkUser = await prisma.user.findUnique({
        where: {
            username,
            
        }
    });
    if (checkUser) {
        res.status(400);
        throw new Error("User already registered. Use login.");
    }

    // storing hashed password never plain text 
    // rules - same inp = same out, diff inp = diff out -> use salting: adds a random string
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // creating new user
    const createUser = await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword
        }
    });
    res.status(200).json(createUser);
    console.log("User created");

});

// @desc Login user
// @route POST /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
    const {username, password} = req.body;

    if (!username || !password) {
        res.status(400);
        throw new Error("All fields are required!");
    }

    const findUser = await prisma.user.findUnique({ where: {
            username: username  
        }
    });

    // compare plain text with stored hashed password
    if (findUser && (await bcrypt.compare(password, findUser.password))) {
        const accessToken = jwt.sign({
            user: {
                id: findUser.id
            }
        }, process.env.JWT_SECRET)

        res.send({
            success: true,
            token: accessToken
        });

        console.log("user logged in")
    }
    else{
        res.send({
            success: false
        });
        throw new Error("Wrong password/username")
    }
    

});



module.exports = { registerUser, getUserInfo, loginUser };
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient;
const asyncHandler = require("express-async-handler");


// @desc Creates Node
// route POST /api/users/generate
// @access private

const makeNode = asyncHandler(async(req, res) => {
    const {label} = req.body;
    const userId = req.user.id;
    if (!label) {
        res.status(400);
        throw new Error("Please type something");
    }

    // check if node already exists
    const checkNode = await prisma.nodes.findUnique({
        where: {
            label
        }
    });
    // if true
    if (checkNode) {
        res.status(400);
        // throw new Error("Already exists -> cannot create a new one");
    }

    // creating a new node
    const createNode = await prisma.nodes.create({
        data: 
        {
            label: label,
            authorId: userId,
            x: 0,
            y: 0
        }

    })

    res.status(200).json({success: true, nodes: createNode});
    console.log("node created")
});


// @desc Gets Node info
// route Get /api/users/id/info
// @access private

const getNodeInfo = asyncHandler(async(req, res) => {
    const nodes = await prisma.nodes.findMany({
        orderBy: {
            id: "asc"
        }
    });

    res.status(200).json(nodes)
})

module.exports = { getNodeInfo, makeNode };
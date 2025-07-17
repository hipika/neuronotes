const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient;

// @desc Creates session
// route POST /api/users/store
// @access private

const createSession = asyncHandler(async (req, res) => {
    const { title, messages, nodes } = req.body;
    const userId = req.user.id;

    const session = await prisma.session.create({
        data: {
            title,
            messages,
            authorId: userId,
            nodes: {
                create: nodes.map(node => ({
                    ...node, authorId: userId
                }))
            }
        },
        include: { nodes: true }


    });

    res.status(200).json(session);

});



// @desc Creates session
// route GET /api/users/sessions
// @access private

const getSession = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const sessions = await prisma.session.findMany({
        where: {authorId: userId},
        orderBy: {createdAt: "desc"},
        include: {nodes: true}

    });

    res.status(200).json(sessions);
});

// @desc Deletes session
// route DEL /api/users/sessions/:id
// @access private
const deleteSession = asyncHandler(async (req, res) => {
    const sessionId = req.params.id;

    // await prisma.nodes.deleteMany({
    //     where: {sessionId}
    // })
    
    const sessions = await prisma.session.delete({
        where: {
            id: parseInt(sessionId)
        }
    })

    res.status(200).json(sessions);

});


module.exports = { createSession, getSession, deleteSession };
const prisma = require('../prisma/index')
const jwt = require('jsonwebtoken')

const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!isLoggedIn) {
            res.send("Please Login")
            throw new Error("You Are Not LogeddIn")
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await prisma.user.findUnique({
            where: { id: decode.userId }
        })
        next()

    } catch (error) {
        throw new Error(error)
    }
}
module.exports = isLoggedIn
const prisma = require('../prisma/index')
const cookieToken = require('../utils/cookieToken')

//user sign up 

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            throw new Error(" PLease Provide All Fields")
        }
        const user = await prisma.user.create({
            data: {
                name, email, password
            }
        })
        cookieToken(user, res)

    } catch (error) {
        throw new Error(error)
    }
}

// login 

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            throw new Error(" Please Provide an Email And Password")
        }
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            throw new Error(" User Doesnt Exist")
        }
        if (user.password !== password) {
            throw new Error("Password Is Incorrect")
        }

        cookieToken(user, res)

    } catch (error) {
        throw new Error(error)
    }
}

//for logout

exports.logout = async (req, res, next) => {
    try {
        res.clearCookie('token')
        res.json({
            success: true

        })

    } catch (error) {
        throw new Error(error)
    }
}
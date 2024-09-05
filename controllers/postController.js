const prisma = require('../prisma/index')

// create post

exports.createPost = async (req, res, next) => {
    try {
        const { slug, title, body, authorId } = req.body
        const result = await prisma.post.create({
            data: {
                slug, title, body, author: { connect: { id: authorId } }
            }
        })
        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}

// update post 
exports.updatePost = async (req, res) => {
    const { id } = req.params
    const { title, body } = req.body
    try {
        const result = await prisma.post.update({

            where: { id: id },
            data: {
                title, body
            }
        })

        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}

// delete post 
exports.deletePost = async (req, res) => {
    const { id } = req.params
    try {
        const result = await prisma.post.delete({
            where: {
                id: id
            }
        })
        res.json(result)

    } catch (error) {
        res.json({ error: `Post with ${id} Doesn't Exist` })
    }

}
// all post 
exports.getPost = async (req, res) => {
    try {
        const result = await prisma.post.findMany()
        res.json(result)
    } catch (error) {
        res.json({ error: `no Post Found` })
    }

}

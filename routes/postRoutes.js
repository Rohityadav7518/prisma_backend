const expires = require('express')
const router = expires.Router()

const { getPost, deletePost, updatePost, createPost } = require('../controllers/postController')

const isLoggedIn = require('../controllers/postController')

router.route('/post/create').post(isLoggedIn, createPost)
router.route('/post/update/:id').put(isLoggedIn, updatePost)
router.route('/post/delete/:id').delete(isLoggedIn, deletePost)
router.route('/post/get').get(getPost)

module.exports = router
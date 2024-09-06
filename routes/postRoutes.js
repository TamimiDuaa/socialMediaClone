const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes
// router.get('/', postController.getAllPosts);
router.get('/profile/:id', postController.getPostById);
router.post('/api', postController.createPost);
router.get('/delete/:id',postController.deletePost)
module.exports = router;
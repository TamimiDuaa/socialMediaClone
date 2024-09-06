const allPosts = require("../models/posts");


exports.getAllPosts = (req, res) => {
    const posts = allPosts.findAll();
    res.render('posts', { posts });
};

exports.getPostById = (req, res) => {
    const post = allPosts.findById(req.params.id);
    console.log(post);
    if (post) {
        res.render('profile', { post });
    } else {
        res.status(404).send('post not found');
    }
};
exports.deletePost = (req, res) => {
    const postId = req.params.id;
    const resu = allPosts.delete(postId); 
    console.log(resu);
    if (resu>0) {
        //  res.status(200).send('Post deleted successfully');
         res.redirect(`/users/${resu}`);
    } else {
        res.status(404).send('Post not found');
    }
    
};
exports.createPost = (req, res) => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let todayDate = `${year}-${month}-${day}`
    const newPost = {
        user_id: parseInt(req.body.usernames),
        title: req.body.title,
        content:req.body.content,
        date_posted:todayDate
    };
   // console.log(`${newPost.user_id} ${newPost.title} `);
    console.log(typeof parseInt(req.body.usernames));;
    allPosts.create(newPost);
    res.redirect('/');
    
};

exports.getUserPosts = (req, res) =>{
    const userPost = allPosts.findById(req.params.id);
    
    console.log(userPost);
    if (userPost) {
        res.render('profile', { post:userPost });
    } else {
        res.status(404).send('post not found');
    }

}


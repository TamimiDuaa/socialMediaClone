const allUsers = require("../models/users.js");
const posts =  require("../models/posts.js");

function joinUsersPosts(){
    const users =  allUsers.findAll();
    const allposts = posts.findAll();
    
    const results =[];
    allposts.forEach(post=>{
        users.forEach(user=>{
            if(post.user_id===user.id){
                let userPosts = {};
                userPosts.post_id = post.post_id;
                userPosts.user_id = post.user_id;
                userPosts.first_name = user.first_name;
                userPosts.last_name = user.last_name;
                userPosts.title = post.title;
                userPosts.content = post.content;
                userPosts.date = post.date_posted;
                
                results.push(userPosts);
                console.log(userPosts+" "+results[results.length-1]);
            }
        })
    })
    return results;
}

exports.getAllUsers =  (req, res) => {
    const users =  allUsers.findAll();
    const results = joinUsersPosts();

    let arrayReversed = results.reverse();

    res.render('home', { users , results:arrayReversed});
};

exports.getUserById = (req, res) => {
    const user = allUsers.findById(req.params.id);
    const userPosts = posts.findUserPosts(req.params.id);
    console.log(userPosts);
    if (user) {
        res.render('user', { user,userPosts });
    } else {
        res.status(404).send('User not found');
    }
};

exports.createUser = (req, res) => {
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone:req.body.phone,
        username:req.body.username,
        password:req.body.password,
        date_of_birth:req.body.date_of_birth,
        bio:req.body.bio

    };
    allUsers.create(newUser);
    res.redirect('/');
    
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const allComments = require("../models/comments");

exports.createComment = (req, res) => {
    const newComment = {
        post_id: req.body.post_id,
        user_id: req.body.user_id,
        content: req.body.content,
        date_posted:req.body.date_posted,

    };
    const postAComment = allComments.create(newComment);
    res.json(postAComment);
};
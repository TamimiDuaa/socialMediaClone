const comments = [
    {
      comment_id: 1,
      post_id: 101,
      user_id: 2,
      content: "Amazing design work, Alice! The portfolio website looks fantastic.",
      date_posted: "2024-09-02"
    },
    {
      comment_id: 2,
      post_id: 102,
      user_id: 3,
      content: "Great insights on scaling microservices, Michael. Definitely learned something new!",
      date_posted: "2024-09-01"
    },
    {
      comment_id: 3,
      post_id: 103,
      user_id: 4,
      content: "Thanks for sharing the social media trends, Emily. Super helpful!",
      date_posted: "2024-09-03"
    },
    {
      comment_id: 4,
      post_id: 104,
      user_id: 5,
      content: "Data visualization is so important! Loved your tips, Robert.",
      date_posted: "2024-08-31"
    },
    {
      comment_id: 5,
      post_id: 105,
      user_id: 6,
      content: "Accessibility is key! Your project looks very user-focused, Sophia.",
      date_posted: "2024-09-04"
    },
    {
      comment_id: 6,
      post_id: 106,
      user_id: 7,
      content: "Full-stack challenges are real! Great discussion, James.",
      date_posted: "2024-09-01"
    },
    {
      comment_id: 7,
      post_id: 107,
      user_id: 8,
      content: "Project management tips are always welcome. Thanks for sharing, Isabella!",
      date_posted: "2024-09-02"
    },
    {
      comment_id: 8,
      post_id: 108,
      user_id: 9,
      content: "Cybersecurity is becoming more critical every day. Great advice, William!",
      date_posted: "2024-08-28"
    },
    {
      comment_id: 9,
      post_id: 109,
      user_id: 10,
      content: "Storytelling is definitely an art. Loved your blog post, Mia.",
      date_posted: "2024-09-01"
    },
    {
      comment_id: 10,
      post_id: 110,
      user_id: 1,
      content: "Cross-platform app development is fascinating. Great insights, Daniel!",
      date_posted: "2024-09-03"
    },
    {
      comment_id: 11,
      post_id: 111,
      user_id: 2,
      content: "Minimalist design is a timeless approach. I admire your work, Alice!",
      date_posted: "2024-09-05"
    },
    {
      comment_id: 12,
      post_id: 112,
      user_id: 3,
      content: "Optimizing API performance is crucial. Great job on the improvements, Michael!",
      date_posted: "2024-09-04"
    },
    {
      comment_id: 13,
      post_id: 113,
      user_id: 4,
      content: "Engagement is everything in content creation. Your strategies are spot on, Emily!",
      date_posted: "2024-09-02"
    },
    {
      comment_id: 14,
      post_id: 114,
      user_id: 5,
      content: "Big data trends are evolving quickly. Your analysis is very insightful, Robert!",
      date_posted: "2024-09-01"
    },
    {
      comment_id: 15,
      post_id: 115,
      user_id: 6,
      content: "Creating seamless user experiences is so important. Your work is impressive, Sophia!",
      date_posted: "2024-09-03"
    },
    {
      comment_id: 16,
      post_id: 116,
      user_id: 7,
      content: "New JavaScript frameworks are exciting! Looking forward to seeing what you discover, James.",
      date_posted: "2024-09-04"
    },
    {
      comment_id: 17,
      post_id: 117,
      user_id: 8,
      content: "Effective team collaboration makes a huge difference. Your tips are very practical, Isabella.",
      date_posted: "2024-09-01"
    },
    {
      comment_id: 18,
      post_id: 118,
      user_id: 9,
      content: "Encryption is fundamental for security. Thanks for sharing your insights, William!",
      date_posted: "2024-09-02"
    },
    {
      comment_id: 19,
      post_id: 119,
      user_id: 10,
      content: "Storytelling can truly enhance marketing efforts. Loved your perspective, Mia!",
      date_posted: "2024-09-03"
    },
    {
      comment_id: 20,
      post_id: 120,
      user_id: 1,
      content: "Innovations in mobile app design are exciting. Your experiences are inspiring, Daniel!",
      date_posted: "2024-09-04"
    },
    {
      comment_id: 21,
      post_id: 101,
      user_id: 4,
      content: "Your latest web design project is stunning, Alice! The visuals are top-notch.",
      date_posted: "2024-09-02"
    },
    {
      comment_id: 22,
      post_id: 102,
      user_id: 5,
      content: "Scaling microservices is such a critical topic. Thanks for sharing your approach, Michael!",
      date_posted: "2024-08-30"
    },
    {
      comment_id: 23,
      post_id: 103,
      user_id: 6,
      content: "Social media trends are always evolving. Great insights, Emily!",
      date_posted: "2024-09-01"
    },
    {
      comment_id: 24,
      post_id: 104,
      user_id: 7,
      content: "Effective data visualization can transform how we understand data. Loved your tips, Robert!",
      date_posted: "2024-08-31"
    },
    {
      comment_id: 25,
      post_id: 105,
      user_id: 8,
      content: "Accessibility is so important in design. Your project looks fantastic, Sophia!",
      date_posted: "2024-09-03"
    },
    {
      comment_id: 26,
      post_id: 106,
      user_id: 9,
      content: "Discussing full-stack development challenges is so valuable. Thanks for starting the conversation, James!",
      date_posted: "2024-08-30"
    },
    {
      comment_id: 27,
      post_id: 107,
      user_id: 10,
      content: "Project management best practices are crucial for success. Your article was very insightful, Isabella!",
      date_posted: "2024-09-01"
    },
    {
      comment_id: 28,
      post_id: 108,
      user_id: 1,
      content: "Cybersecurity insights are always timely. Appreciate your input, William!",
      date_posted: "2024-08-28"
    },
    {
      comment_id: 29,
      post_id: 109,
      user_id: 2,
      content: "Crafting compelling stories is an art. Your post is a great resource, Mia!",
      date_posted: "2024-08-31"
    },
    {
      comment_id: 30,
      post_id: 110,
      user_id: 3,
      content: "Cross-platform app development is crucial. Loved your insights, Daniel!",
      date_posted: "2024-09-02"
    }
  ]
  
  module.exports = {
    findAll: () => comments,
    findById: (id) => comments.find(comment => comment.id === parseInt(id)),
    create: (comment) => {
        comment.id = comments.length + 1;
        comments.push(comment);
        return comment;
    }
  };
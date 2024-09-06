const posts=[
    {
      post_id: 101,
      user_id: 1,
      title: "My Latest Web Design Project",
      content: "Just finished a new portfolio website for a client. I'm really proud of how the visual elements came together!",
      date_posted: "2024-09-01"
    },
    {
      post_id: 102,
      user_id: 2,
      title: "Scaling Microservices",
      content: "Today, I shared my approach to scaling microservices efficiently at a tech conference. The feedback was amazing!",
      date_posted: "2024-08-28"
    },
    {
      post_id: 103,
      user_id: 3,
      title: "Social Media Trends in 2024",
      content: "Published a new article on the latest social media trends. Don't miss out on the insights for maximizing engagement!",
      date_posted: "2024-09-02"
    },
    {
      post_id: 104,
      user_id: 4,
      title: "Data Visualization Tips",
      content: "I wrote a blog post on effective data visualization techniques. These tips can help you make sense of complex data.",
      date_posted: "2024-08-30"
    },
    {
      post_id: 105,
      user_id: 5,
      title: "Designing for Accessibility",
      content: "Finished a new UI project focused on accessibility. It's crucial to design with all users in mind.",
      date_posted: "2024-09-03"
    },
    {
      post_id: 106,
      user_id: 6,
      title: "Full-Stack Development Challenges",
      content: "Started a discussion on some of the toughest challenges in full-stack development. Share your thoughts!",
      date_posted: "2024-08-29"
    },
    {
      post_id: 107,
      user_id: 7,
      title: "Project Management Best Practices",
      content: "Wrote an article on best practices for project management. It's all about communication and staying organized.",
      date_posted: "2024-09-01"
    },
    {
      post_id: 108,
      user_id: 8,
      title: "Protecting Against Cyber Threats",
      content: "Shared insights on the latest cybersecurity threats and how to protect against them. Stay safe online!",
      date_posted: "2024-08-27"
    },
    {
      post_id: 109,
      user_id: 9,
      title: "Crafting Compelling Stories",
      content: "Just published a new blog post on how to craft compelling stories for your audience. Check it out!",
      date_posted: "2024-08-31"
    },
    {
      post_id: 110,
      user_id: 10,
      title: "Developing Cross-Platform Apps",
      content: "Excited to share my experience with developing cross-platform mobile apps. It's all about code efficiency!",
      date_posted: "2024-09-02"
    },
    {
      post_id: 111,
      user_id: 1,
      title: "The Art of Minimalist Design",
      content: "I've been exploring minimalist design in my latest projects. Simplicity truly is the ultimate sophistication.",
      date_posted: "2024-09-04"
    },
    {
      post_id: 112,
      user_id: 2,
      title: "Optimizing API Performance",
      content: "Just implemented some optimizations for a RESTful API, and the performance gains are significant!",
      date_posted: "2024-09-03"
    },
    {
      post_id: 113,
      user_id: 3,
      title: "Boosting Engagement with Content",
      content: "Experimented with different content strategies and saw a noticeable increase in engagement. It’s all about knowing your audience!",
      date_posted: "2024-09-01"
    },
    {
      post_id: 114,
      user_id: 4,
      title: "Analyzing Big Data Trends",
      content: "Finished a comprehensive analysis of current big data trends. The future of data science is looking bright!",
      date_posted: "2024-08-29"
    },
    {
      post_id: 115,
      user_id: 5,
      title: "Creating Seamless User Experiences",
      content: "User experience is key! I’ve been refining interfaces to ensure they are as intuitive as possible.",
      date_posted: "2024-09-02"
    },
    {
      post_id: 116,
      user_id: 6,
      title: "Exploring New JavaScript Frameworks",
      content: "Diving into some new JavaScript frameworks. Always exciting to see what’s next in front-end development!",
      date_posted: "2024-09-03"
    },
    {
      post_id: 117,
      user_id: 7,
      title: "Effective Team Collaboration",
      content: "Shared my tips for fostering effective collaboration within project teams. Clear communication is essential.",
      date_posted: "2024-08-31"
    },
    {
      post_id: 118,
      user_id: 8,
      title: "Encryption: The Backbone of Cybersecurity",
      content: "Discussed the importance of encryption in cybersecurity. Protecting data is more critical than ever.",
      date_posted: "2024-09-01"
    },
    {
      post_id: 119,
      user_id: 9,
      title: "The Power of Storytelling in Marketing",
      content: "Storytelling isn't just for novels; it's a powerful tool in marketing. Here’s how I’ve been using it.",
      date_posted: "2024-08-30"
    },
    {
      post_id: 120,
      user_id: 10,
      title: "Innovations in Mobile App Design",
      content: "Shared my insights on the latest innovations in mobile app design. It’s an exciting time for developers!",
      date_posted: "2024-08-28"
    }
  ]
  
  module.exports = {
    findAll: () => posts,
    findById: (id) => posts.find(post => post.post_id === parseInt(id)),
    delete:(id) =>{

      let id2 = id.split("+");
      finalId = id2[0].replace(":","");
      const index = posts.findIndex(post => post.post_id === parseInt(finalId)); // Find the index of the object by ID
      console.log(finalId);
      if (index !== -1) {  // Check if user is found
          posts.splice(index, 1);  // Remove the element from the array
          console.log(`Posts with ID ${id} deleted.`);
          return id2[1];
      } else {
          console.log(`Post with ID ${id} not found.`);
         
      }
      return 0;
    },
    create: (post) => {
        post.post_id = posts.length + 1;
        posts.push(post);
        return post;
    },
    findUserPosts:(userId)=> {
      let alluserPosts =[];
      posts.forEach((post)=>{
        if(post.user_id === parseInt(userId)){
          alluserPosts.push(post);
        }
      })
      
      return alluserPosts;
    },
    findUserName:(id) => posts.find(post => post.post_id === parseInt(id)).user_id
  };
const { search } = require("../routes/userRoutes");

const users= [
    {
      id: 1,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "(555) 111-2222",
      username: "alicej",
      password: "alicepass",
      date_of_birth: "1989-05-16",
      bio: "Alice is a creative graphic designer who enjoys crafting visually stunning websites and apps."
    },
    {
    id: 2,
    first_name: "Michael",
    last_name: "Smith",
    email: "michael.smith@example.com",
    phone: "(555) 333-4444",
    username: "mikesmith",
    password: "mikesecure",
    date_of_birth: "1985-12-01",
    bio: "Michael is a seasoned software engineer with a passion for developing scalable backend systems."
  },
  {
    id: 3,
    first_name: "Emily",
    last_name: "Davis",
    email: "emily.davis@example.com",
    phone: "(555) 555-6666",
    username: "emilyd",
    password: "emilysecure",
    date_of_birth: "1993-07-22",
    bio: "Emily is a digital marketer who specializes in social media strategies and content creation."
  },
  {
    id: 4,
    first_name: "Robert",
    last_name: "Brown",
    email: "robert.brown@example.com",
    phone: "(555) 777-8888",
    username: "robbrown",
    password: "robpass",
    date_of_birth: "1990-03-10",
    bio: "Robert is an experienced data analyst with a love for uncovering insights through big data."
  },
  {
    id: 5,
    first_name: "Sophia",
    last_name: "Martinez",
    email: "sophia.martinez@example.com",
    phone: "(555) 999-0000",
    username: "sophiam",
    password: "sophia123",
    date_of_birth: "1995-11-14",
    bio: "Sophia is a UX/UI designer who is passionate about creating intuitive and user-friendly interfaces."
  },
  {
    id: 6,
    first_name: "James",
    last_name: "Williams",
    email: "james.williams@example.com",
    phone: "(555) 123-4567",
    username: "jamesw",
    password: "jamespass",
    date_of_birth: "1987-06-25",
    bio: "James is a full-stack developer with expertise in both front-end and back-end technologies."
  },
  {
    id: 7,
    first_name: "Isabella",
    last_name: "Garcia",
    email: "isabella.garcia@example.com",
    phone: "(555) 234-5678",
    username: "isabellag",
    password: "isabelpass",
    date_of_birth: "1998-04-03",
    bio: "Isabella is a project manager who excels in coordinating cross-functional teams and delivering projects on time."
  },
  {
    id: 8,
    first_name: "William",
    last_name: "Jones",
    email: "william.jones@example.com",
    phone: "(555) 345-6789",
    username: "willjones",
    password: "willpass",
    date_of_birth: "1984-02-14",
    bio: "William is a cybersecurity expert who is dedicated to protecting data and preventing cyber threats."
  },
  {
    id: 9,
    first_name: "Mia",
    last_name: "Hernandez",
    email: "mia.hernandez@example.com",
    phone: "(555) 456-7890",
    username: "miah",
    password: "miasecure",
    date_of_birth: "1996-09-07",
    bio: "Mia is a content writer who enjoys crafting engaging stories and informative articles for various audiences."
  },
  {
    id: 10,
    first_name: "Daniel",
    last_name: "Miller",
    email: "daniel.miller@example.com",
    phone: "(555) 567-8901",
    username: "danmiller",
    password: "danpass",
    date_of_birth: "1991-08-19",
    bio: "Daniel is a mobile app developer with a focus on creating seamless experiences for Android and iOS platforms."
  }
]
  
module.exports = {
  findAll: () => users,
  findById: (id) => users.find(user => user.id === parseInt(id)),
  isValid:(username, password)=>{
    let user = users.find(user => user.username === username);
    if(user){
      if(user.password === password){
        return user;
      }
      else{
        return "Password incorrect";
      }

    }
    else {
      return "user not exist";
    }
  },
  create: (user) => {
      user.id = users.length + 1;
      users.push(user);
      return user;
  }
};
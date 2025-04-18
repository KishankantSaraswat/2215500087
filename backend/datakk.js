const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/social')
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Sample Indian user data
const users = [
  { username: 'rahulsharma', email: 'rahul@example.com', postCount: 30 },
  { username: 'priyapatel', email: 'priya@example.com', postCount: 22 },
  { username: 'arjunsingh', email: 'arjun@example.com', postCount: 35 },
  { username: 'aanchalgoyal', email: 'aanchal@example.com', postCount: 17 },
  { username: 'vikasmishra', email: 'vikas@example.com', postCount: 28 },
  { username: 'nehasingh', email: 'neha@example.com', postCount: 20 },
  { username: 'manojkumar', email: 'manoj@example.com', postCount: 12 }
];

const datakk = async () => {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});

    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users created`);

    const postContents = [
      'Excited to attend the tech meetup in Bangalore!',
      'Monsoon vibes with chai and pakoras!',
      'Learning MERN stack is so exciting!',
      'How do you manage work-life balance in a startup?',
      'Exploring React Native for mobile apps.',
      'Looking forward to Diwali celebrations!',
      'Just completed a course on Data Science!',
      'Anyone using Next.js for production apps?',
      'Need some tips on cracking tech interviews.',
      'Finally deployed my first Node.js app!',
      'Sunday coding sessions with friends.',
      'Who else loves Python for data analysis?',
      'The weather in Mumbai is amazing today!',
      'Weekend plans: Netflix and chill with React docs.'
    ];

    const posts = [];
    for (let i = 0; i < 50; i++) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      const user = createdUsers[randomUserIndex];

      const randomContentIndex = Math.floor(Math.random() * postContents.length);
      const hasImage = Math.random() > 0.3; // 70% chance of having an image

      const createdAt = new Date(Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)); // Random date within last 10 days

      posts.push({
        userId: user._id,
        username: user.username,
        content: postContents[randomContentIndex],
        hasImage,
        likeCount: Math.floor(Math.random() * 50),
        commentCount: Math.floor(Math.random() * 25),
        createdAt
      });
    }

    const createdPosts = await Post.insertMany(posts);
    console.log(`${createdPosts.length} posts created`);

    console.log('Database successfully seeded!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

datakk();

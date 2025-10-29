const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static('frontend'));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Pelaya eLearning API is running' });
});

// Courses API
app.get('/api/courses', (req, res) => {
  // TODO: Implement database query
  res.json({
    courses: [
      {
        id: 1,
        title: 'Introduction to Web Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript',
        instructor: 'John Doe',
        duration: '8 weeks',
        enrolled: 150
      },
      {
        id: 2,
        title: 'Advanced JavaScript',
        description: 'Master modern JavaScript concepts and frameworks',
        instructor: 'Jane Smith',
        duration: '10 weeks',
        enrolled: 120
      }
    ]
  });
});

// User enrollment API
app.post('/api/enroll', (req, res) => {
  const { courseId, userId } = req.body;
  // TODO: Implement enrollment logic
  res.json({ 
    success: true, 
    message: 'Successfully enrolled in course',
    courseId,
    userId
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Pelaya eLearning server running on port ${PORT}`);
  console.log(`API Health Check: http://localhost:${PORT}/api/health`);
});

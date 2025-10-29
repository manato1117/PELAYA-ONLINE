# Pelaya Online API Documentation

## Base URL

```
http://localhost:3000/api
```

## Endpoints

### Health Check

Check if the API is running.

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "OK",
  "message": "Pelaya eLearning API is running"
}
```

**Status Codes:**
- `200 OK` - API is running normally

---

### Get All Courses

Retrieve a list of all available courses.

**Endpoint:** `GET /api/courses`

**Response:**
```json
{
  "courses": [
    {
      "id": 1,
      "title": "Introduction to Web Development",
      "description": "Learn the basics of HTML, CSS, and JavaScript",
      "instructor": "John Doe",
      "duration": "8 weeks",
      "enrolled": 150
    },
    {
      "id": 2,
      "title": "Advanced JavaScript",
      "description": "Master modern JavaScript concepts and frameworks",
      "instructor": "Jane Smith",
      "duration": "10 weeks",
      "enrolled": 120
    }
  ]
}
```

**Status Codes:**
- `200 OK` - Courses retrieved successfully

---

### Enroll in a Course

Enroll a user in a specific course.

**Endpoint:** `POST /api/enroll`

**Request Body:**
```json
{
  "courseId": 1,
  "userId": 1
}
```

**Parameters:**
- `courseId` (required): The ID of the course to enroll in
- `userId` (required): The ID of the user enrolling

**Response:**
```json
{
  "success": true,
  "message": "Successfully enrolled in course",
  "courseId": 1,
  "userId": 1
}
```

**Status Codes:**
- `200 OK` - Enrollment successful
- `400 Bad Request` - Missing required parameters
- `500 Internal Server Error` - Server error

---

## Error Handling

All API endpoints return errors in the following format:

```json
{
  "error": true,
  "message": "Error description"
}
```

### Common Error Codes

- `400 Bad Request` - Invalid request parameters
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

---

## Future Endpoints (To Be Implemented)

### User Management

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

### Course Management

- `POST /api/courses` - Create a new course (admin only)
- `GET /api/courses/:id` - Get specific course details
- `PUT /api/courses/:id` - Update course (admin only)
- `DELETE /api/courses/:id` - Delete course (admin only)

### Enrollment Management

- `GET /api/enrollments/user/:userId` - Get all enrollments for a user
- `GET /api/enrollments/course/:courseId` - Get all enrollments for a course
- `DELETE /api/enrollments/:id` - Unenroll from a course

### Progress Tracking

- `GET /api/progress/:enrollmentId` - Get progress for an enrollment
- `PUT /api/progress/:enrollmentId` - Update progress

---

## Authentication (Coming Soon)

Future versions will include JWT-based authentication:

```
Authorization: Bearer <token>
```

---

## Rate Limiting (Coming Soon)

API rate limiting will be implemented:
- 100 requests per minute per IP address

---

## Versioning

Current API Version: v1

The API version is included in the base URL for future versions:
```
http://localhost:3000/api/v1/...
```

---

## Examples

### Using cURL

**Get courses:**
```bash
curl -X GET http://localhost:3000/api/courses
```

**Enroll in a course:**
```bash
curl -X POST http://localhost:3000/api/enroll \
  -H "Content-Type: application/json" \
  -d '{"courseId": 1, "userId": 1}'
```

### Using JavaScript (Fetch API)

**Get courses:**
```javascript
fetch('http://localhost:3000/api/courses')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**Enroll in a course:**
```javascript
fetch('http://localhost:3000/api/enroll', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    courseId: 1,
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

## Support

For API support or questions, contact: info@pelaya-online.com

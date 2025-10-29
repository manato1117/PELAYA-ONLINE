# Pelaya Online - eLearning Platform

Pelaya Online is a modern, web-based eLearning platform designed to provide accessible and high-quality education to learners worldwide.

## Features

- **Course Catalog**: Browse and explore available courses
- **User Enrollment**: Easy course enrollment system
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **RESTful API**: Backend API for course management and user interactions
- **Modern UI**: Clean and intuitive user interface

## Project Structure

```
pelaya-elearning/
├── backend/          # Node.js/Express backend
│   ├── server.js     # Main server file
│   └── database.js   # Database connection and schema
├── frontend/         # Frontend HTML/CSS/JS
│   ├── index.html    # Main HTML file
│   ├── css/
│   │   └── style.css # Styling
│   └── js/
│       └── main.js   # Frontend JavaScript
├── database/         # SQLite database files
├── docs/             # Documentation
├── package.json      # Node.js dependencies
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/manato1117/PELAYA-ONLINE.git
cd PELAYA-ONLINE
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Health Check
- **GET** `/api/health` - Check API status

### Courses
- **GET** `/api/courses` - Get all available courses

### Enrollment
- **POST** `/api/enroll` - Enroll in a course
  - Body: `{ "courseId": 1, "userId": 1 }`

## Development

### Backend Development
The backend is built with Node.js and Express. The main server file is located at `backend/server.js`.

### Frontend Development
The frontend uses vanilla HTML, CSS, and JavaScript. Files are located in the `frontend/` directory.

### Database
The application uses SQLite for data storage. The database schema is defined in `backend/database.js`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@pelaya-online.com
- Website: [Pelaya Online](https://github.com/manato1117/PELAYA-ONLINE)

## Acknowledgments

- Built with modern web technologies
- Designed for accessibility and ease of use
- Community-driven development
# Pelaya Online Setup Guide

## Quick Start

This guide will help you get the Pelaya Online eLearning platform up and running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

- **Git** (optional, for cloning the repository)
  - Download from: https://git-scm.com/

## Installation Steps

### 1. Get the Code

Clone the repository or download the source code:

```bash
git clone https://github.com/manato1117/PELAYA-ONLINE.git
cd PELAYA-ONLINE
```

### 2. Install Dependencies

Install all required Node.js packages:

```bash
npm install
```

This will install:
- Express.js (web framework)
- CORS (Cross-Origin Resource Sharing)
- body-parser (request body parsing)
- dotenv (environment variables)
- sqlite3 (database)
- nodemon (development auto-reload)

### 3. Configure Environment

Copy the example environment file:

```bash
cp .env.example .env
```

Edit the `.env` file if needed (default values should work for local development):

```
PORT=3000
DB_PATH=./database/pelaya.db
JWT_SECRET=your-secret-key-here
NODE_ENV=development
```

### 4. Start the Application

#### Production Mode

```bash
npm start
```

#### Development Mode (with auto-reload)

```bash
npm run dev
```

The server will start on port 3000 (or the port specified in your .env file).

### 5. Access the Application

Open your web browser and navigate to:

```
http://localhost:3000
```

You should see the Pelaya Online homepage.

## Verifying the Installation

### Test the API

You can test the API endpoints using curl or a tool like Postman:

1. **Health Check**
```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Pelaya eLearning API is running"
}
```

2. **Get Courses**
```bash
curl http://localhost:3000/api/courses
```

## Project Structure

```
PELAYA-ONLINE/
├── backend/
│   ├── server.js       # Main application server
│   └── database.js     # Database configuration
├── frontend/
│   ├── index.html      # Main HTML page
│   ├── css/
│   │   └── style.css   # Styling
│   └── js/
│       └── main.js     # Frontend JavaScript
├── database/           # SQLite database (created automatically)
├── docs/               # Documentation
├── .env.example        # Example environment variables
├── .gitignore         # Git ignore rules
├── package.json        # Node.js dependencies
└── README.md          # Project overview
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can change it in the `.env` file:

```
PORT=3001
```

### Database Errors

The SQLite database is created automatically in the `database/` directory. If you encounter database errors:

1. Check that the `database/` directory exists
2. Check file permissions
3. Delete the database file and restart the server to recreate it

### Module Not Found Errors

If you see "module not found" errors, ensure all dependencies are installed:

```bash
npm install
```

## Next Steps

- Explore the API endpoints in `backend/server.js`
- Customize the frontend in `frontend/`
- Add new features or modify existing ones
- Read the API documentation in the main README.md

## Support

For issues or questions:
- Check the documentation in the `docs/` folder
- Review the code comments
- Contact: info@pelaya-online.com

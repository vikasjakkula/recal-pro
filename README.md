# RecallPro - EAMCET Preparation Platform

A modern web application for EAMCET exam preparation, featuring mock tests, analytics, and comprehensive study materials.

## Features

- User Authentication (Login/Register)
- EAMCET Mock Test Series
- Past Year Questions (PYQs)
- Detailed Solutions & Analytics
- Responsive Design
- Real-time Progress Tracking

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- JWT Authentication

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for Security

## Getting Started

1. Clone the repository
```bash
git clone [your-repo-url]
cd RecallPro
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
Create a `.env` file in the backend directory with:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Run the application
```bash
# Start backend server
cd backend
npm start

# Start frontend (in a new terminal)
cd frontend
npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/) 
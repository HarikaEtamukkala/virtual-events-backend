1. Project Title :  Virtual Events Backend
2. Description
This is the backend for the Virtual Events application, which allows users to create, manage, and participate in virtual events.

3. Features

- User authentication (register and login)
- Event management (create, update, delete, and retrieve events)
- Participant management (register for events and retrieve participant lists)
- Email notifications for user registration
- In-memory data storage for users, events, and participants


4. Installation

1. Clone the repository:
   
   git clone https://github.com/HarikaEtamukkala/virtual-events-backend/
   cd virtual-events-backend
   
2. Dependencies:
npm install

5. Usage:
 1. start the server
 npm start/ node app.js
 2. The server will run on https://localhost:3000
6. API Endpoints:
 Authentication Routes
POST /register - Register a new user
POST /login - Login a user
Event Routes
POST /events - Create a new event (requires authentication)
GET /events - Retrieve all events
GET /events/:id - Retrieve a specific event by ID
PUT /events/:id - Update an event (requires authentication)
DELETE /events/:id - Delete an event (requires authentication)
Participant Routes
POST /events/:eventId/participants - Register for an event (requires authentication)
GET /events/:eventId/participants - Retrieve participants for an event (requires authentication)
7. Technologies Used
- Node.js
- Express.js
- JSON Web Tokens (JWT) for authentication
- Nodemailer for email notifications
- In-memory data storage

  

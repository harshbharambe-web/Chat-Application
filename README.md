# 💬 Chat Application

A full-stack chat application built using Node.js, Express.js, MongoDB, and Vanilla JavaScript.
This project demonstrates how a client-server architecture works using RESTful APIs to handle communication between frontend and backend.

---

## 🚀 Project Overview

This application allows users to create, view, update, and delete messages.
The system is designed using a REST-based architecture where the frontend interacts with backend APIs through HTTP requests.

The backend handles routing, business logic, and database operations, while MongoDB is used to persist message data.

---

## 🧠 Architecture

The application follows a **3-layer architecture**:

### 1. Client (Frontend)

* Built using HTML, CSS, and JavaScript
* Sends HTTP requests (GET, POST, PUT, DELETE)
* Displays messages and interacts with the user

### 2. Server (Backend)

* Built using Node.js and Express.js
* Handles API routes and request processing
* Contains business logic for managing messages

### 3. Database (MongoDB)

* Stores all message data
* Uses Mongoose for schema and data modeling

---

### 🔁 Working Flow

1. User performs an action (send/update/delete message)
2. Frontend sends an HTTP request to the server
3. Server processes the request using defined routes
4. Server interacts with MongoDB to perform the operation
5. Response is sent back to the frontend
6. UI updates accordingly

---

## 🔗 API Design

The application uses RESTful APIs to manage chat messages.

### 📌 Endpoints

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| GET    | /chats        | Retrieve all messages       |
| GET    | /chats/:id    | Retrieve a specific message |
| POST   | /chats/ne     | Create a new message        |
| PUT    | /chats/:id    | Update an existing message  |
| DELETE | /chats/:id    | Delete a message            |

---

## ⚙️ How APIs Work

* **GET** → Fetch data from the database
* **POST** → Send new data from client to server
* **PUT** → Update existing data
* **DELETE** → Remove data

Each API endpoint corresponds to a specific CRUD operation and follows standard HTTP conventions.

Example flow:

* User submits a message → `POST /messages`
* Server saves message in MongoDB
* Server responds with success
* Frontend updates UI

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Frontend

* HTML
* CSS
* JavaScript

---

## 📁 Project Structure

chat-app/
├── models/        → Mongoose schemas
├── routes/        → API route handlers
├── public/        → Static files (CSS, JS)
├── views/         → UI templates
├── app.js         → Main server file
├── package.json   → Dependencies
├── README.md      → Project documentation

---

## 📸 Screenshots

(Add UI screenshots or Postman API responses here)

---

## 📚 Key Learnings

* Designing RESTful APIs
* Understanding client-server architecture
* Integrating frontend with backend
* Performing CRUD operations using MongoDB
* Structuring a full-stack application

---

## 🚀 Future Improvements

* Add user authentication (login system)
* Implement real-time chat using WebSockets / Socket.io
* Improve UI/UX design
* Add user-specific messaging

---

## 🤝 Conclusion

This project helped build a strong foundation in backend development, API design, and full-stack integration by implementing a practical messaging system.

---

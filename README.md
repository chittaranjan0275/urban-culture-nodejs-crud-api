# sqlite-node-crud

This project is a simple Node.js application that uses SQLite for CRUD (Create, Read, Update, Delete) operations on user data.

## Project Structure

```
sqlite-node-crud
├── src
│   ├── app.js
│   ├── database.js
│   ├── models
│   │   └── user.js
│   └── routes
│       └── users.js
├── package.json
├── .env
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd sqlite-node-crud
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   In the root directory, create a `.env` file and add the following line:
   ```
   DATABASE_FILE=./database.sqlite
   ```

4. **Run the application:**
   Start the server with:
   ```bash
   node src/app.js
   ```

5. **Access the API:**
   You can use tools like Postman or curl to interact with the API endpoints defined in `src/routes/users.js`.

## API Endpoints

- **Create User:** `POST /users`
- **Get All Users:** `GET /users`
- **Get User by ID:** `GET /users/:id`
- **Update User:** `PUT /users/:id`
- **Delete User:** `DELETE /users/:id`




## API Endpoints

- **Create User:** `POST /users`
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com"}' http://localhost:3000/api/users
  ```

- **Get All Users:** `GET /users`
  ```bash
  curl http://localhost:3000/api/users
  ```

- **Get User by ID:** `GET /users/:id`
  ```bash
  curl http://localhost:3000/api/users/1
  ```

- **Update User:** `PUT /users/:id`
  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"name":"John Updated","email":"john.updated@example.com"}' http://localhost:3000/api/users/1
  ```

- **Delete User:** `DELETE /users/:id`
  ```bash
  curl -X DELETE http://localhost:3000/api/users/1
  ```

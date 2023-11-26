# Task Manager

This is a Node.js project that implements a simple task manager application. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on tasks.

## Features

- Get all tasks: Retrieve a list of all tasks in the system.
- Create task: Add a new task to the system.
- Delete task: Remove a task from the system.
- Update task: Modify the details of an existing task.
- Get task by ID: Retrieve a specific task using its unique identifier.

## Technologies Used

- Node.js: A JavaScript runtime environment that allows us to run JavaScript code outside of a web browser.
- Express: A fast and minimalist web application framework for Node.js.
- MongoDB: A NoSQL database that provides high performance, scalability, and flexibility.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js that provides a simple and straightforward way to interact with the database.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/task-manager.git
    ```

2. Install the dependencies:

    ```bash
    cd task-manager
    npm install
    ```

3. Set up the MongoDB connection:

    - Make sure you have MongoDB installed and running on your machine.
    - Update the MongoDB connection URL in the `config.js` file.

4. Start the application:

    ```bash
    npm start
    ```

## Usage

- Access the application in your web browser at `http://localhost:3000`.
- Use the provided API endpoints to interact with the task manager.

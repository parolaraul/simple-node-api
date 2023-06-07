# NodeJS API Project

This repository contains a simple Node.js API project that demonstrates best practices for building a production-ready API using Node.js. The project incorporates various features and technologies commonly used in professional Node.js applications.

## Features

- **Express.js**: A fast and minimalist web framework for Node.js, used to handle HTTP requests and routes.
- **Mongoose**: An elegant MongoDB object modeling tool for Node.js, used to interact with the database.
- **JWT Authentication**: Implements JSON Web Token (JWT) authentication for securing API endpoints.
- **Validation**: Input data validation using a library such as Joi or Express Validator.
- **Error Handling**: Centralized error handling middleware for consistent error responses.
- **Logging**: Logging requests, errors, and other relevant information for debugging and monitoring purposes.
- **Environment Variables**: Configuration management using environment variables.
- **Testing**: Unit testing using a testing framework like Jest or Mocha.
- **Linting**: Code linting using ESLint to maintain code quality and enforce best practices.
- **Docker**: Containerization of the application using Docker for easy deployment.

## Prerequisites

- Node.js - [Install Node.js](https://nodejs.org)
- MongoDB - [Install MongoDB](https://www.mongodb.com)

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/parolaraul/simple-node-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-node-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

3.1 Create Private Key

This will generate a `privateKey.key` file in the project directory.
```bash
simple-node-api> openssl genrsa -out privateKey.key 2048
```

4. Set up the environment variables:

    - Create a `.env` file in the project root.
    - Define the following environment variables in the `.env` file:

      ```plaintext
      PORT=3000
      MONGODB_URI=mongodb://localhost:27017/your-database-name
      JWT_SECRET=your-secret-key
      ```

      Replace `your-database-name` with the name of your MongoDB database and `your-secret-key` with a secure secret key for JWT authentication.

5. Start the server:

   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:3000`.

## Usage

- The API endpoints and their descriptions can be found in the project's `routes` directory.
- Use a tool like [Postman](https://www.postman.com) or [cURL](https://curl.se) to interact with the API.

## Testing

To run the unit tests, use the following command:

```bash
npm test
```

## Run with Docker

Build the Docker image (run this command in the same directory as the Dockerfile)
```bash
docker build -t simple-node-api .
```
Run the Docker container based on the image
```bash
docker run -p 3000:3000 --env-file .env simple-node-api
```

## Contributing

Contributions are welcome! If you find any issues or want to contribute to the project, please create a pull request.

When contributing to this repository, please follow the existing code style, conventions, and commit message format.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Express.js](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)
- [JSON Web Tokens](https://jwt.io)
- [Joi](https://joi.dev)

# Employee Management System API

**This is a Node.js backend API for an Employee Management System. The API supports basic CRUD operations for employee records, user authentication, and pagination, sorting, and filtering capabilities.**

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bits-of-rahool/employee-management-system.git

2. **Install Dependencies**
* cd employee-management-system<br>
* npm install<br>
* Create a .env file and add the following Variables:
    1. MONGO_URI
    2. TOKEN_SECRET
    3. TOKEN_EXPIRY

3. **Run The Application** <br>
* npm start

#### User Endpoints
* Register:<br>
    * Endpoint: /api/user/register<br>
    * Method: POST<br>
    * Description: Register a new user account.<br>
* Login:<br>
    * Endpoint: /api/user/login<br>
    * Method: POST<br>
    * Description: Authenticate a user and generate a JWT token.<br>
* Logout:<br>
    * Endpoint: /api/user/logout<br>
    * Method: POST<br>
    * Description: Invalidate the current user's JWT token.<br>
#### Employee Endpoints<br>
* Get All Employees:<br>
    * Endpoint: /api/employees<br>
    * Method: GET<br>
    * Description: Retrieve a list of all employees (supports pagination, sorting, and filtering).<br>
* Create Employee:<br>
    * Endpoint: /api/employees<br>
    * Method: POST<br>
    * Description: Create a new employee record.<br>
* Get Employee by ID:<br>
    * Endpoint: /api/employees/:employeeID<br>
    * Method: GET<br>
    * Description: Retrieve details of a specific employee by their ID.<br>
* Update Employee:<br>
    * Endpoint: /api/employees/:employeeID<br>
    * Method: PUT<br>
    * Description: Update the details of an existing employee using their ID.<br>
* Delete Employee:<br>
    * Endpoint: /api/employees/:employeeID<br>
    * Method: DELETE<br>
    * Description: Delete a specific employee by their ID.<br>

**Note: All employee endpoints require a valid JWT token in the authorization header.**

#### Pagination, Sorting, and Filtering:
The **GET /api/employees** endpoint supports pagination, sorting, and filtering.

You can provide query parameters like page, limit, sort, and filter to customize the results.

``` /api/employees?page=1&limit=10&sort=employeeID:desc&filter={"firstName":"rahul"} ``` <br>

Authentication<br>
The API is secured using JWT (JSON Web Tokens). You may need to implement user authentication and authorization based on your requirements.<br>
Project Structure<br>
The project is structured into controllers, models, routes, middleware, and utils.<br>
The employeeController.js file contains CRUD operations.<br>
The employeeRoutes.js file defines API routes.<br>
The validationMiddleware.js file handles input validation using Joi.<br>
The auth.js file contains functions for JWT authentication.<br>
The pagination.js file provides pagination functionality.<br>
Technologies Used<br>
Node.js<br>
Express.js<br>
MongoDB<br>
Mongoose<br>
Joi (for validation)<br>
JWT (for authentication)<br>





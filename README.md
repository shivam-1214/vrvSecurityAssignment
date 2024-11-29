**Authentication and Authorization System using Node.js, Express, JWT, and MongoDB**

In this project, I have implemented a **secure authentication system** where users can **register**, **log in**, and **log out**. The system uses **MongoDB** for data storage, **Node.js** and **Express** for building the server-side API, and **JWT** (JSON Web Tokens) for managing user authentication and session management.

### Key Features:
1. **User Authentication**:
   - During **user registration**, users are required to provide a **username**, **password**, and **role**. The **role** determines the user’s permissions and access level within the application (e.g., Admin, User, Moderator).
   - The **password** is securely hashed using **bcrypt** before being stored in the MongoDB database to prevent exposure of sensitive information.
   - Upon **login**, users provide their **username** and **password**, which are verified against the stored hashed password in MongoDB. If the credentials match, a **JWT** (JSON Web Token) is generated and returned to the client for authentication.
   - Users can **log out** by removing their stored JWT token from the client or by using token invalidation methods server-side.

2. **Role-Based Authorization (RBAC)**:
   - **Role-Based Access Control (RBAC)** is implemented to control access to resources based on the user’s assigned **role** (Admin, User, or Moderator). 
     - **Admin** users have full access to all resources, including managing other users and roles.
     - **Moderators** have more limited access, typically for managing content or specific sections of the application.
     - **Users** have the most restricted access, allowing them to view and modify only their own personal information and resources.
   - The **role** is stored in MongoDB along with other user details and is checked during authorization to ensure users have the appropriate permissions to access specific routes.

3. **JWT for Session Management**:
   - After successful **login**, a **JWT token** is generated. This token includes the user's **role** and other relevant details, and is signed with a secret key for security.
   - The **JWT** token is used for session management. It is included in the HTTP header of subsequent requests to access protected resources. The server validates the token to ensure the user is authenticated and checks their role for authorization before granting access to the requested resource.
   - The JWT token includes an expiration time to enforce session limits and prevent long-term access without re-authentication.

4. **MongoDB Database Integration**:
   - **MongoDB** is used as the database to store user information, including **username**, **hashed password**, and **role**.
   - The **User schema** in MongoDB is created using **Mongoose**. It defines the fields: `username`, `password` (hashed), and `role`. 
   - **Roles** are predefined (Admin, User, Moderator) and are assigned during registration. This role is crucial for managing user permissions and is used to ensure that users only have access to the appropriate resources based on their role.
   - MongoDB’s flexible schema design allows efficient retrieval and updates of user data and roles, making it ideal for this system’s needs.

### Development Process:

1. **Setting Up the Project Environment**:
   - Used **Node.js** and **Express** to build the backend application, providing an efficient environment for handling user authentication and authorization requests.
   - Integrated **MongoDB** to store and manage user data securely. **Mongoose** was used as the ODM (Object Data Modeling) tool for interacting with the database.
   - Installed necessary dependencies such as `express`, `mongoose` (for MongoDB integration), `bcrypt` (for password hashing), `jsonwebtoken` (for JWT), and `dotenv` (for environment variable management).

2. **Creating the User Model**:
   - Developed the **User schema** using Mongoose. The schema includes:
     - **username**: A unique identifier for the user.
     - **password**: A hashed password (using **bcrypt**).
     - **role**: A predefined role (Admin, Moderator, or User).
   - This schema is used to store and retrieve user data from MongoDB.

3. **Building the Authentication Routes**:
   - **Registration Route**: Users register by providing a **username**, **password**, and **role**. The password is hashed before storage in MongoDB. The new user’s role is saved, and they are added to the database.
   - **Login Route**: The user logs in by providing their **username** and **password**. The system checks if the **password** matches the one stored in the database (after hashing it). If the login is successful, a **JWT** token is generated containing the user’s **role** and other relevant details.
   - **Logout Route**: A simple logout process is implemented by removing or invalidating the token stored on the client side.

4. **Implementing Role-Based Authorization (RBAC)**:
   - Developed middleware for **role-based access control**. The middleware checks the **JWT token** included in the request headers to verify if the user is authenticated.
   - The user's **role** is extracted from the JWT token’s payload, and the authorization middleware ensures that the user’s role allows them to access the requested resource. For instance:
     - **Admin** users can access all resources.
     - **Moderator** users have restricted access to certain resources.
     - **User** can only access their own data.

5. **Session Management with JWT**:
   - Upon successful login, a **JWT** token is generated containing the user’s **username** and **role**. This token is sent back to the client and must be included in the HTTP Authorization header for all subsequent requests.
   - On each request to a protected route, the server verifies the JWT token to ensure it is valid. If the token is expired or tampered with, the user will be denied access. The role embedded in the token allows for authorization checks.

6. **Testing and Security**:
   - Applied strong hashing techniques using **bcrypt** to secure passwords.
   - Ensured proper **JWT expiration** and **role validation** to prevent unauthorized access.
   - Used **HTTPS** to ensure secure transmission of sensitive information, like passwords and tokens.

### Flow Summary:
1. **User Registration**: User provides a **username**, **password**, and **role** (Admin, User, or Moderator). The password is hashed and the data is stored in MongoDB.
2. **User Login**: User logs in with their **username** and **password**, and receives a **JWT token** with their **role** embedded.
3. **Role-Based Access Control (RBAC)**: The user’s **role** determines which resources they can access. The server verifies the JWT token and the user’s role for each request.
4. **JWT for Session Management**: The client stores the **JWT token**, which is used to authenticate and authorize access to protected resources.

### Technologies Used:
- **Node.js**: Backend runtime for building the API.
- **Express**: Framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing user data, including **username**, **hashed password**, and **role**.
- **Mongoose**: ODM for interacting with MongoDB.
- **JWT (JSON Web Tokens)**: For user authentication and managing sessions.
- **bcrypt**: For securely hashing passwords before storage.
- **Role-Based Access Control (RBAC)**: For managing user permissions based on their **role**.

This authentication and authorization system ensures secure management of user sessions and access control, leveraging MongoDB, JWT, and Node.js to handle authentication, authorization, and user data storage efficiently.

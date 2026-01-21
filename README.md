# Contact Manager App (MVC)

A full-stack web application for managing personal contacts. This project implements a complete CRUD (Create, Read, Update, Delete) system with user authentication, ensuring that each user has access only to their own private address book.

The application follows the **MVC (Model-View-Controller)** architecture and is built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

* **User Authentication:**
    * Secure User Registration and Login.
    * Password hashing using `bcryptjs`.
    * Session management with `express-session` and MongoDB storage.
* **Contact Management (CRUD):**
    * **Create:** Add new contacts with Name, Surname, Email, and Phone number.
    * **Read:** View a list of contacts specific to the logged-in user.
    * **Update:** Edit existing contact details.
    * **Delete:** Remove contacts from the list.
* **Security:**
    * **CSRF Protection:** Forms are protected against Cross-Site Request Forgery using `csurf`.
    * **Data Validation:** Input data is sanitized and validated before saving.
    * **Access Control:** Middleware ensures routes are protected (e.g., only logged-in users can view contacts).
* **User Interface:**
    * Responsive design using **Bootstrap 5**.
    * Dynamic views rendered with **EJS**.
    * Flash messages for success and error notifications.

---

## 🛠️ Technologies Used

### Backend
* **Node.js**: JavaScript runtime environment.
* **Express**: Web framework for Node.js.
* **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
* **Connect-Mongo**: MongoDB session store for Express.
* **Dotenv**: Environment variable management.

### Frontend
* **EJS**: Embedded JavaScript templating engine.
* **Bootstrap 5**: CSS Framework for styling and responsiveness.
* **Webpack**: Module bundler for frontend assets.

---

## ⚙️ Prerequisites

Before running this project, ensure you have the following installed:
1.  **Node.js** (v14 or higher)
2.  **npm** (Node Package Manager)
3.  **MongoDB** (Either installed locally or a cloud URI from MongoDB Atlas)

---

## 📥 Installation & Setup

Follow these steps to get the application running locally:

### 1. Clone the repository
### 2. Install Dependencies
Install all the necessary backend and frontend packages:

Bash

npm install
### 3. Environment Configuration
Create a .env file in the root directory of the project. You need to define your database connection string and a session secret.

File: .env

Snippet de código

CONNECTIONSTRING=mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdbname?retryWrites=true&w=majority
SESSIONSECRET=your_super_secret_key_here
Replace the MongoDB URI with your actual connection string.

4. Build Frontend Assets (Optional)
If you made changes to the frontend JavaScript in frontend/main.js, you need to rebuild the bundle:

Bash

npm run build
▶️ Running the Application
Development Mode
Use this command to run the server with nodemon, which automatically restarts the server when you make code changes:

Bash

npm run dev
Production Mode
To run the server normally:

Bash

npm start
Once the server is running, open your browser and access: http://localhost:3000

##  📂 Project Structure
This project follows the MVC (Model-View-Controller) pattern:

*src/controllers: Handles the application logic (e.g., contactsController.js, loginController.js).

*src/models: Defines database schemas and data validation rules (e.g., ContactsModel.js, LoginModel.js).

*src/views: EJS templates for the User Interface (HTML).

*src/middlewares: Middleware functions for routes (e.g., CSRF checks, Login requirements).

*public/assets: Contains static files (CSS, bundled JS, images).

*routes.js: Defines the application routes and links them to controllers.

*server.js: The entry point of the application.

## 🛡️ How it Works
*Registration: A new user signs up. The password is hashed, and the user is saved to the database.

*Login: The user logs in. A session is created and stored in MongoDB.

*Dashboard: The user sees their contact list. The system filters contacts by the logged-in user's ID (id_user).

CRUD:

*When creating a contact, the user's ID is attached to the contact document.

*When editing or deleting, the system ensures the action is performed on the correct ID.

*Logout: The session is destroyed, and the user is redirected to the home page.

## 📝 License
*This project is open-source and available for educational purposes.

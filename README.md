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

## ⚡ Quick Start

To run this project locally, follow these 3 simple steps:

### 1. Install Dependencies
Open your terminal in the project folder and run:
``npm install``
### 2. Configure Environment
* Create a file named .env in the root directory and add your connection details:

``CONNECTIONSTRING=your_mongodb_connection_string``
``SESSIONSECRET=your_secret_key``

**(You need a MongoDB URI. If you don't have one, create a free cluster on MongoDB Atlas).**

### 3. Run the App
* Start the server:
``npm start``

**Access the application at: http://localhost:3000**

##  📂 Project Structure
This project follows the MVC (Model-View-Controller) pattern:

* **src/controllers:** Handles the application logic (e.g., contactsController.js, loginController.js).

* **src/models:** Defines database schemas and data validation rules (e.g., ContactsModel.js, LoginModel.js).

* **src/views:** EJS templates for the User Interface (HTML).

* **src/middlewares:** Middleware functions for routes (e.g., CSRF checks, Login requirements).

* **public/assets:** Contains static files (CSS, bundled JS, images).

* **routes.js:** Defines the application routes and links them to controllers.
 
* **server.js:** The entry point of the application.

## 🛡️ How it Works
* **Registration:** A new user signs up. The password is hashed, and the user is saved to the database.

* **Login:** The user logs in. A session is created and stored in MongoDB.

* **Dashboard:** The user sees their contact list. The system filters contacts by the logged-in user's ID (id_user).

* **CRUD:**

   * When creating a contact, the user's ID is attached to the contact document.

   * When editing or deleting, the system ensures the action is performed on the correct ID.

   * Logout: The session is destroyed, and the user is redirected to the home page.

## 📝 License
*This project is open-source and available for educational purposes.

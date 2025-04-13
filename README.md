
# Express Session-Auth (EJS + Mongoose)

This is a **Node.js** project built with the **Express.js** framework that demonstrates **session-based authentication** using **EJS templates** and **MongoDB (via Mongoose)**.

The app supports **two types of login flows**:
- **User Login**
- **Company Login** (demo only)

Once a user logs in, a unique **session ID** is generated. If the session exists, users are prevented from re-accessing the login page and can only access routes intended for authenticated users. If no session is found, they're redirected to the login page.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**  
   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate to the project directory**  
   ```bash
   cd <your-repo-folder>
   ```

3. **Install dependencies**  
   ```bash
   npm install
   ```

4. **Create a `.env` file** in the root with your MongoDB URI:
   ```
   MONGODB_URI=your-mongodb-connection-string
   ```

5. **Start the development server**  
   ```bash
   npm start
   ```

6. Open your browser and visit:  
   `http://localhost:3000`

---

## 🛠 Features

- ✅ Login and session management
- ✅ EJS templating for views
- ✅ MongoDB integration using Mongoose
- ✅ MVC (Model-View-Controller) project structure
- ✅ Password hashing with **bcrypt**
- ✅ Middleware for route protection
- ✅ Separate flows for **user** and **company** logins
- ✅ Simple error handling and redirection

---

## 📂 Project Structure

The app follows the **MVC pattern** for clean separation of concerns:
- **Models** – MongoDB schemas using Mongoose
- **Views** – Rendered using EJS
- **Controllers** – Logic for user and company authentication

There are **two main controllers**:
- **User Controller**: Handles login, signup, and session authentication for users  
- **Company Controller**: Manages similar logic for company accounts (demo purposes)

---

## 📦 Technologies & Packages Used

| Package          | Purpose                                |
|------------------|----------------------------------------|
| express          | Core web framework                     |
| mongoose         | MongoDB object modeling                |
| express-session  | Session management                     |
| bcrypt           | Password hashing                       |
| cookie-parser    | Cookie parsing (optional)              |
| dotenv           | Manage environment variables           |
| ejs              | Templating engine for rendering views  |
| jsonwebtoken     | JWT support (optional, not required)   |
| nodemon          | Auto-reload server in development      |

---

## 🌐 Usage

- Navigate to `/login` to access the login page.
- On successful login, a session is created.
- Access to protected routes like `/home` is allowed only with a valid session.
- Without a session, users are redirected back to `/login`.

---

## 💡 Notes

- The company login flow is a demo implementation. You can build on it to add more functionality.
- All passwords are hashed securely before being stored in the database.
- You can easily integrate JWT in the future if you want to support token-based authentication.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute, fork, or raise issues if you have questions or suggestions!

# Authentication Systems

This repository contains two implementations of a user authentication system—one built with Angular and the other with React. Both versions provide signup, login, and dashboard functionalities with a clean, responsive user interface. You can use either version as a reference or starting point for your project.

---

## Angular Authentication System

A complete user authentication system built with Angular. This project provides signup, login, and dashboard functionalities with a clean, responsive user interface.

### Features

- **User Registration**: Create new user accounts with username, email, and password.
- **User Authentication**: Secure login system using local storage.
- **Protected Routes**: Dashboard access restricted to authenticated users only.
- **Responsive Design**: Mobile-friendly UI that adapts to different screen sizes.
- **JSON Server Backend**: Simple backend using JSON Server for data storage.

### Project Structure

```
auth-system/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.component.html
│   │   │   │   └── dashboard.component.css
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.css
│   │   │   └── signup/
│   │   │       ├── signup.component.ts
│   │   │       ├── signup.component.html
│   │   │       └── signup.component.css
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   └── N7-logo-fr.png
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── db.json
├── package.json
└── angular.json
```

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Angular CLI (v17.x or higher)

### Installation

1. **Clone or download the repository.**

2. **Navigate to the Angular project directory:**

   ```bash
   cd auth-system
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the JSON Server (database):**

   ```bash
   npx json-server --watch db.json --port 3000
   ```

5. **In a new terminal, start the Angular application:**

   ```bash
   ng serve
   ```

6. **Open your browser and navigate to:**

   ```
   http://localhost:4200
   ```

### How It Works

#### User Registration
1. Navigate to the signup page.
2. Enter username, email, and password.
3. Click "Sign Up".
4. User data is saved to the JSON Server.
5. User is redirected to the login page.

#### User Login
1. Navigate to the login page.
2. Enter username and password.
3. Click "Login".
4. Credentials are validated against the JSON Server.
5. If valid, the user is redirected to the dashboard.

#### Dashboard
- Displays a welcome message with the user's name.
- Only accessible to authenticated users.
- Provides logout functionality.

### Technical Implementation

- **Standalone Components**: Utilizes Angular's standalone component architecture.
- **State Management**: Uses local storage for persistent login information.
- **Routing**: Angular Router implements protected routes and navigation between components.
- **Form Handling**: Built with Angular's FormsModule and two-way data binding (ngModel).
- **HTTP Communication**: HttpClient is used to communicate with the JSON Server backend.

### Future Enhancements

- Add email verification.
- Implement password hashing.
- Add user profile management.
- Implement token-based authentication.
- Add social login options.

---

## React Authentication System

This version guides you through building the same authentication system with React, using a component-based architecture and popular libraries.

### Features

- **User Registration**: Create new user accounts with username, email, and password.
- **User Authentication**: Secure login with state management and local storage.
- **Protected Routes**: Dashboard accessible only for authenticated users.
- **Responsive Design**: Clean and responsive UI with a Navbar.
- **JSON Server Backend**: Uses JSON Server as a simple backend for data storage.

### Project Structure

```
auth-system-react/
├── public/
│   ├── index.html
│   └── N7-logo-fr.png
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.js
│   │   │   └── Dashboard.css
│   │   ├── Login/
│   │   │   ├── Login.js
│   │   │   └── Login.css
│   │   ├── Signup/
│   │   │   ├── Signup.js
│   │   │   └── Signup.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   └── ProtectedRoute/
│   │       └── ProtectedRoute.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── db.json
├── package.json
└── README.md
```

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Create React App

### Installation

1. **Create the React project:**

   ```bash
   npx create-react-app auth-system-react
   cd auth-system-react
   ```

2. **Install necessary dependencies:**

   ```bash
   npm install react-router-dom axios formik yup
   ```

3. **Set up the folder structure:**  
   Create directories for components and services (see the structure above).

4. **Start JSON Server (in the root directory where `db.json` is located):**

   ```bash
   npx json-server --watch db.json --port 3000
   ```

5. **Start the React application:**

   ```bash
   npm start
   ```

6. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

   (React’s default port is 3000—if it conflicts with JSON Server, you may need to change one of the ports.)

### How It Works

#### User Registration
1. Navigate to the signup page.
2. Enter username, email, and password.
3. Click "Sign Up".
4. User data is posted to JSON Server.
5. User is redirected to the login page.

#### User Login
1. Navigate to the login page.
2. Enter username and password.
3. Click "Login".
4. Credentials are validated against the JSON Server.
5. If valid, the user is redirected to the dashboard.

#### Dashboard
- Displays a welcome message with the user's name.
- Only accessible to authenticated users.
- Provides logout functionality via a protected route component.

### Technical Implementation

- **Form Handling**: Uses Formik and Yup for robust form management and validation.
- **Routing**: React Router manages navigation and protected routes.
- **State Management**: Utilizes React hooks (useState, useEffect) and local storage for authentication state.
- **HTTP Requests**: Axios is used to communicate with JSON Server.
- **Component Structure**: The app is built using React’s component-based architecture.

### Future Enhancements

- Add email verification.
- Implement password hashing.
- Add user profile management.
- Implement token-based authentication.
- Add social login options.

---

## Credits

- **Angular Version**: Built using Angular and JSON Server.
- **React Version**: Built using React, React Router, Axios, Formik, and Yup.
- **Backend**: JSON Server provides a mock API for data storage.


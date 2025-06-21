# 🔐 React Role-Based Authentication App

A complete React.js authentication system built using **JWT**, **React Router**, **AuthContext**, and **Role-Based Route Protection**. This project uses the [Platzi Fake API](https://fakeapi.platzi.com/en/rest/auth-jwt/) to simulate backend authentication and demonstrates real-world patterns for managing user sessions and roles.

---

## 🚀 Features

✅ JWT-based login using fake API  
✅ AuthContext for global authentication state  
✅ Private routes for authenticated-only access  
✅ Role-based route protection (admin, customer, manager)  
✅ Redirect unauthenticated or unauthorized users  
✅ Global and local loading state handling  
✅ Logout functionality with cleanup  
✅ Role selection dropdown for testing  
✅ Modular, clean project structure  
✅ Toast notifications with `react-toastify`

---

## 🔐 Login Credentials (From Fake API)

Use the following credentials to log in:

Email: john@mail.com
Password: changeme

## 🗂️ Folder Structure

├── public/
├── src/
│ ├── components/
│ │ ├── Login/
│ │ ├── Profile/
│ │ ├── Home/
│ │ ├── AdminDashboard/
│ │ ├── ManagerDashboard/
│ │ ├── CustomerDashboard/
│ │ └── Unauthorized/
│ ├── context/
│ │ └── Auth/
│ │ └── AuthContext.jsx
│ ├── routes/
│ │ └── PrivateRoutes.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
└── README.md

## 📌 What This Project Covers

| Concept                           | ✅ Covered | Notes                                |
|-----------------------------------|------------|--------------------------------------|
| JWT Authentication                | ✅         | Using Platzi Fake API                |
| AuthContext (React Context API)   | ✅         | Centralized auth logic               |
| Protected Routes (Private Routes) | ✅         | Blocks unauthenticated access        |
| Role-Based Access Control         | ✅         | Simulated with dropdown              |
| React Router                      | ✅         | `react-router-dom` v6                |
| Toast Notifications               | ✅         | Via `react-toastify`                 |
| useNavigate / Redirects           | ✅         | Login, Logout, and Unauthorized page |
| Loading State (local/global)      | ✅         | For login and profile API fetches    |
| Route Guarding with Outlet        | ✅         | Used in `PrivateRoutes`              |
| Unauthorized Access Handling      | ✅         | `/unauthorized` fallback page        |
| Error Handling                    | ✅         | Catch blocks for API errors          |
| Code Structure & Reusability      | ✅         | Well-structured & modularized        |

---

## 📦 Technologies Used

- **React** (Vite + JSX)
- **React Router v6**
- **React Context API**
- **React Toastify**
- **Fake Store API (Platzi)**

---

## 🛠️ Getting Started

### 1. Clone the Repository

git clone https://github.com/saikrishna-flex/react-auth-role-based-routing.git
cd react-auth-role-based-routing

2. Install Dependencies
npm install
3. Start the App
npm run dev

🧪 How to Test Role-Based Routing
Login using the provided credentials.
Choose a role: admin, manager, or customer.
Navigate to different dashboards like /admin, /manager, /customer.
If the role doesn’t match, you'll be redirected to /unauthorized.

✨ Author
Made with ❤️ by saikrishna-flex

📚 Resources
Platzi Fake Store API
React Router Docs
React Toastify

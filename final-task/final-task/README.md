# 🎓 Scholarship Finder – React Web App for Students

**Scholarship Finder** is a web application built with React and Firebase that helps students find, favorite, and apply for scholarships based on their needs and study background. It features full authentication, a searchable database, file uploads for applications, and a personal dashboard.

## 🚀 Features

### 🔍 Scholarship Search
- Filter scholarships by:
  - Financial need
  - Academic institution
  - Field of study
- Display scholarships as cards
- Add scholarships to favorites 💙
- Apply to scholarships (requires login)

### 🔐 Authentication (Firebase Auth)
- Register with email and password
- Login with existing account
- Password reset via email
- All features are restricted to authenticated users

### 📤 Application Submission
- Applying requires uploading 3 mandatory PDF files:
  - Student ID or certificate
  - Proof of income
  - Passport or ID card
- Files are saved to **Firebase Storage**
- Application is saved to **Firestore** under user data
- Confirmation email is sent (optional setup)

### 🧑‍💼 User Dashboard
- View:
  - Favorite scholarships
  - Pending applications
  - Approved scholarships
- Includes:
  - Pie chart of scholarship types
  - Bar chart of application stats
  - Popular scholarships table

### 🧪 Dev Navigation
- Development navbar includes:
  - Home
  - Dashboard
  - Help
  - Login/Logout (based on session)

## 🛠 Tech Stack

- React
- React Router
- Firebase (Authentication, Firestore, Storage)
- Context API (UserContext)
- CSS Modules

  ## 🖥️ Installation & Running Locally

1. Clone the repository, install dependencies, and start the development server:
   ```bash
   git clone https://github.com/idonevo136/React_final_project.git
   cd final-task/final-task
   npm install
   npm run dev

## 📂 File Structure

src/
├── App.jsx
├── main.jsx
├── firebase.js
├── view/
│   ├── component/
│   │   └── DevNavbar/
│   ├── pages/
│   │   ├── Auth/              # Login, SignUp, ForgotPassword, UserContext
│   │   ├── Home/
│   │   ├── Search/
│   │   ├── Results/           # Scholarship results page
│   │   ├── Dashboard/         # Personal dashboard
│   │   └── HelpSettings/      # FAQ and settings page

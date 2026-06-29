# Community Hero 🌍

An AI-powered civic issue reporting platform that enables citizens to report local infrastructure problems using images and location data. 

---

## Overview

Community Hero bridges the gap between citizens and local authorities by simplifying the process of reporting civic issues. Users can capture an image of a problem, such as a pothole or broken streetlight, and the platform automatically extracts meaningful information using AI.

Instead of manually writing detailed complaints, the application generates an intelligent report that can be reviewed and submitted within seconds.

---

## Features

### AI-Powered Issue Detection

- Upload an image of a civic issue
- Automatic issue classification
- AI-generated description
- Severity estimation
- Department recommendation
- Priority scoring

### Report Management

- Create new reports
- Browse reported issues
- View issue details
- Track report status

### Interactive Dashboard

- Overview of reported issues
- Active vs Resolved reports
- Community statistics
- Personal contributions

### Community Engagement

- Browse nearby issues
- Verify existing reports
- Leaderboard for contributors

### Authentication

- Google Sign-In
- Email & Password Authentication

---

## How It Works

```text
Capture Issue
      │
      ▼
Upload Image + Location
      │
      ▼
Google Gemini Analysis
      │
      ├── Detect Issue Type
      ├── Generate Description
      ├── Estimate Severity
      ├── Recommend Department
      └── Assign Priority
      │
      ▼
Review Report
      │
      ▼
Submit
      │
      ▼
Track Resolution
```

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

### Backend

- Firebase Authentication
- Cloud Firestore
- Firebase Storage

### AI

- Google Gemini API

### Maps

- Google Maps API

### Deployment

- Vercel

---

<!-- ## Project Structure

```
community-hero/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── hooks/
│   ├── services/
│   ├── firebase/
│   ├── utils/
│   ├── lib/
│   ├── App.jsx
│   └── main.jsx
│
├── docs/
├── .env.example
├── package.json
└── README.md
```

--->

## AI Workflow

1. User uploads an image.
2. Gemini analyzes the image.
3. The issue is categorized.
4. Severity is estimated.
5. A structured description is generated.
6. The responsible department is suggested.
7. The report is stored in Firestore.
8. Users and authorities can track its progress.

---

## Supported Issue Types

- Road Damage
- Potholes
- Garbage Accumulation
- Water Leakage
- Broken Streetlights
- Drainage Problems
- Illegal Dumping
- Public Property Damage

---

<!--## Environment Variables

Create a `.env` file.

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

VITE_GEMINI_API_KEY=

VITE_GOOGLE_MAPS_API_KEY=
```

--->

## Installation

Clone the repository

```bash
git clone https://github.com/username/community-hero.git
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## Roadmap

- [x] Authentication
- [x] Issue Reporting
- [x] Gemini Integration
- [x] Dashboard
- [x] Community Leaderboard
- [ ] Duplicate Issue Detection
- [ ] Push Notifications
- [ ] Voice-Based Reporting
- [ ] Offline Support
- [ ] Multilingual Interface

---

## Contributing

Contributions, suggestions, and feature requests are welcome. Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.

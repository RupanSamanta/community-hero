import Home from "@/components/home/Home"
import AuthPage from "@/components/auth/Auth"
import { Route, Routes, Navigate } from "react-router-dom"
import NotFoundPage from "./components/layout/NotFoundPage"
import IssuesPage from "./components/issues/IssuesPage"
import Dashboard from "./components/dashboard/Dashboard"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/issues" element={<IssuesPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
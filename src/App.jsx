import { Route, Routes, Navigate } from "react-router-dom"
import Home from "@/components/home/Home"
import AuthPage from "@/components/auth/Auth"
import NotFoundPage from "./components/layout/NotFoundPage"
import IssuesPage from "./components/issues/IssuesPage"
import Dashboard from "./components/dashboard/Dashboard"
import Leaderboard from "./components/leaderboard/Leaderboard"
import ReportIssue from "./components/report/ReportIssue"
import { Toaster } from "@/components/ui/sonner"
import Header from "./components/layout/Header"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App

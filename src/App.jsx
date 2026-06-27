import Home from "@/components/home/Home"
import AuthPage from "@/components/auth/Auth"
import { Route, Routes, Navigate } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
    </Routes>
  )
}

export default App
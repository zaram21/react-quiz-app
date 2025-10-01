import {Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"

function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </div>
  )
}

export default App
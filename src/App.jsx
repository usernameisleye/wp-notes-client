import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import Blog from "./pages/Blog"

function App() {
  return (
    <Router>
      <div className="App dark">
        <Sidebar />

        <Routes>
          <Route 
            path="/"
            element={<Blog />}
          />

        </Routes>

      </div>
    </Router>
  )
}

export default App

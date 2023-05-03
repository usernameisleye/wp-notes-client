import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Components & Pages
import Sidebar from "./components/Sidebar/Sidebar"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CreateAvatar from "./pages/CreateAvatar"

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

          <Route 
            path="/contact"
            element={<Contact />}
          />

          {/* Auth */}  
          <Route 
            path="/signin"
            element={<SignIn />}
          />

          <Route 
            path="/signup"
            element={<SignUp />}
          />

          <Route 
            path="/signup/avatar"
            element={<CreateAvatar />}
          />

        </Routes>
      </div>
    </Router>
  )
}

export default App

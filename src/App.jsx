import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Components & Pages
import Sidebar from "./components/Sidebar/Sidebar"
import Blogs from "./pages/Blogs"
import Details from "./pages/Details"
import Contact from "./pages/Contact"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CreateAvatar from "./pages/CreateAvatar"

import { useThemeContext } from "./hooks/useThemeContext"
import MobileNav from "./components/MobileNav/MobileNav"
import Footer from "./components/Footer/Footer"

function App() {
  // Theme Context
  const { theme } = useThemeContext();

  return (
    <Router>
      <div className={`App ${theme ? "light" : "dark"}`}>
        <Sidebar />

        <main>
          <MobileNav />

          <Routes>
            <Route 
              path="/"
              element={<Blogs />}
            />

            <Route 
              path="/details"
              element={<Details />}
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
              path="/avatar"
              element={<CreateAvatar />}
            />

          </Routes>

          <Footer />
        </main>
      </div>
    </Router>
  )
}

export default App

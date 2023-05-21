import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom"
// Components 
import Sidebar from "./components/Sidebar/Sidebar"
import MobileNav from "./components/MobileNav/MobileNav"
import Footer from "./components/Footer/Footer"

// Pages
import Blogs from "./pages/Blogs"
import Details from "./pages/Details"
import Contact from "./pages/Contact"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CreateAvatar from "./pages/CreateAvatar"

// Context
import { useThemeContext } from "./context/ThemeContext"
import { useAuthContext } from "./context/AuthContext"

const PrivateRoutes = () => {
  const { user } = useAuthContext();
  return(
    user ? <Outlet /> : <Navigate to="/signin"/>
  );
};

const AuthRoutes = () => {
  const { user } = useAuthContext();
  return(
    !user ? <Outlet /> : <Navigate to="/"/>
  );
};

function App() {
  const { theme } = useThemeContext();

  return (
    <Router>
      <div className={`App ${theme ? "light" : "dark"}`}>
        <Sidebar />

        <main>
          <MobileNav />

          <Routes>
            {/* Private */}
            <Route element={<PrivateRoutes />}>
              <Route 
                path="/"
                element={<Blogs />}
              />

              <Route 
                path="/details/:id"
                element={<Details />}
              />

              <Route 
                path="/contact"
                element={<Contact />}
              />
            </Route>

            {/* Auth */}  
            <Route element={<AuthRoutes />}>
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
            </Route>
          </Routes>

          <Footer />
        </main>
      </div>
    </Router>
  )
}

export default App

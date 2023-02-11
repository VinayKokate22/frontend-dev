import "./App.css";
import Booking from "./pages/Booking";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Contact from "./components/main/contact_us/Contact";
import Bookingfinal from "./pages/Bookingfinal";
import Signup from "./pages/Signup";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Landing />
              </div>
            }
          />
          <Route
            path="/booking"
            element={
              <div>
                <Booking />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <Contact />
              </div>
            }
          />
          <Route
            path="/booking/location"
            element={
              <div>
                <Bookingfinal />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div>
                <Signup />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

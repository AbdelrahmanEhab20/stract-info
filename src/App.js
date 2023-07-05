// import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import Starter from "./components/starter/Starter";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
// import Privacy from "./pages/privacy/Privacy";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/PrivacyPolicy" element={<Privacy />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Signup from "./pages/SignupPage";
import AdminPage1 from "./pages/AdminPage1";
import AdminPage2 from "./pages/AdminPage2";
import AdminPage3 from './pages/AdminPage3';
import ContactPage from "./pages/ContactPage";
import CreateOrder from "./pages/CreateOrder";
import CancelOrder from "./pages/CancelOrder";
import DeliveryDetails from "./pages/DeliveryDetails";
import Faqs from "./pages/Faqs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import OrderDetails from "./pages/OrderDetails";
import ServicePage from "./pages/ServicePage";
import TrackOrder from "./pages/TrackOrder";
import UpdateOrder from "./pages/UpdateOrder";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>

      <Navbar />
      
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/faqs" element={<Faqs />} />        
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/admin-page1" element={<AdminPage1 />} />
        <Route path="/admin-page2" element={<AdminPage2 />} />
        <Route path="/admin-page3" element={<AdminPage3 />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/cancel-order" element={<CancelOrder />} />
        <Route path="/delivery-details" element={<DeliveryDetails />} />
        <Route path="/update-order" element={<UpdateOrder />} />
        <Route path="/login" element={<Login />} />       
      </Routes>

      <Footer />
    </>
  );
};

export default App;

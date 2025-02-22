import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Homepage";
import Navbar from "./components/common/Navbar";
import Themes from "./pages/Themes/Themes";
import Footer from "./components/common/Footer";
import Popup from "./components/common/Popup";

import Thirdpage from "./pages/ThirdPage/ThirdPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
//Styles
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Tripdetailspage from "./pages/Tripdetails/Tripdetailspage";
import NotFoundPage from './pages/NotFoundPage'
import Faq from "./pages/Faq/Faq";
import PaymentPolicies from "./pages/Paymentpolicy/PaymentPolicies";
import VideoScroller from "./pages/Video/VideoScroller";

function App() {
  const isVideoPage = location.pathname === "/video"; // Check if we are on the /video page
  return (
    
    <div className="App">
  {/* Hide Navbar only if not on /video */}
  {!isVideoPage && <Navbar />}
      {/* <Popup /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />   
        <Route path="/faqs" element={<Faq/>} />   
        <Route path="/:location" element={<Tripdetailspage />} />
        <Route path="/tripdetails" element={<Thirdpage/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/terms-conditions" element={<PrivacyPolicyPage title="Terms & Conditions" />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage title="Privacy Policy" />} />
        <Route path="/cancellation-policy" element={<PrivacyPolicyPage title="Cancellation Policy" />} />
        <Route path="/payment" element={<PaymentPolicies />} />   
        <Route path="/video" element={<VideoScroller />} />   
        <Route path="/themes" element={<Themes />} /> 
      </Routes>
         {/* Hide Footer only if not on /video */}
         {!isVideoPage && <Footer />}
    </div>
  );
}

export default App;

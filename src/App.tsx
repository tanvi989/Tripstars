import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Homepage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Popup from "./components/common/Popup";
import Thirdpage from "./pages/ThirdPage/ThirdPage";

//Styles
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Tripdetailspage from "./pages/Tripdetails/Tripdetailspage";
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Popup />
      <Routes>
        <Route path="/" element={<HomePage />} />   
        <Route path="/:location" element={<Tripdetailspage />} />
        <Route path="/tripdetails" element={<Thirdpage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Homepage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

//Styles
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

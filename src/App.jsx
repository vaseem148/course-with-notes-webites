import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Index";
import About from "./pages/About";
import Coursedetails from "./pages/Coursedetails";
import SiteFooter from './components/SiteFooter'
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import StateBoardNotes from "./pages/StateBoardNotes";
import MainPage from "./pages/MainPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/notes" element={<StateBoardNotes />} />
          <Route path="/" element={<MainPage />} />
          <Route path="course" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Coursedetails />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<PaymentSuccess />} />
          
        </Routes>
        <SiteFooter />
      </BrowserRouter>
    </>
  );
}

export default App;

// Routing
import { Routes, Route } from "react-router-dom";
// Styles
import "bootstrap/dist/css/bootstrap.css";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Pages
import Home from "./pages/Home/Home";
import BestSellers from "./pages/BestSellers/BestSellers";
import Collections from "./pages/Collections/Collections";
import Login from "./pages/Login/Login";
import New from "./pages/New/New";
import Order from "./pages/Order/Order";
import PreOrders from "./pages/PreOrders/PreOrders";
import Sale from "./pages/Sale/Sale";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<New />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pre-orders" element={<PreOrders />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

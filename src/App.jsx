import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Plants from './components/plants';
import Pots from './components/pots';
import GardenSupplies from './components/gardenSupplies';
import Featured from './components/featured.jsx';
import Guides from './components/guides';
import GuideDetail from './components/guideDetail.jsx';
import ProductDetail from './components/productDetail.jsx';
import ScrollToTop from './components/scrollToTop';
import AuthPage from './components/AuthPage.jsx';
import  CartPage  from './components/CartPage';
import { CartProvider } from 'react-use-cart';
import CheckOut from './components/checkOut';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <CartProvider> 
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/gardenSupplies" element={<GardenSupplies />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:guideId" element={<GuideDetail />} />
          <Route path="/product/:category/:productName" element={<ProductDetail />} />
          <Route path="/AuthPage" element={<AuthPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/checkOut" element={<CheckOut />} />

        </Routes>

     <ToastContainer position="top-center" autoClose={3000} />

      </Router>
    </CartProvider>
  );
}

export default App;

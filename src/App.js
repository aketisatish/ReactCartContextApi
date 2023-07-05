import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/shopes/Shop.jsx';
import { Cart } from './pages/cart/Cart.jsx';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path ="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

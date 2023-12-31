import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from "./components/Checkout/Checkout";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Presentation />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos Por categoria'} />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;

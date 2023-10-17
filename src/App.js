import {useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';


function App() {
const [isCartOpen, setClose] = useState(false);

const closeCartHandler = (event) => {
  setClose(false);
};

const showCartHandler = (event) => {
  setClose(true);
}

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose = {closeCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
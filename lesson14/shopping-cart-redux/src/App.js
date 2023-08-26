import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import ListProduct from './components/ListProduct';
import Cart from './components/Cart';

function App() {
  return (
   <>
  <title>Training React App</title>
  <div className="container">
    {/* TITLE : START */}
    <Title />
    {/* TITLE : END */}
    <div className="row">
      {/* LIST PRODUCT : START */}
     <ListProduct />
      {/* LIST PRODUCT : END */}
      {/* CART : START */}
      <Cart />
      {/* CART : END */}
    </div>
  </div>
</>

  );
}

export default App;

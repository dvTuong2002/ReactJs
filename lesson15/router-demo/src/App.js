import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Categories from './components/Categories';
import Header from './components/Header';
import About from './components/About';
import Program from './components/Program';
import Kid from './components/Kid';
import Network from './components/Network';
import Menu from './components/Menu';
import Notfound from './components/Notfound';

function App() {
  return (
    <div className="container border">
      <BrowserRouter>
      <Header />
      <Menu />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/categories' element={<Categories></Categories>}>
              <Route path='program' element={<Program></Program>}></Route>
              <Route path='kid' element={<Kid></Kid>}></Route>
              <Route path='network' element={<Network></Network>}></Route>
          </Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

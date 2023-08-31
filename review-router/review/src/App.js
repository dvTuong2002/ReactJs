import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './component/Header';
import Menu from './component/Menu';
import BedRoom from './component/BedRoom';
import Kitchen from './component/Kitchen';
import WorkingRoom from './component/WorkingRoom';
import LivingRoom from './component/LivingRoom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
        <Menu />
        <Routes>
          <Route path='/BedRoom' element={<BedRoom></BedRoom>}></Route>
          <Route path='/Kitchen' element={<Kitchen></Kitchen>}></Route>
          <Route path='/WorkingRoom' element={<WorkingRoom></WorkingRoom>}></Route>
          <Route path='/LivingRoom' element={<LivingRoom></LivingRoom>}></Route>
                  <Route path='WorkingTable' element={<WorkingRoom></WorkingRoom>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
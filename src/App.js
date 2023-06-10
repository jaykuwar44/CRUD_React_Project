import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Create from './Create';
import Read from './Read';
import Update from './Update';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/read/:id' element={<Read />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;

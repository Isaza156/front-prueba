import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/restaurants' element={<Restaurants />}/>
          <Route path='*' element={ <Navigate  to="/" /> } />           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

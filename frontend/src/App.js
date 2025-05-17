
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './pages/Login.js';
import Signup from './pages/SignUp.js';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

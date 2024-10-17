import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Help from './Pages/Help';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TnC from './Pages/TnC';
function App() {
  return (
    <Router>
      <div >
        <Routes>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path='/tnc' element={<TnC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

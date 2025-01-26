import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Help from './Pages/Help';
// import Notification from './Components/Notifications';
// import TaskManager from './Components/TaskComponent';
import { ToastContainer, toast } from 'react-toastify';
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
          {/* <Route path='/noti' element={<Notification />} /> */}
          {/* <Route path='/taskmanager' element={<TaskManager />} /> */}
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;

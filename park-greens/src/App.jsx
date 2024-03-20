import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import './App.css'
import Test from './data/Test'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer /> {/* Place the ToastContainer outside Routes */}
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path='/Test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

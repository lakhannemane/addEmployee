import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import Header from './component/Header';
import View from './pages/View';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position='top-center' size="20px"/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<AddEdit/>} />
      <Route path='/update/:id' element={<AddEdit/>} />
      <Route path='/view/:id' element={<View/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

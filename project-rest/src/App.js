import './App.css';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import DetailProduct from './components/Detail/DetailProduct';
import EditProduct from './components/EditProduct/EditProduct';
import { ListProduct } from './components';
import Landing from './components/Landing/Landing';
import Protected from './components/Protected/Protected';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<ListProduct />} />
        <Route path='/product/:id' element={<DetailProduct />} />
        <Route path='/add' element={
          <Protected>
            <AddProduct />
          </Protected>} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

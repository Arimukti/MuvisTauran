import './App.css';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import NavbarList from './components/Navbar';
import Detail from './pages/Detail';
import EditDetail from './pages/EditProduct';

function App() {
  return (
    <div className="App">
      <NavbarList />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Home />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditDetail />} />
      </Routes>
    </div>
  );
}

export default App;

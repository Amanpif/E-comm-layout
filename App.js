// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from "./components/Signup";
import Privatecomponent from './components/Privatecomponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Productlist from './components/Productlist';
import Update from './components/Update';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<Privatecomponent />}>
        <Route path="/" element={<Productlist />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/logout" element={<h1> logout</h1>} />
        </Route>
        <Route path="/profile" element={<Profile />} />

        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>

      <Footer />
      
    </div>
  );
}

export default App;

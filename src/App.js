// import logo from './logo.svg';
import './App.css';
//import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx"
import AllRoutes from './Routes/AllRoutes';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/products" element={<h1>Products</h1>}/>
        <Route path="/products/:id" element={<h1>Products Details</h1>}/>
      </Routes> */}
      <AllRoutes/>
    </div>
  );
}

 

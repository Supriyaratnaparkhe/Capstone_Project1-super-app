import './App.css';
import Register from './pages/Register';
import Category from './pages/Category';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowsEntertainment from './pages/BrowsEntertainment';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<BrowsEntertainment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

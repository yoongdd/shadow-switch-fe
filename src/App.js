// import logo from './logo.svg';
// import './styled/App.css';
import React from 'react';
import AppHeader from './components/AppHeader';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notice from './pages/Notice';
import Product from './pages/Product';
import Price from './pages/Price';
import Faq from './pages/Faq';
import AppFooter from './components/AppFooter';
import Login from './pages/Login';

function App() {
  
  // const [message, setMessage] = useState([]);
  // useEffect(() => {
  //   fetch("/hello")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     setMessage(data);
  //   });
  // }, []);
  
  // console.log(message);

  return (
    <div className="App">
      <header className="App-header">
        <AppHeader></AppHeader>
      </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/product" element={<Product />} />
          <Route path="/price" element={<Price />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/:page/admin" element={<Login />} />
          <Route path="/:page/admin" element={<Login />} />
        </Routes>
      <footer>
        <AppFooter></AppFooter>
      </footer>
    </div>
  );
}

export default App;

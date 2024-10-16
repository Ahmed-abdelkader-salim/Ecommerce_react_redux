import { Routes, Route } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ScaleLoader } from 'react-spinners';
import Header from './common/Header';
import TopHeader from './common/TopHeader';
import MidHeading from './common/MidHeading';
import Footer from './common/Footer';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import NotFoundPage from './pages/NotFoundPage';
import { ScaleLoader } from 'react-spinners'
import { useEffect, useState } from 'react';

import {useLocation} from 'react-router-dom'
const App = () => {

  const [loading , setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
  const timer =   setTimeout(() => {
    setLoading(false);
  }, 300);

  return () => clearTimeout(timer)
}, [location]);



  return (

    <>
    
    {loading ? (
      <div className="spinner-container">
        <ScaleLoader color="#9b4040" height={100} loading={loading} margin={10}></ScaleLoader>

      </div>
    ) : (
      
      <>

    <TopHeader/>
    <MidHeading />
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<BlogPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
    </Routes>

    <Footer/>
    
    </>
    
  )}
    
    
    </>

    
  )

}
export default App

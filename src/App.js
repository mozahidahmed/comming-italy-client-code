
import { Routes,Route } from 'react-router-dom/dist';

import Home from './component/Home/Home';
import Comment from './component/Home/Place/Comment/Comment';

import Footer from './component/Shared/Footer';
import Navbar from './component/Shared/Navbar';
import Login from './component/Signup/Login';
import RequireAuth from './component/Signup/RequireAuth';
import Signup from './component/Signup/Signup';


function App() {
  return (
    <div className="mx-6">
      <Navbar></Navbar>
     
     
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={
      <Home></Home>
    
    }></Route>
      <Route path='/register' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/achi' element={<RequireAuth>ghjg</RequireAuth>}></Route>
      <Route path='comment/:id' element={<Comment></Comment>}></Route>
    
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;

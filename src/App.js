
import { Routes,Route } from 'react-router-dom/dist';

import Home from './component/Home/Home';

import Footer from './component/Shared/Footer';
import Navbar from './component/Shared/Navbar';


function App() {
  return (
    <div className="mx-6">
      <Navbar></Navbar>
     
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
    
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;

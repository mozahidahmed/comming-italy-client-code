
import { Routes,Route } from 'react-router-dom/dist';
import Dashboard from './component/Dashboard/Dashboard';
import MyHotelSitBooking from './component/Dashboard/MyHotelSitBooking';
import Profile from './component/Dashboard/Profile';
import Welcome from './component/Dashboard/Welcome';
import Home from './component/Home/Home';
import Booking from './component/Home/Hotel/Booking';
import HotelDetails from './component/Home/Hotel/HotelDetails';
import Comment from './component/Home/Place/Comment/Comment';
import FoodOrder from './component/Home/Restaurant/FoodOrder';
import Footer from './component/Shared/Footer';
import Navbar from './component/Shared/Navbar';
import Login from './component/Signup/Login';
import RequireAuth from './component/Signup/RequireAuth';
import Signup from './component/Signup/Signup';


function App() {
  return (
    <div className="px-6">
      <Navbar></Navbar>
     
     
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={ <Home></Home> }></Route>
      <Route path='/register' element={<Signup></Signup>}></Route>
      <Route path='/myprofile' element={<Profile></Profile>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='comment/:id' element={<Comment></Comment>}></Route>
      <Route path='HotelDetails/:id' element={<RequireAuth><HotelDetails></HotelDetails></RequireAuth>}></Route>
      <Route path='booking/:id' element={<RequireAuth><Booking></Booking></RequireAuth>}></Route>
      <Route path='foodorder/:id' element={<RequireAuth><FoodOrder/></RequireAuth>}></Route>





      <Route path='dashboard' element={<Dashboard></Dashboard>}>

           <Route index element={<Welcome></Welcome>}></Route>
           <Route path="myhotelsitbooking" element={<MyHotelSitBooking></MyHotelSitBooking>}></Route>




       </Route>




    
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;

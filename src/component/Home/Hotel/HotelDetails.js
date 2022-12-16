import React, { useState,useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Beds from './Beds';


const HotelDetails = () => {
 
    const {id} = useParams();
  



   

    const { data: book, isLoading, refetch } = useQuery('book', () => fetch(`https://comming-italy.onrender.com/hotel/${id}`, {
      method: 'GET',
      headers: {
          'content-type': 'application/json'
      }
  }).then(res => res.json()))

  if (isLoading) {
      return <Loading></Loading>

  }





    return (
        <div>
<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-2  items-center'>

<div>
<div className="carousel w-full h-[350px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={book.img} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={book.img} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={book.img} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={book.img} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>

  <div className="">
  <h1 className="mb-2 text-2xl font-bold">Our Services</h1>

  <div className="flex items-center mt-2">
  <FaHandPointRight className='text-2xl  font-bold text-primary'></FaHandPointRight>
  <p className='px-1'>Bip Room</p>
  </div>
  <div className="flex items-center mt-2">
  <FaHandPointRight className='text-2xl  font-bold text-primary'></FaHandPointRight>
  <p className='px-1'>Bip Bed</p>
  </div>
  <div className="flex items-center mt-2">
  <FaHandPointRight className='text-2xl  font-bold text-primary'></FaHandPointRight>
  <p className='px-1'> Belconi</p>
  </div>
  <div className="flex items-center mt-2">
  <FaHandPointRight className='text-2xl  font-bold text-primary'></FaHandPointRight>
  <p className='px-1'>Swaiming Pool</p>
  </div>
  <div className="flex items-center mt-2">
  <FaHandPointRight className='text-2xl  font-bold text-primary'></FaHandPointRight>
  <p className='px-1'>Alltime Develery man</p>
  
  </div>
  <p className=" mt-2 font-bold"><span className='text-primary'>$100</span> one day</p>
  

  
  <Link to={`/booking/${book._id}`}>
  <button   className="px-6 py-2 bg-primary mt-4 font-bold">book now</button>
 </Link>


  </div>

</div>





<Beds></Beds>



{/* .. */}


{/*  */}


        </div>
    );
};

export default HotelDetails;
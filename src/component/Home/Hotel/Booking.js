import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';


const Booking = () => {
    const {id} = useParams();
    const [book, setBook] = useState({});



    useEffect(() => {
        fetch(`https://comming-italy.onrender.com/hotel/${id}`)
            .then(res => res.json()).then(data => setBook(data))
    }, [])





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
  

  

  <button className="px-6 py-2 bg-primary mt-4">book now</button>
 


  </div>

</div>




{/* .. */}
<h1 className="text-3xl text-center mt-6 text-primary font-bold">Book <span className="text-black">Now</span></h1>




<div className=' flex justify-center items-center overflow-auto'>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between'
       
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='firstName'>
            First Name
          </label>
          <input type="text"  name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='lastName'>
            Last Name
          </label>
        
            <input type="text"   name='lastName' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='email'>
            Email
          </label>
         
             <input type="text"   name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Gender</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='male'
                name='gender'
                value='male'
           
               
              />
            
              <label className='ml-2 text-lg' for='male'>
                Male
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='female'
              
               
              />
              <label className='ml-2 text-lg' for='female'>
                Female
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='other'
                name='gender'
                value='other'
               
              />
              <label className='ml-2 text-lg' for='other'>
                Other
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' for='education' >
         Country
          </label>
          <select
            name='education'
            id='education'
            className="input input-bordered w-full max-w-xs"
           
          
          >
            <option value='SSC'>Bangladesh</option>
            <option value='HSC'>India</option>
            <option value='underGrad'>italy</option>
           
          </select>
        </div>
       
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' for='feedback'>
            Feedback
          </label>
          <textarea
            name='feedback'
            id='feedback'
            cols='30'
            rows='4' 
            className="input input-bordered w-full max-w-xs"
          ></textarea>
        </div>

        <div className='flex justify-between items-center w-full'>
          <div className='flex  w-full max-w-xs'>
            <input
              className='mr-3'
              type='checkbox'
              name='term'
              id='terms'
              
            />
            <label for='terms'>I agree to terms and conditions</label>
          </div>
          <button
            className='px-4 py-3 grid justify-center bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
           
          >
            Submit
          </button>
        </div>
      </form>
    </div>

{/*  */}


        </div>
    );
};

export default Booking;
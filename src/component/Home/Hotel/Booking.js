import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';



const Booking = () => {
   
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
         

               
              
              



         <h1 className="text-3xl text-center mt-6 text-primary font-bold">Submit your's <span className="text-black">Details</span></h1>
<div className=' flex justify-center  items-center overflow-auto'>

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
         Your's Country
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
          <label className='mb-3' for='room' >
       bed
          </label>
          <select
            name='room'
            id='room'
            className="input input-bordered w-full max-w-xs"
           
          
          >
            <option value='SSC'>1 bed</option>
            <option value='HSC'>2 bed</option>
           
           
          </select>

        
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' for='room' >
       Please
          </label>
          <select
            name='room'
            id='room'
            className="input input-bordered w-full max-w-xs"
           
          
          >
            <option value='SSC'>1 flowr</option>
            <option value='SSC'>2 flowr</option>
            <option value='SSC'>3 flowr</option>
            <option value='SSC'>4 flowr</option>
            <option value='SSC'>5 flowr</option>
            <option value='SSC'>6 flowr</option>
            <option value='SSC'>7 flowr</option>
            <option value='SSC'>8 flowr</option>
            <option value='SSC'>9 flowr</option>
            <option value='SSC'>10 flowr</option>
        
           
           
          </select>

        
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
        </div>
    );
};

export default Booking;
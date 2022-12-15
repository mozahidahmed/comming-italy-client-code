import React from 'react';
import image1 from '../../assert/italy1.jpg'




const HotelHero = () => {
    
    return (
       
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-2  items-center'>

          <div>
          <img src={image1} class="w-50 shadow-5xl" />
          </div>

            <div className="">
            <h1 class="mb-5 text-2xl font-bold">Welcome To Night Hotel</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel minus corrupti accusamus! Iusto, vel vitae tempora consequuntur ab sed, corrupti incidunt aliquam nisi est iure ipsa eum commodi veritatis ea ipsam quia delectus rem perspiciatis culpa voluptas dolorum. Officia, eum 
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel minus corrupti accusamus! Iusto, vel vitae tempora consequuntur ab sed, corrupti incidunt aliquam nisi est iure ipsa eum commodi veritatis ea ipsam quia delectus rem perspiciatis culpa voluptas dolorum. Officia, eum 


        
    </p>
         
            </div>
        
        </div>


      
            
    );
};

export default HotelHero;
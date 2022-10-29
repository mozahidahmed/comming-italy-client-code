import React from 'react';
import image1 from '../../assert/italy1.jpg'








const Restaurant = ({ service }) => {
    const { _id, name,description, price, availableQuantity, minimumOrderQuantity } = service;



    return (
        <div>
            <div className="mt-6 lg:max-w-lg  shadow-xl">
                <figure className="w-17"> 
                        <img  src={image1} alt="NetWorkError"/>
                </figure>
                <div className="p-3 grid justify-center">
                   
                   
                    <h1 className="text-2xl text-center text-primary font-bold">ORDER NOW</h1>

                </div>

               
            
            
         
               

            </div>
        </div>
    );
};

export default Restaurant;
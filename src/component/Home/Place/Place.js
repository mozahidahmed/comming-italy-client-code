import React from 'react';










const Place = ({ service }) => {
    const { name,img} = service;



    return (
        <div>
           
            <div className=" lg:max-w-lg  shadow-xl mt-6">
                <figure className="w-34"> 
                        <img  src={img} alt="NetWorkError"/>
                </figure>
                <div className="p-3 grid justify-center">
                   
                   
                    <h1 className="text-2xl text-center text-primary font-bold">{name}</h1>

                </div>

               
            
            
         
               

            </div>
        </div>
    );
};

export default Place;
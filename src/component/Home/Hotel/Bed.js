import React from 'react';

const Bed = ({bed}) => {
    const { _id,img,name} = bed;

    return (
        <div>
        <div className="mt-2 lg:max-w-lg  shadow-xl">
            <figure className="w-17"> 
                    <img  src={img} alt="NetWorkError"/>
            </figure>
          

           
        
        
     
           

        </div>
    </div>
    );
};

export default Bed;
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assert/italy1.jpg'








const Restaurant = ({ service }) => {
    const { _id,img } = service;



    return (
        <div>
           <div className="card w-84 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes"  className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <p className='font-bold'>$210</p>
    <Link to={`/foodorder/${_id}`}>
    <div className="card-actions">
      <p className='rs-button-style'>Order Now</p>
    </div>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Restaurant;
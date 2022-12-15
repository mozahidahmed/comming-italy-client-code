import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';


const Booking = () => {
    const {id} = useParams();
    const [book, setBook] = useState({});



    useEffect(() => {
        fetch(`http://localhost:5000/hotel/${id}`)
            .then(res => res.json()).then(data => setBook(data))
    }, [])





    return (
        <div>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-2  items-center'>

<div>
<img src={book.img} alt="sgdfgdfg"></img>
</div>

  <div className="">
  <h1 class="mb-5 text-2xl font-bold">Welcome To Night Hotel</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel minus corrupti accusamus! Iusto, vel vitae tempora consequuntur ab sed, corrupti incidunt aliquam nisi est iure ipsa eum commodi veritatis ea ipsam quia delectus rem perspiciatis culpa voluptas dolorum. Officia, eum 
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel minus corrupti accusamus! Iusto, vel vitae tempora consequuntur ab sed, corrupti incidunt aliquam nisi est iure ipsa eum commodi veritatis ea ipsam quia delectus rem perspiciatis culpa voluptas dolorum. Officia, eum 



</p>

  </div>

</div>
        </div>
    );
};

export default Booking;
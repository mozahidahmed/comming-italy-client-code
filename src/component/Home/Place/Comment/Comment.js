import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { AiOutlineSend } from "react-icons/ai";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../Shared/Loading';
import { useQuery } from 'react-query';
import { axios } from 'axios';
import SeeAllComments from './SeeAllComments';

const Comment = () => {
    
    const {id } = useParams();
    const [user] = useAuthState(auth)
    const [places, setPlaces] = useState([]);
    const{name}=places
  


   
  //    single fetch with _id.............



//   useEffect(() => {
//     fetch(`https://comming-italy.onrender.com/places/${id}`)
//         .then(res => res.json()).then(data => setPlaces(data))
      
// }, [])

// console.log(name)




  useEffect(() => {

    fetch(`https://comming-italy.onrender.com/places/${id}`)
    .then(res => res.json()).then(data => setPlaces(data))
    
}, [])

console.log(name)

  

    
    // .....
    const handleComment = event => {
        event.preventDefault();
        const comments = {
            name:event.target.name.value,
            email: user.email,
            comment:event.target.writeComment.value,
        }
           fetch('https://comming-italy.onrender.com/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
             
            }) }


    





        const { data: comments, isLoading, refetch } = useQuery('comments', () => fetch(`https://comming-italy.onrender.com/comments?name=${name}`, {
        method: 'GET',
        
        headers: {
            'content-type': 'application/json'
        }   
    }).then(res => res.json()
    ))

  if(isLoading){
    return <Loading/>
  }


  

    
    return (
        <div className='mt-2'>

            {/*  */}
            <img className='h-[400px] w-full' src={places.img} alt="maybe net issu/ loading issu" />
            <h1 className="text-2xl  mb-6 text-primary font-bold">{places.name}</h1>
            {/*  */}


            {/*  */}
            <div className="">
              
                   
                    
                   

                   <form onSubmit={handleComment}>
                   <div className="flex justify-start items-center">
                   <input name="email" type="text"  readOnly   value={user?.email} class="style-profile" />

                <input name="name" type="text"   readOnly  value={places.name} class="w-[0px]" />

                 <input name="writeComment" type="text" placeholder="Write comment.............." class="input input-bordered input-success w-full max-w-xs mx-2 style-comment-box" required/>
                 <button class="text-4xl mx-1" type="submit"><AiOutlineSend /></button>
                 </div>
                  </form>


                
            </div>
            {/*  */}



<div className="">
{comments.map((comment =>
 
 <SeeAllComments key={comment._id} allComment={comment}></SeeAllComments>

))}

</div>



        </div>
    );
};

export default Comment;
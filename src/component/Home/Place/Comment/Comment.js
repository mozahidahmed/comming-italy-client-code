import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { AiOutlineSend } from "react-icons/ai";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../Shared/Loading';
import { useQuery } from 'react-query';

const Comment = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    const [comment, setComment] = useState({});
    
    console.log(user)




    const handleComment = event => {
        event.preventDefault();

        const comments = {
            email: user.email,
            comment:event.target.writeComment.value,
        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    
                    console.log('Your Order success')
                }
            }) }












//    single fetch
    useEffect(() => {
        fetch(`http://localhost:5000/places/${id}`)
            .then(res => res.json()).then(data => setComment(data))
    }, [])



        const { data: comments, isLoading, refetch } = useQuery('comments', () => fetch('http://localhost:5000/comments', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>

    }


    return (
        <div className='mt-2'>

            {/*  */}
            <img className='h-[400px] w-full' src={comment.img} alt="maybe net issu/ loading issu" />
            <h1 className="text-2xl  mb-6 text-primary font-bold">{comment.name}</h1>
            {/*  */}


            {/*  */}
            <div className="">
              
                   
                    
                   

                   <form onSubmit={handleComment}>
                   <div className="flex justify-start items-center">
                   <input name="email" type="text"  readOnly   value={user?.email} class="style-profile" />

                 <input name="writeComment" type="text" placeholder="Write comment.............." class="input input-bordered input-success w-full max-w-xs mx-2 style-comment-box" required/>
                 <button class="text-4xl mx-1" type="submit"><AiOutlineSend /></button>
                 </div>
                  </form>


                
            </div>
            {/*  */}


{comments.map((comment =>
 
 <h1>{comment.comment}</h1>

))}



        </div>
    );
};

export default Comment;
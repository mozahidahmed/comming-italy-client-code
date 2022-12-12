import React,{useState} from 'react';
import {AiOutlineLike} from "react-icons/ai";
import {BiComment} from "react-icons/bi";
import {RiShareForwardLine} from "react-icons/ri";
import { Link } from 'react-router-dom';







const Place = ({ place ,refetch}) => { 
    const [allLikes,setAllLikes]=useState({});
    const { _id,name,img,likes} = place;

    
 //.................................
 const handleLikes= () =>{
    const like={likes:likes+1};
    const url=`https://comming-italy.onrender.com/places/${_id}`;
              fetch(url,{
             method:'PUT',
             headers:{
                 'content-type':'application/json'
            },
             body:JSON.stringify(like),
 
              })
              .then(res=>res.json())
              .then(number=>{
                console.log(number)
                refetch()
                 setAllLikes(allLikes); 
             })

         }
 // //...............................
   




    return (
        <div>
           
            <div className=" lg:max-w-lg  shadow-xl mt-6">
                <figure className="w-34"> 
                        <img  src={img} alt="NetWorkError"/>
                </figure>
                <div className="p-3 grid ">
                    <h1 className="text-1xl  text-primary font-bold">{name}</h1>
                 
                

                 
                </div>
                <div className="flex justify-between px-6 py-1">
                   
                   
                 <div className='flex items-center text-2xl'> 
                  <button className=''  onClick={handleLikes}><AiOutlineLike/>  </button>
                   <span className='text-2xl'>{likes}</span> 
                  </div>

                  <Link to={`/comment/${_id}`}>
                 <div className='flex items-center text-2xl'>  <BiComment/> </div>
                 </Link>

                 <div className='flex items-center text-2xl'>  <RiShareForwardLine/> </div>

             
                    
                  
                   
                   
             
                 </div>
            </div>
           
        </div>
    );
};

export default Place;
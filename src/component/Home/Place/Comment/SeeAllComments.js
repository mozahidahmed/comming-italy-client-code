import React from 'react';


const SeeAllComments = ({allComment}) => {
  
    return (

        <div class="card mt-4  p-4  shadow-xl">

            <div className="">

                <div className="flex  items-center"><div class="avatar">
                    <div class="w-8 mx-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>

                    <div className="">{allComment.email}</div>


                </div>



                <div className="flex justify-between">
                    <div className="w-[650px] mt-3">{allComment.comment}</div>

                    <div className="flex ">
                        <div class="btn-group  lg:btn-group-horizontal">
                            <button class="btn btn-active">Delete</button>
                            <button class="btn">Update</button>
                            
                        </div>
                    </div>

                </div>







            </div>
        </div>

    );
};

export default SeeAllComments;
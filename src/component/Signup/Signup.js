import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const Signup = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
 
  //error check ............
  let signInError;
  if (error) {

    signInError = <p>{error?.message}</p>
  }

  //ON SUBMIT....
  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password, data.name);

  }


// goto location
  const navigate = useNavigate();
  if (user) {
    navigate('/achi');

  }




  return (
    <div className='flex justify-center items-center mt-16'>
        <div className="card w-96 bg-base-100 shadow-xl border">
    <div className="card-body">
 
      <h2 className="text-center text-2xl font-bold">Sign <span className='text-primary'>Up</span></h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="form-control w-full max-w-xs">
          
        <label class="label">
        <span class="label-text">Name</span>
        </label>
        <input type="text"
         placeholder="Write name" 
         class="input input-bordered w-full max-w-xs" 
         {...register("name", 
       
           {

          required:{
           value:true,
           message: 'name is required'

          },

        

          })} 
         />
        <label class="label">
        {errors.name?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
       
        </label>
        </div>
       
       
       
        <div class="form-control w-full max-w-xs">
          
        <label class="label">
        <span class="label-text">Email</span>
        </label>
        <input type="email"
         placeholder="Write email" 
         class="input input-bordered w-full max-w-xs" 
         {...register("email", 
       
           {

          required:{
           value:true,
           message: 'email is required'

          },

          pattern: {
           value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message:"Provide a valid email"
         }

          })} 
         />
        <label class="label">
        {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        </label>
        </div>
       


        <div class="form-control w-full max-w-xs">
          
        <label class="label">
        <span class="label-text">Password</span>
        </label>
        <input type="password"
         placeholder="Write password" 
         class="input input-bordered w-full max-w-xs" 
         {...register("password", {

          required:{ 
            value:true,
            message: 'password is required'

           },

          minLength: {
           value:6,
           message: 'Must Be a 6 Caracter'
          }

         })}
         />
        <label class="label">
        {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        </label>
        </div>



  {signInError}
  <input type="submit" className='btn  w-full max-w-xs' value="Sign Up"/>
  <p>Already Account..?<Link to="/login"><span className='text-primary'>......login</span></Link></p>

</form>

      {/* <div class="divider">OR</div>
      <button
       onClick={() =>signInWithGoogle()}
      class="btn btn-outline">Continue with Google</button> */}
    </div>
  </div>
  </div>
    );
};

  


export default Signup;
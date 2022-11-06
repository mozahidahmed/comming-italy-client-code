import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
const Login = () => {


  
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  // error check
  let signInError;
  if (error) {
    signInError = <p>{error?.message}</p>
  }

  // submit
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);

  }


  // go to location
  const navigate = useNavigate();
  if (user) {
    navigate('/achi');

  }


  return (
    <div className='flex justify-center items-center mt-16'>
        <div className="card w-96 bg-base-100 shadow-xl border">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Log <span className='text-primary'>in</span></h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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



      <p className="text-red-500">{signInError}</p>
      <p>Forget password ?</p>
      <input type="submit" className='btn mt-4 mb-1 w-full max-w-xs' value="Login"/>
      <p>New ?<Link to="/register"><span className='text-primary'>..CreateNew Acccotunt</span></Link></p>
     
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

export default Login;
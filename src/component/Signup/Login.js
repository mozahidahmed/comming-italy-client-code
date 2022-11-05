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
    <div className='grid justify-center  bg-primary p-6 mt-2'>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="display artboard bg-white phone-1">
            <div className='flex justify-center items-center mt-12'>
              <div className="w-96 bg-base-100 ">
                <div className="card-body">
                  <h1 className="text-3xl text-center  text-primary font-bold">Log <span className="text-black">In</span></h1>
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

                            required: {
                              value: true,
                              message: 'email is required'

                            },

                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: "Provide a valid email"
                            }

                          })}
                      />
                      <label class="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
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

                          required: {
                            value: true,
                            message: 'password is required'

                          },

                          minLength: {
                            value: 6,
                            message: 'Must Be a 6 Caracter'
                          }

                        })}
                      />
                      <label class="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                      </label>
                    </div>
                    <p className="text-red-500">{signInError}</p>
                    <input type="submit" className='btn  w-full max-w-xs' value="Login" />
                    <p>New to my company ?<Link to="/register"><span className='text-primary'>..Create New Account</span></Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
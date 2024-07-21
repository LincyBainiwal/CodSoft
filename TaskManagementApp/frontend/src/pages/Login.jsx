import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../assets/Illustration.jpg';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../redux/slices/api/authApiSlice';
import { toast } from 'sonner';
import { setCreadentials} from '../redux/slices/authSlice';
import Loading from '../components/Loader';

const Login = () => {
  const {user} = useSelector((state)=> state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const dispatch = useDispatch();
   const [login ,{isloading} ] = useLoginMutation();
  const submitHandler = async (data) => {
    try{
      const result = await login(data).unwrap();
      dispatch(setCreadentials(result));
      navigate("/");
    }catch(error){
        console.log(error);
        toast.error(error?.data?.message || error.message);
    }
    
  };

  const navigate = useNavigate();
  console.log(user); 
  useEffect(() => {
    user && navigate('/dashboard');
  }, [user]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-slate-100'>
      <div className='w-full md:w-auto flex gap-0 flex-col md:flex-row items-center justify-center'>
        {/* left side */}
        <div className='py-2 h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <img src={LoginPage} alt='' />
          </div>
        </div>

        {/* right side */}
        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-20 bg-white px-10 pt-16 pb-16 h-full'
          >
            <div>
              <p className='text-yellow-300 text-3xl font-bold text-center'>Welcome back</p>
            </div>

            <div className='flex flex-col gap-y-7'>
              <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-lg'
                register={register('email', {
                  required: 'Email is required',
                })}
                error={errors.email? errors.email.message : ''}
              />
              <div className='flex flex-col'>
                <Textbox
                  placeholder='your password'
                  type='password'
                  name='password'
                  label='Password'
                  className='w-full rounded-lg'
                  register={register('password', {
                    required: 'Password is required',
                  })}
                  error={errors.password? errors.password.message : ''}
                />
                <div className='flex justify-end'>
                  <span className='text-sm text-gray-500 hover:text-yellow-400 hover:underline cursor-pointer'>
                    Forget Password?
                  </span>
                </div>
              </div>

              {isloading ? <Loading/>:<Button
                type='submit'
                className='w-full rounded-lg bg-yellow-300 text-white py-2 px-4 hover'
                label='Submit'
              />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
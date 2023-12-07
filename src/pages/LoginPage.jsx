import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoadingModal from './LoadingModal';

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || {});
  const onSubmit = (data) => {
    setIsLoading(true); // Set loading state to true when the request is initiated
    const formData = {
      password: data.password,
      email: data.email,
    };
    if (data.password && data.email) {
      // console.log(JSON.stringify(formData));
      fetch('https://financetrack-app.onrender.com/api/v1/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers your server requires
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          // (!response.ok)

          // setLoginErrorMessage(data.message);
          console.log(response.status, response.statusText);
          setIsLoggedIn(false);
          // window.scrollTo(0, 0);
          return null;
        })
        .then((server_response) => {
          console.log('Success:', server_response.message);
          setIsLoggedIn(true);
          setUserData(server_response);
          alert('Login Successfull');
          // reset();
          navigate('/dashboard');
          // Handle the success response from the server
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle errors
        })
        .finally(() => {
          setIsLoading(false); // Set loading state to false when the request is completed
        });
    }
  };
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <div className={`homepage ${isLoading ? 'loading-overlay' : ''}`}>
      <section className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <h1 className="text-7xl font-semibold text-center text-blue-900 mb-10">FinTrack</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">
              E-mail
              <input
                className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                {...register('email', {
                  required: true,
                  validate: {
                    matchPattern: (v) =>
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) ||
                      'Must be a valid email address and should be in lowercase',
                  },
                })}
                type="email"
                placeholder="example@gmail.com"
                id="email"
              />
            </label>
            {errors.email?.message && <p className="text-red-400">{errors.email?.message}</p>}
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input
                className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
                {...register('password', {
                  required: true,
                  minLength: {
                    value: 5,
                    message: 'Minimum of 5 characters',
                  },
                })}
                type="password"
                placeholder="Password"
                id="password"
              />
            </label>
          </div>
          <p className="text-3xl font-bold underline">{errors.password?.message}</p>

          <button
            type="submit"
            className="px-4 py-1.5 my-5 rounded-md shadow-lg  bg-blue-700 font-medium text-gray-100 block transition duration-300 hover:scale-105 "
          >
            <span>Login</span>
          </button>
        </form>
        {isLoading && <LoadingModal />}
        <p className="mt-2">
          Don&apos;t have an account.
          <button onClick={() => navigate('/signup')} type="button">
            <a className="text-blue-700 underline cursor-pointer">Sign up</a>
          </button>
        </p>
      </section>
    </div>
  );
}

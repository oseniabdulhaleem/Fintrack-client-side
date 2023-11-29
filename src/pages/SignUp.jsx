import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoadingModal from "./LoadingModal";

export function SignUp() {
  const [checkPass, setCheckPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { Password, cPassword } = data;

    // Check if passwords match
    if (Password !== cPassword) {
      setCheckPass(true);
      setTimeout(() => {
        setCheckPass(false);
      }, 3000);
    } else {
      setIsLoading(true); // Set loading state to true when the request is initiated
      const userData = {
        first_name: data.FirstName,
        last_name: data.LastName,
        password: Password,
        email: data.Email,
      };
      // console.log(JSON.stringify(userData));

      fetch("https://financetrack-app.onrender.com/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers your server requires
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data.message);
          alert(
            "Account successfully created. \n you will redirected to the login page"
          );
          // reset();
          navigate("/login");
          // Handle the success response from the server
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle errors
        })
        .finally(() => {
          setIsLoading(false); // Set loading state to false when the request is completed
        });
    }
  };

  return (
    <div className={`homepage ${isLoading ? "loading-overlay" : ""}`}>
      <section className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <h1 className="text-7xl font-semibold text-center text-blue-900 mb-10">
          FinTrack
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Firstname</label>
            <input
              className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
              {...register("FirstName", {
                required: "This is required",
                validate: {
                  minLength: (v) =>
                    v.length > 2 || "minimum length of 3 required",
                  matchPattern: (v) =>
                    /^[a-zA-Z_]+$/.test(v) || "Invalid firstname",
                },
              })}
              placeholder="firstname"
            />
            <p className="text-red-500">{errors.firstname?.message}</p>
          </div>
          <div>
            <label>Lastname</label>
            <input
              className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
              {...register("LastName", {
                required: "This is required",
                validate: {
                  minLength: (v) =>
                    v.length > 2 || "minimum length of 3 required",
                  matchPattern: (v) =>
                    /^[a-zA-Z_]+$/.test(v) || "Invalid lastname",
                },
              })}
              placeholder="lastname"
            />
            <p className="text-red-500">{errors.lastname?.message}</p>
          </div>
          {/* <div>
            <label>Username</label>
            <input
              className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
              {...register("username", {
                required: "This is required",
                validate: {
                  minLength: (v) => v.length > 5 || "min length of 5 required",
                  matchPattern: (v) =>
                    /^[a-zA-Z_]+$/.test(v) || "Invalid username",
                },
              })}
              placeholder="Username"
            />
            <p className="text-red-500">{errors.username?.message}</p>
          </div> */}
          <div>
            <label>E-mail</label>
            <input
              className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white "
              {...register("Email", {
                required: true,
                validate: {
                  matchPattern: (v) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      v
                    ) ||
                    "must be a valid email address and should be in lowercase",
                },
              })}
              type="email"
              placeholder="example@gmail.com"
            ></input>
            {errors.email?.message && <p>{errors.email?.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-white"
              {...register("Password", {
                required: true,
                minLength: {
                  value: 5,
                  message: "Minimum of 5 characters",
                },
              })}
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="text-red-500">{errors.password?.message}</p>
          <div>
            <label> Confirm Password</label>
            <input
              className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
              {...register("cPassword", {
                required: true,
                minLength: {
                  value: 5,
                  message: "Minimum of 5 characters",
                },
              })}
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="text-red-500">{errors.cPassword?.message}</p>
          {checkPass && <p className="text-red-500">Passwords do not match</p>}
          <button
            type="submit"
            className="bt-op px-4 py-1.5 my-5 rounded-md shadow-lg bg-blue-700 font-medium text-gray-100 block transition duration-300 hover:scale-105"
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? <span>Loading...</span> : <span>Sign Up</span>}
          </button>
        </form>
        {isLoading && <LoadingModal />}
        <p className="mt-2">
          Have an account?{" "}
          <a
            className="text-blue-700 underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </a>
        </p>
      </section>
    </div>
  );
}

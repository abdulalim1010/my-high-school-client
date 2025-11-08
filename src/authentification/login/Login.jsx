import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";

const Login = () => {
  // --- STATE MANAGEMENT FOR UI FEEDBACK ---
  const [isLoading, setIsLoading] = React.useState(false);
  const [generalError, setGeneralError] = React.useState('');
  
  const { login } = UseAuth(); // 'user' is often not needed here
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // --- DATABASE LOGIC ---
  // In a real app, this should ideally be an upsert or only run during registration.
  const saveUserToDB = async (user) => {
    const userData = {
      uid: user.uid,
      name: user.displayName || "No Name",
      email: user.email,
      photo: user.photoURL || null,
      role: "user",
    };

    try {
      // NOTE: Using a POST here. If the user already exists, your backend 
      // should ideally return a success status (e.g., 200/204) or handle the upsert.
      await axios.post("http://localhost:3000/users", userData);

    } catch (error) {
      // Assuming a non-critical failure for saving the user data is okay
      // if the login itself succeeded.
      if (error.response?.status !== 200) {
        console.error("Failed to save/update user in DB:", error.message);
      }
    }
  };

  // --- SUBMISSION HANDLER ---
  const onSubmit = async (data) => {
    setIsLoading(true);
    setGeneralError(''); // Clear previous error

    try {
      const loggedInUser = await login(data.email, data.password);
      
      // Save user to database (runs in background, not critical path feedback)
      await saveUserToDB(loggedInUser.user); 
      
      reset();
      navigate("/"); // Navigate to home on success
    } catch (err) {
      // Handle and display login errors professionally
      const errorMessage = err.message 
        ? err.message.replace('Firebase: Error (auth/', '').replace(').', '')
        : 'An unknown error occurred during login.';
      setGeneralError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // --- COMPONENT RENDER ---
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-50 via-white to-indigo-50 px-4">
      
      {/* PROFESSIONAL LOGIN CARD CONTAINER */}
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md">
        
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
            System Login
        </h2>
        
        {/* GENERAL ERROR DISPLAY */}
        {generalError && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded" role="alert">
            <p className="font-bold">Login Failed</p>
            <p className="text-sm">{generalError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-indigo-700 transition duration-150 disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging In...
              </>
            ) : (
              'Log In'
            )}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-8 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-bold hover:text-indigo-800 transition duration-150">
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
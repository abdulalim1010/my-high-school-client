import React from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const Login = () => {
  const { login } = UseAuth()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      alert("Login successful!");
      reset();
      navigate("/"); // redirect to homepage or dashboard
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border shadow rounded">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-semibold underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;

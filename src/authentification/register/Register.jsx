import React from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin";

const Register = () => {
  const { creatUser } = UseAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const saveUserToDB = async (user) => {
    const newUser = {
      uid: user.uid,
      name: user.name,
      email: user.email,
      image: user.image,
      role: "user",
    };
    try {
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
    } catch (err) {
      console.error("Failed to save user to DB:", err);
    }
  };

  const onSubmit = async (data) => {
    try {
      const result = await creatUser(data.email, data.password);

      await updateProfile(result.user, {
        displayName: data.name,
        photoURL: data.image,
      });

      await saveUserToDB({
        uid: result.user.uid,
        name: data.name,
        email: data.email,
        image: data.image,
      });

      alert("Registration successful!");
      reset();
      navigate("/login");
    } catch (err) {
      alert("Registration failed: " + err.message);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 via-white to-blue-50 px-4">
      <div className="w-full max-w-md p-10 rounded-2xl bg-white shadow-xl border border-gray-200">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Create Your Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="https://your-image-link.com/photo.jpg"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="******"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link className="font-semibold hover:underline" to="/login">
            Login here
          </Link>
        </p>

       
        <div className="space-y-4">
          <SocialLogin className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default Register;

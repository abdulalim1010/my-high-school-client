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
    uid: user.uid, // ✅ this line is important
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

    // ✅ Send correct structure with uid
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-100 px-4">
      <div className="w-full max-w-md p-8 rounded-xl bg-white shadow-2xl border">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold text-gray-700">Photo URL</label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="https://your-image-link.com/photo.jpg"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="******"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded mt-4"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 font-medium">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;

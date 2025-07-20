import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../hooks/UseAuth";
import saveUserToDB from "../pages/utilise/saveUserToDB";

const SocialLogin = () => {
  const { signInGoogle } = UseAuth();
  const navigate = useNavigate();

 const handleGoogleLogin = async () => {
  try {
    const result = await signInGoogle();
    const user = result.user;

    await saveUserToDB({
      uid: user.uid,
      name: user.displayName || "No Name",
      email: user.email,
      image: user.photoURL || "",
    });

    alert("Login successful!");
    navigate("/");
  } catch (error) {
    alert("Google login failed: " + error.message);
    console.error("Google login error:", error);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-100">
      <div className="p-8 bg-white rounded-lg shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Login With Google</h2>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full border px-5 py-3 text-lg font-semibold rounded-md hover:shadow transition"
        >
          <FcGoogle size={28} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

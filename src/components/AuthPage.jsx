import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import heroVideo from "../assets/videos/loginVideo.mp4"; 
import Leaf from "../assets/images/leaf-svgrepo-com.svg"; 

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F6F2] ">
      <div className="flex flex-col md:flex-row w-full max-w-[900px] min-h-[480px] bg-white shadow-xl rounded-lg overflow-hidden">

        <div className="relative w-full md:w-[45%] md:min-w-[320px] h-56 md:h-auto">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="relative z-10 flex h-full flex-col justify-between bg-black/40 px-6 py-8 text-white">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Create &amp; Sell<br />Extraordinary Products
              </h1>
              <p className="mt-2 text-base md:text-lg">
                Adopt the peace of nature!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 sm:px-8">
          <img src={Leaf} alt="leaf logo" className="w-16 h-16 md:w-24 md:h-24" />
          <h2 className="text-xl md:text-2xl text-green-900 font-semibold">
            {isLogin ? "Welcome Back!" : "Join Us"}
          </h2>

          {isLogin ? <Login /> : <SignUp />}

          <p className="text-sm text-gray-600 mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <a
                  className="text-green-700 underline font-semibold hover:text-green-700 cursor-pointer text-lg"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a
                  className="text-green-700 underline font-semibold hover:text-green-700 cursor-pointer text-lg  "
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

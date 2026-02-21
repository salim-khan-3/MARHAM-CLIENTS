"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Phone, Lock } from "lucide-react";
import Image from "next/image";
import loginVactor from "../../../public/assets/loginVactor.png";
import Link from "next/link";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left – Login Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[2.5rem] p-10 md:p-12">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="mx-auto mb-5 w-16 h-16 rounded-2xl btn-color flex items-center justify-center shadow-lg">
              <Lock className="text-white w-8 h-8" />
            </div>

            <h2 className="text-3xl text-gradient font-extrabold tracking-widest welcome-text">
              Welcome Back 
            </h2>
            <p className="text-gray-500 mt-2">
              Login to continue to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Phone */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Phone Number
              </label>

              <div className="relative mt-2">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  required
                  placeholder="01XXXXXXXXX"
                  className="w-full py-4 pl-12 pr-4 rounded-2xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500/40 outline-none transition"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Password
              </label>

              <div className="relative mt-2">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full py-4 pl-12 pr-12 rounded-2xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500/40 outline-none transition"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
            </div>

            {/* Forgot */}
            <div className="flex justify-end">
              <Link href={"/forgot-password"}
                type="button"
                className="text-sm font-semibold text-gradient hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl btn-color text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <Link href={"/register"} className="text-gradient font-semibold cursor-pointer hover:underline">
                SIGN UP
              </Link>
            </p>
          </form>
        </div>

        {/* Right – Illustration */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-[700px] h-[480px]">
            <Image
              src={loginVactor}
              alt="Login Illustration"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;

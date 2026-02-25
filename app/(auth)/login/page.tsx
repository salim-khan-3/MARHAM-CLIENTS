"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Phone, Lock, ShieldCheck, Twitter, Facebook } from "lucide-react";
import Image from "next/image";
import loginVactor from "../../../public/assets/loginVactor.png";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    role: "User",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      {/* width hobe container soman */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side – Premium Login Card */}
          <div className="w-full max-w-[500px] lg:max-w-full mx-auto space-y-4">
            <div className="bg-white dark:bg-[#1F2937] p-8 lg:p-14 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              
              {/* Form Header */}
              <div className="mb-8">
                <div className="w-14 h-14 bg-[#0061FF] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                  <Lock className="text-white w-7 h-7" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-800 dark:text-white tracking-tight leading-tight">
                  Welcome Back
                </h2>
                <p className="text-gray-400 dark:text-gray-500 text-sm font-medium mt-3">
                  Please sign in to continue your journey
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* Phone Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <Phone size={20} />
                  </div>
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-gray-50 dark:bg-[#374151] border border-gray-200 dark:border-gray-600 rounded-2xl py-5 pl-14 pr-4 text-sm text-gray-700 dark:text-white outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Password Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <Lock size={20} />
                  </div>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full bg-gray-50 dark:bg-[#374151] border border-gray-200 dark:border-gray-600 rounded-2xl py-5 pl-14 pr-12 text-sm text-gray-700 dark:text-white outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>

                {/* Role Selection */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <ShieldCheck size={20} />
                  </div>
                  <select 
                    className="w-full appearance-none bg-gray-50 dark:bg-[#374151] border border-gray-200 dark:border-gray-600 rounded-2xl py-5 pl-14 pr-4 text-sm text-gray-700 dark:text-white outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all cursor-pointer font-medium"
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option>User</option>
                    <option>Admin</option>
                    <option>Guest</option>
                  </select>
                </div>

                <div className="flex justify-end">
                  <Link href="/forgot-password" size={12} className="text-[10px] font-black text-gray-400 uppercase tracking-[2px] hover:text-blue-600 transition-colors">
                    Forgot <span className="text-blue-600">Password?</span>
                  </Link>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#0061FF] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-500/30 transition-all active:scale-[0.98] uppercase tracking-widest text-sm"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100 dark:border-gray-700"></div>
                </div>
                <span className="relative px-4 bg-white dark:bg-[#1F2937] text-gray-400 text-[10px] font-black uppercase tracking-widest">Social Login</span>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 bg-gray-50 dark:bg-[#374151] border border-gray-100 dark:border-gray-600 hover:bg-white hover:shadow-md py-4 rounded-2xl transition-all">
                  <Twitter size={18} className="text-[#1DA1F2]" fill="currentColor" />
                  <span className="text-xs font-bold text-gray-600">Twitter</span>
                </button>
                <button className="flex items-center justify-center gap-3 bg-gray-50 dark:bg-[#374151] border border-gray-100 dark:border-gray-600 hover:bg-white hover:shadow-md py-4 rounded-2xl transition-all">
                  <Facebook size={18} className="text-[#3B5998]" fill="currentColor" />
                  <span className="text-xs font-bold text-gray-600">Facebook</span>
                </button>
              </div>
            </div>

            {/* Bottom Register Link */}
            <div className="bg-white dark:bg-[#1F2937] p-6 rounded-[2rem] text-center border border-gray-100 dark:border-gray-700 shadow-sm">
              <p className="text-sm text-gray-500 font-medium">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-600 font-black hover:underline ml-1">
                  REGISTER
                </Link>
              </p>
            </div>
          </div>

          {/* Right Side – Illustration */}
          <div className="hidden lg:flex flex-col items-center justify-center animate-in fade-in slide-in-from-right duration-700">
            <div className="relative w-full aspect-square max-w-[600px]">
              <Image
                src={loginVactor}
                alt="Login Illustration"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <div className="text-center mt-10">
               <h3 className="text-4xl font-black text-gray-800 tracking-tight">Stay Protected</h3>
               <p className="text-gray-500 mt-4 max-w-sm mx-auto font-medium leading-relaxed">
                 Access your personalized health dashboard and stay connected with your healthcare providers.
               </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
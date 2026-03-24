"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Phone, Lock, User, Mail, ShieldCheck, Twitter, Facebook } from "lucide-react";
import Image from "next/image";
import registerVector from "../../../public/assets/registerVactor.png";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Premium Registration Card */}
          <div className="w-full max-w-[550px] mx-auto space-y-4">
            <div className="bg-white dark:bg-[#1F2937] p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden transition-all">
              
              {/* Form Header */}
              <div className="mb-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl mb-5 shadow-sm">
                  <ShieldCheck size={36} />
                </div>
                <h2 className="text-3xl font-black text-gray-800 dark:text-white tracking-tight">
                  Create a new account
                </h2>
                <p className="text-gray-400 dark:text-gray-500 text-sm font-medium mt-2">
                  Join us today and manage your health records efficiently.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* Full Name */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-50 dark:bg-[#374151] border border-gray-100 dark:border-gray-600 rounded-xl py-4 pl-12 pr-4 text-sm text-gray-700 dark:text-white outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Email Address */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-50 dark:bg-[#374151] border border-gray-100 dark:border-gray-600 rounded-xl py-4 pl-12 pr-4 text-sm text-gray-700 dark:text-white outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Phone Number */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <Phone size={18} />
                  </div>
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-gray-50 dark:bg-[#374151] border border-gray-100 dark:border-gray-600 rounded-xl py-4 pl-12 pr-4 text-sm text-gray-700 dark:text-white outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Password Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Password */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <Lock size={18} />
                    </div>
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full bg-gray-50 dark:bg-[#374151] border border-gray-100 dark:border-gray-600 rounded-xl py-4 pl-12 pr-12 text-sm text-gray-700 dark:text-white outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600">
                      {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <Lock size={18} />
                    </div>
                    <input
                      required
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm"
                      className="w-full bg-gray-50 dark:bg-[#374151] border border-gray-100 dark:border-gray-600 rounded-xl py-4 pl-12 pr-12 text-sm text-gray-700 dark:text-white outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600">
                      {showConfirm ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-center gap-3 py-2">
                  <input
                    required
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 rounded-lg border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-[#374151] cursor-pointer"
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  />
                  <label htmlFor="terms" className="text-xs text-gray-500 dark:text-gray-400 font-medium cursor-pointer leading-tight">
                    I agree to the <span className="text-blue-600 font-bold hover:underline">Terms & Conditions</span> and <span className="text-blue-600 font-bold hover:underline">Privacy Policy</span>
                  </label>
                </div>

                {/* Sign Up Button */}
                <button type="submit" className="w-full bg-[#0061FF] hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] uppercase tracking-widest text-sm">
                  Sign Up
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100 dark:border-gray-700"></div>
                </div>
                <span className="relative px-4 bg-white dark:bg-[#1F2937] text-gray-400 text-[10px] font-black uppercase tracking-[2px]">or register with</span>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white py-3 rounded-xl hover:shadow-lg transition-all">
                  <Twitter size={18} fill="currentColor" />
                  <span className="text-xs font-bold">Twitter</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#3B5998] text-white py-3 rounded-xl hover:shadow-lg transition-all">
                  <Facebook size={18} fill="currentColor" />
                  <span className="text-xs font-bold">Facebook</span>
                </button>
              </div>
            </div>

            {/* Bottom Login Link */}
            <div className="bg-white dark:bg-[#1F2937] p-6 rounded-3xl text-center border border-gray-100 dark:border-gray-700 shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Already have an account? <Link href="/login" className="text-blue-600 font-black hover:underline ml-1 uppercase tracking-tighter">Login</Link>
              </p>
            </div>
          </div>

    
          <div className="hidden lg:flex flex-col items-center justify-center animate-in fade-in slide-in-from-right duration-700">
            <div className="relative w-full aspect-square max-w-[550px]">
              <Image
                src={registerVector}
                alt="Register Illustration"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-3xl font-black text-gray-800 tracking-tight">Join Our Community</h3>
              <p className="text-gray-500 mt-3 max-w-sm mx-auto font-medium leading-relaxed">
                Connect with the best doctors and manage your medical appointments with ease.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
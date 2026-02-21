"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Phone, Lock, User } from "lucide-react";
import Image from "next/image";
import registerVector from "../../../public/assets/registerVactor.png";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left – Register Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[2.5rem] p-10 md:p-12">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="mx-auto mb-5 w-16 h-16 rounded-2xl btn-color flex items-center justify-center shadow-lg">
              <User className="text-white w-8 h-8" />
            </div>

            <h2 className="text-3xl text-gradient font-extrabold tracking-widest welcome-text">
              Create Account
            </h2>
            <p className="text-gray-500 mt-2">
              Sign up to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Full Name (Optional)
              </label>

              <div className="relative mt-2">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full py-4 pl-12 pr-4 rounded-2xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500/40 outline-none transition"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

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

            {/* Confirm Password */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Confirm Password
              </label>

              <div className="relative mt-2">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full py-4 pl-12 pr-12 rounded-2xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500/40 outline-none transition"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition"
                >
                  {showConfirm ? <Eye /> : <EyeOff />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl btn-color text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-gradient font-semibold hover:underline">
                LOGIN
              </Link>
            </p>
          </form>
        </div>

        {/* Right – Illustration */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-[700px] h-[480px]">
            <Image
              src={registerVector}
              alt="Register Illustration"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;

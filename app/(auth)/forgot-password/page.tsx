"use client";

import React, { useState } from "react";
import { Phone, ArrowLeft, Key } from "lucide-react";
import Link from "next/link";
import forgotpass from "../../../public/assets/forgotPass-removebg-preview.png"
import Image from "next/image";

const ForgotPassword = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset request for:", phone);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left – Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[2.5rem] p-10 md:p-12">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="mx-auto mb-5 w-16 h-16 rounded-2xl btn-color flex items-center justify-center shadow-lg">
              <Key className="text-white w-8 h-8" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-wide text-gradient welcome-text">
              Forgot Password
            </h2>
            <p className="text-gray-500 mt-2">
              Enter your phone number to reset password
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl btn-color text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              Send Reset Code
            </button>

            {/* Back to login */}
            <div className="flex justify-center">
              <Link
                href="/login"
                className="flex items-center gap-2 text-sm font-semibold text-gradient hover:underline"
              >
                <ArrowLeft size={16} />
                Back to Login
              </Link>
            </div>
          </form>
        </div>

        {/* Right – Empty / Illustration space */}
    <div className="hidden md:flex justify-center">
          <div className="relative w-[700px] h-[480px]">
            <Image
              src={forgotpass}
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

export default ForgotPassword;

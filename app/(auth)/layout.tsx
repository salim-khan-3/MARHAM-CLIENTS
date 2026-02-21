// app/(auth)/layout.tsx

import React from "react";

// অবশ্যই 'export default' ব্যবহার করতে হবে
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full flex justify-center items-center">
        {children}
      </div>
    </section>
  );
}
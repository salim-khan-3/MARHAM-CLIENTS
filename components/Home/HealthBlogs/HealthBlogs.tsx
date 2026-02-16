"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; // Ico-er jonno lucide use korlam

type BlogCategory = {
  id: number;
  title: string;
  image: string;
};

const blogCategories: BlogCategory[] = [
  {
    id: 1,
    title: "Healthy Lifestyle",
    image: "/images/healthy.jpg",
  },
  {
    id: 2,
    title: "Women Health",
    image: "/images/women.jpg",
  },
  {
    id: 3,
    title: "Skin Care",
    image: "/images/skincare.jpg",
  },
];

const HealthBlogs = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Health Blogs
          </h2>

          <Link
            href="/blogs"
            className="flex items-center gap-1 text-sm font-semibold text-[#005a78] hover:underline"
          >
            View all <ChevronRight size={16} />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
            >
              {/* Image Wrapper */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Title Area */}
              <div className="p-4 text-center">
                <h3 className="text-base font-bold text-[#005a78] group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HealthBlogs;
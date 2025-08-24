"use client";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative w-full flex items-center justify-center">
        
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <p className="text-pink-500 font-semibold mb-3">Bold & Sporty</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4">
            NIKE REACT <br /> PRESTO BY YOU
          </h1>
          <p className="text-gray-600 text-subtitle mb-6">
            Take advantage of brand new, proprietary cushioning technology
            with a fresh pair of Nike react shoes.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-full font-semibold shadow-md hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative flex justify-center items-center">
            <Image
            src="/strap.png"
            alt="strap"
            fill
            className="object-contain object-right"
        />

          {/* Shoe Image */}
          <Image
            src="/cta-shoe.png"
            alt="cta shoe"
            width={600}
            height={400}
            className="relative z-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 mb-6">
        <Image
          src="/hero-bg.png"
          alt="background"
          fill
          className="object-cover"
        />

      <div className="relative container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <p className="text-pink-500 font-semibold mb-3">Bold & Sporty</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
            Style That Moves <br /> With You.
          </h1>
          <p className="mt-6 text-gray-700 text-subtitle">
            Not just style. Not just comfort. Footwear that effortlessly moves with your every step.
          </p>
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>

        {/* Right Content (Shoe) */}
        <div className="flex-1 relative flex justify-center items-center">
          {/* Shoe Image */}
          <Image
            src="/hero-shoe.png"
            alt="Shoe"
            width={800}
            height={400}
            className="relative z-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";

export default function Trending() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="my-12 text-heading-3 text-dark-900">Trending Now</h2>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {/* Big Featured Card */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <Image
            src="/trending-1.png"
            alt="tranding-1"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-start p-10 mt-8 text-white">
            <h3 className="text-4xl md:text-5xl font-extrabold leading-snug mb-3">REACT PRESTO</h3>
            <p className="text-subtitle mb-4">
              With React foam for the most comfortable Presto ever.
            </p>
            <button className="px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Two Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative w-full h-[400px] overflow-hidden">
            <Image
              src="/trending-2.png"
              alt="trending-2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-4 left-4 text-white text-lead">
              Summer Must-Haves: Air Max Dia
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full h-[400px] overflow-hidden">
            <Image
              src="/trending-3.png"
              alt="trending-3"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-4 left-4 text-white text-lead">
              Air Jorden 11 Retro Low LE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

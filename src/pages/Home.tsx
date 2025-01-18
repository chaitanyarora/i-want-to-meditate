import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import shriMatajiWithPublic from "../../dist/assets/shri-mataji-with-public.png"



const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${shriMatajiWithPublic})`, // Correct usage with url()
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for better text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Find Your Inner Peace
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-12">
          Begin your journey to mindfulness and tranquility through guided meditation
        </p>
        <Link
          to="/instructions"
          className="group inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Start Meditating
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
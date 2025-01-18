import React from 'react';

const HindiSelfRealization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            आत्म साक्षात्कार
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            हिंदी में आत्म साक्षात्कार का मार्गदर्शन
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <iframe className="aspect-video w-full h-full" src="https://www.youtube.com/embed/6DQ4o_aeYpE?si=oY18UceYgmQi7krN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className="relative pb-[56.25%] h-0">
            <p className="absolute inset-0 flex items-center justify-center text-gray-600">
              Please provide the Hindi Self Realization video link
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">आत्म साक्षात्कार के बारे में</h2>
          <p className="text-gray-600 mb-4">
            आत्म साक्षात्कार एक गहन आध्यात्मिक अनुभव है जो हमें अपने वास्तविक स्वरूप से परिचित कराता है।
            यह एक ऐसी प्रक्रिया है जिसके माध्यम से हम अपनी आत्मा के साथ एकाकार होते हैं।
          </p>
          <p className="text-gray-600">
            इस वीडियो में आप आत्म साक्षात्कार की प्रक्रिया और इसके महत्व के बारे में विस्तार से जान सकेंगे।
          </p>
        </div>
      </div>
    </div>
  );
};

export default HindiSelfRealization;
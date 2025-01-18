import React from 'react';

const EnglishSelfRealization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Self Realization
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Guidance for Self Realization in English
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">

          <iframe className="aspect-video w-full h-full" src="https://www.youtube.com/embed/eRRNa0gbVQQ?si=8GvambnFHtQIPBfG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <div className="relative pb-[56.25%] h-0">
            <p className="absolute inset-0 flex items-center justify-center text-gray-600">
              Please provide the English Self Realization video link
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">About Self Realization</h2>
          <p className="text-gray-600 mb-4">
            Self Realization is a profound spiritual experience that introduces us to our true nature.
            It is a process through which we become one with our inner self and discover our eternal essence.
          </p>
          <p className="text-gray-600">
            This video will guide you through the process of Self Realization and explain its significance
            in detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnglishSelfRealization;
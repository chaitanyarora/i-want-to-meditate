import React from 'react';
import { Clock, Brain, Heart, Sun } from 'lucide-react';
import shriMatajiFlower from "../assets/shri-mataji-nirmala-devi-teaching-sahaja-yoga-meditation-in-india.avif"

const Instructions = () => {
  const steps = [
    {
      icon: Clock,
      title: "Find the Right Time",
      description: "Choose a time when you won't be disturbed. Early morning or evening often works best."
    },
    {
      icon: Brain,
      title: "Get Comfortable",
      description: "Sit in a comfortable position with your back straight. You can sit on a chair or cross-legged on the floor."
    },
    {
      icon: Heart,
      title: "Focus on Breath",
      description: "Close your eyes and focus on your breathing. Notice the sensation of air moving in and out of your body."
    },
    {
      icon: Sun,
      title: "Stay Present",
      description: "When your mind wanders, gently bring your attention back to your breath. Start with 5-10 minutes and gradually increase."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-40 px-4"
            
              style={{ backgroundImage: `url(${shriMatajiFlower})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
      >
        <div className="max-w-7xl mx-auto">
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            How to Meditate
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Follow these simple steps to begin your meditation practice
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <step.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Additional Tips</h3>
          <ul className="space-y-4 text-gray-600">
            <li>• Start small with just 5 minutes a day</li>
            <li>• Don't judge yourself when your mind wanders</li>
            <li>• Try different techniques to find what works best for you</li>
            <li>• Be consistent with your practice</li>
            <li>• Use comfortable clothing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
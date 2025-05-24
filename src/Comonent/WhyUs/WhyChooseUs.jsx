import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function CookingLottieSection() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/cooking.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center justify-center">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">Why Choose Our Recipes?</h2>
        <ul className="space-y-3 text-gray-500 text-base list-disc pl-5">
          <li>Tested by experienced home chefs</li>
          <li>Easy-to-follow instructions</li>
          <li>Quick filters for diet and cuisine</li>
          <li>Nutrition facts for health-conscious cooking</li>
          <li>Free and constantly updated</li>
        </ul>
      </div>
      <div>
        {animationData ? (
          <Lottie animationData={animationData} loop={true} />
        ) : (
          <p>Loading animation...</p>
        )}
      </div>
    </div>
  );
}


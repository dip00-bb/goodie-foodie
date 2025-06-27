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
    <div>
      <h2 className="text-3xl font-extrabold text-yellow-400 text-center lg:text-6xl mb-8">Why Choose Our Recipes?</h2>
      <div className="grid md:grid-cols-2 md:gap-10 items-center">

        <div>

          <ul className="space-y-3 text-gray-500 text-base list-disc pl-5">
            <li className=" md:text-2xl lg:text-3xl ">Tested by experienced home chefs</li>
            <li className=" md:text-2xl lg:text-3xl ">Easy-to-follow instructions</li>
            <li className=" md:text-2xl lg:text-3xl ">Quick filters for diet and cuisine</li>
            <li className=" md:text-2xl lg:text-3xl ">Nutrition facts for health-conscious cooking</li>
            <li className=" md:text-2xl lg:text-3xl ">Free and constantly updated</li>
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
    </div>
  );
}


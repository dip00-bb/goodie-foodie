import useTitle from "../CustomHook/useTitle";

export default function AboutUs() {

  useTitle('About Us')


  return (
    <section className="py-12 px-6 text-gray-800 min-h-screen flex justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Image Section */}
        <div data-aos="fade-right" data-aos-duration='1200' className="w-full">
          <img
            src='./chefs.jpg'
            alt="Cooking together"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4 lg:text-5xl">About Us</h2>
          <p className="text-lg leading-relaxed mb-6  lg:text-2xl">
            At <span className="text-violet-500 font-semibold" >Goodie Foodie</span>, we believe in the joy of cooking and the power of sharing.
            Our platform is a space where food lovers from all walks of life come together to share, discover,
            and enjoy delicious recipes. Whether you're a seasoned chef or just starting out, you'll find inspiration
            and community here.
          </p>
          <ul className="space-y-2">
            <li className="text-xl">🌟 <strong>Add</strong> your favorite recipes</li>
            <li className="text-xl">💛 <strong>Like</strong> recipes from others</li>
            <li className="text-xl">🛠️ <strong>Update</strong> your own creations anytime</li>
          </ul>
          <p className="mt-6 text-md italic text-gray-600 text-xl">
            Join our growing community and let’s cook something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}

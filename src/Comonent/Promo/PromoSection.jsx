import { Link } from "react-router";


export default function PromoSection() {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-yellow-400 lg:text-6xl mb-8">
            Share Your Flavor. Inspire Others.
          </h2>
          <p className="text-lg  text-gray-500 mb-6">
            Whether it's grandma’s secret recipe or your newest creation,
            share it with the world on <span className="text-yellow-500 font-semibold">Goodie Foodie</span>.
            Join a growing community of passionate cooks and food lovers!
          </p>
            <div className='flex '>
                <Link to='/addrecipes' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-400 rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Add Your Recipe</span>
                </Link>
            </div>
        </div>

        {/* Image Section */}
        <div data-aos="zoom-in" data-aos-duration='1000' className="w-full md:w-1/2">
          <img
            src='./promo.jpg'
            alt="Happy cooking"
            className=" shadow-lg w-full rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

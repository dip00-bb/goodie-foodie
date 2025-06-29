import useTitle from "../CustomHook/useTitle";

export default function Support() {

  useTitle('Support')

  return (
    <section className="min-h-screen py-12 px-6 text-gray-800 lg:flex justify-center">
      <div className="mx-auto flex md:flex-col lg:flex-row  items-center gap-10">
        
        <div data-aos="fade-right" data-aos-duration='1000' className="w-full">
          <img
            src='./support.jpg'
            alt="Customer support"
            className="rounded-2xl shadow-lg"
          />
        </div>


        <div className="w-full text-center md:text-left">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4 lg:text-5xl">Need Help?</h2>
          <p className="text-lg leading-relaxed mb-4">
            At <span className="text-violet-500 font-semibold lg:text-2xl">Goodie Foodie</span>, your experience matters. Whether you have a question, 
            found a bug, or need help with your account or recipes – we're here for you.
          </p>
          <ul className="list-disc list-inside text-left space-y-2">
            <li className="text-xl">🔧 Technical issues with adding or editing a recipe</li>
            <li className="text-xl">🔒 Account access problems</li>
            <li className="text-xl">❓ General questions or suggestions</li>
          </ul>
          <p className="mt-6">
            📬 Contact us anytime at:  
            <span className="font-semibold text-violet-500"> support@goodiefoodie.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}

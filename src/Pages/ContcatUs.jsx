import useTitle from "../CustomHook/useTitle";


export default function ContactUs() {


  useTitle('Contact Us')

  return (
    <section className="py-12 px-6 text-gray-800 min-h-screen flex justify-center items-center">
      <div className="mx-auto flex md:flex-col lg:flex-row items-center gap-10">
        

        <div className="w-full">
          <img
            src='./contactus.jpg'
            alt="Contact us - Cooking support"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Contact Info Section */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4 lg:text-5xl">Contact Us</h2>
          <p className="text-lg mb-4 leading-relaxed lg:text-2xl">
            Got a question, feedback, or just want to share your food story? We’d love to hear from you! Our team is always ready to help you cook up something amazing.
          </p>
          
          <div className="text-md space-y-4">
            <p>
              📧 <span className="font-semibold text-violet-500">support@goodiefoodie.com</span>
            </p>
            <p>
              📞 <span className="text-gray-700">+880 1234 567 890</span>
            </p>
            <p>
              📍 <span className="text-gray-700">Dhaka, Bangladesh</span>
            </p>
          </div>

          <div className="mt-6 flex justify-center md:justify-start gap-4 text-violet-500 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

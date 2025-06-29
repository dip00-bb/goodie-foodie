
import React from "react";

const faqs = [
  {
    question: "Are your recipes free to access?",
    answer: "Yes! All our recipes are available for free. You can browse, read, and try them anytime."
  },
  {
    question: "Do I need an account to save recipes?",
    answer: "No, but creating a free account lets you save your favorite recipes, create shopping lists, and leave reviews."
  },
  {
    question: "Can I submit my own recipes?",
    answer: "Absolutely! We love community contributions. Just head to the 'Submit a Recipe' section and follow the instructions."
  },
  {
    question: "What if I don't have a specific ingredient listed in the recipe?",
    answer: "We often include substitutes in the recipe notes. You can also ask in the comments, and we’ll suggest alternatives."
  },
  {
    question: "How do I adjust the serving size?",
    answer: "Most of our recipes include a serving size calculator. Use the +/- buttons to automatically adjust ingredients."
  },
  {
    question: "Are your recipes tested?",
    answer: "Yes, all recipes are tested in our kitchen before being published to ensure taste and accuracy."
  },
  {
    question: "Do you have vegetarian/vegan/gluten-free options?",
    answer: "Yes! Use the filters or search bar to find recipes based on your dietary preferences."
  },
  {
    question: "How can I find calorie or nutritional information?",
    answer: "Nutritional info is available at the bottom of most recipes. Please note it's an estimate."
  },
  {
    question: "The recipe page is not loading. What should I do?",
    answer: "Try refreshing the page or clearing your browser cache. If the issue persists, contact our support team."
  },
  {
    question: "Can I print recipes?",
    answer: "Yes! There’s a 'Print Recipe' button on each recipe page for a printer-friendly version."
  }
];



export default function FAQAccordion() {
  return (
    <div className="space-y-4">
      <h2 className=" lg:text-6xl mb-8 text-3xl font-extrabold text-center text-yellow-400">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          data-aos="zoom-in" data-aos-duration='1000'
          key={index}
          className="collapse collapse-arrow bg-base-100 border border-base-300"
        >
          <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
          <div className="collapse-title font-semibold text-xl lg:text-3xl">{faq.question}</div>
          <div className="collapse-content text-sm lg:text-2xl">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
}

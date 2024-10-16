import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Chevron icons

const questions = [
  {
    question: "How do I contact customer support if I have a question or issue?",
    answer:
      "You can reach our customer support via email at support@example.com or call us at +1-800-123-4567.",
  },
  {
    question: "Can I return the product if it doesn't meet my expectations?",
    answer:
      "Yes, we offer a 30-day return policy. Please ensure the product is in original condition.",
  },
  {
    question: "What makes your product stand out from others in the market?",
    answer:
      "Our product is built with premium materials, offering durability and innovative features.",
  },
  {
    question: "Is there a warranty on the product, and what does it cover?",
    answer:
      "Yes, our product comes with a 1-year warranty covering manufacturing defects.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="#" className="bg-black text-white py-8 sm:py-16">
      <div className="container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <div className="w-full sm:w-4/5 md:w-3/5 text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-1 flex justify-center items-center">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="  border-gray-700 ">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-customBlue p-6 rounded-md border border-gray-700"
            >
              {/* Question and Icon Section */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-lg font-medium focus:outline-none"
              >
                {/* Question */}
                <span className="text-left">{item.question}</span>

                {/* Icon on the Right */}
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>

              {/* Answer Section with Transition */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-60 mt-4' : 'max-h-0'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <p className="text-customBlue-400 text-sm">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

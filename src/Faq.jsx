import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faqs1 = () => {
  const faqs = [
    // ...your FAQ objects...
  ];

  const [activeId, setActiveId] = useState(1);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-12 bg-blue-200 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-blue-800 lg:text-lg lg:mt-6 lg:leading-8">
            Ask everything you need to know about our products and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-4 sm:mt-16">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl bg-blue-100 border border-blue-300 shadow transition-all duration-200"
              role="region"
            >
              <h3>
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={activeId === faq.id}
                  className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-blue-900 sm:p-6 focus:outline-none transition-colors duration-200 hover:bg-blue-200"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-blue-200 text-blue-700 shadow hover:bg-blue-300 transition">
                    {activeId === faq.id ? (
                      <FaMinus className="w-4 h-4" />
                    ) : (
                      <FaPlus className="w-4 h-4" />
                    )}
                  </span>
                </button>
              </h3>
              {activeId === faq.id && (
                <div className="px-6 pb-6 bg-blue-50 rounded-b-xl">
                  <p className="text-base text-blue-800">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ...rest of your section... */}
      </div>
    </section>
  );
};

export default Faqs1;




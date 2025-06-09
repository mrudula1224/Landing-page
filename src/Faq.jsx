import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What is an AI agent and how does it work?",
    answer:
      "An AI agent is an autonomous software entity that can perform tasks, answer questions, and interact with users using artificial intelligence. It processes natural language input, learns from interactions, and automates workflows for your business.",
  },
  {
    id: 2,
    question: "How secure is my data with your AI agent?",
    answer:
      "Security is our top priority. All communications are encrypted, and our AI agents comply with industry-standard security protocols to ensure your data remains private and protected.",
  },
  {
    id: 3,
    question: "Can I integrate the AI agent with my existing tools?",
    answer:
      "Yes! Our AI agents support seamless integration with popular platforms such as Slack, Gmail, Notion, Zapier, and more. You can also use our API for custom integrations.",
  },
  {
    id: 4,
    question: "Does the AI agent require training or setup?",
    answer:
      "Our AI agent comes pre-trained for common business tasks. You can customize its behavior with simple instructions, and it learns continuously from interactions to improve over time.",
  },
  {
    id: 5,
    question: "What kind of support is available?",
    answer:
      "We offer 24/7 support via chat and email. You can also access our help center, detailed documentation, and community forums for additional assistance.",
  },
];

const Faq = () => {
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
            Everything you need to know about our AI agents, integration, and support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-4 sm:mt-16">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl bg-white/60 backdrop-blur-md shadow-lg transition-all duration-200"
              role="region"
            >
              <h3>
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={activeId === faq.id}
                  className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-blue-900 sm:p-6 focus:outline-none transition-colors duration-200 hover:bg-white/70 bg-transparent"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    {activeId === faq.id ? (
                      <FaMinus className="w-4 h-4" />
                    ) : (
                      <FaPlus className="w-4 h-4" />
                    )}
                  </span>
                </button>
              </h3>
              {activeId === faq.id && (
                <div className="px-6 pb-6 bg-blue-50 rounded-b-2xl">
                  <p className="text-base text-blue-800">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;






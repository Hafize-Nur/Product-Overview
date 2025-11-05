// src/components/Accordion/Accordion.jsx
import React, { useState } from "react";
import "./Accordion.scss"; // normal import

const AccordionItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `accordion-content-${index}`;
  const buttonId = `accordion-button-${index}`;

  return (
    <div className="accordionItem">
      <button
        id={buttonId}
        className="accordionHeader"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        type="button"
      >
        {question}
        <span className="icon" aria-hidden="true">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && (
        <div
          id={contentId}
          className="accordionContent"
          role="region"
          aria-labelledby={buttonId}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ faqs }) => {
  return (
    <section
      className="accordionSection"
      aria-labelledby="faq-heading"
      aria-label="Sıkça Sorulan Sorular"
    >
      <h2 id="faq-heading">Sıkça Sorulan Sorular ❓</h2>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          index={index}
        />
      ))}
    </section>
  );
};

export default Accordion;

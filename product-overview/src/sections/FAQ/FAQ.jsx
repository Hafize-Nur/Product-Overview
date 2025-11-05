// src/sections/FAQ/FAQ.jsx
import React from "react";
import Accordion from "../../components/Accordion/Accordion";

const faqs = [
  {
    question: "Bu ürün hangi platformlarda çalışır?",
    answer:
      "Ürün tüm modern tarayıcılarda ve mobil cihazlarda çalışacak şekilde tasarlanmıştır.",
  },
  {
    question: "Ürünü ücretsiz deneyebilir miyim?",
    answer:
      "Evet, ürünün temel özelliklerini ücretsiz olarak deneyebilirsiniz.",
  },
  {
    question: "Müşteri desteği mevcut mu?",
    answer:
      "Evet, 7/24 destek ekibimizle her türlü sorunuza cevap alabilirsiniz.",
  },
];

const FAQ = () => {
  return <Accordion faqs={faqs} />;
};

export default FAQ;

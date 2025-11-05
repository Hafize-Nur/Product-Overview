import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Adınızı giriniz.";
    if (!formData.email.trim()) {
      newErrors.email = "E-posta giriniz.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta giriniz.";
    }
    if (!formData.message.trim()) newErrors.message = "Mesaj giriniz.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
      console.log(formData);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section
      className={styles.contactFormSection}
      aria-labelledby="contact-heading"
    >
      <div className={styles.contactFormContainer}>
        <div className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="contact-form-content"
            type="button"
            aria-label={
              isOpen ? "İletişim formunu kapat" : "İletişim formunu aç"
            }
          >
            <h2 id="contact-heading">İletişim 📬</h2>
            <span className={styles.icon} aria-hidden="true">
              {isOpen ? "−" : "+"}
            </span>
          </button>
          {isOpen && (
            <div
              id="contact-form-content"
              className={styles.accordionContent}
              role="region"
              aria-labelledby="contact-heading"
            >
              <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
                noValidate
                aria-label="İletişim formu"
              >
                <Input
                  label="Adınız"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <Input
                  label="E-posta"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <Input
                  label="Mesajınız"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  textarea
                  rows={5}
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  className={styles.submitButton}
                  ariaLabel="Formu gönder"
                >
                  Gönder
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Başarılı!"
      >
        <p>
          Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
        </p>
      </Modal>
    </section>
  );
};

export default ContactForm;

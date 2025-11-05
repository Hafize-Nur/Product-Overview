import React, { useState } from "react";
import "./Contact.scss";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" aria-labelledby="contact-heading">
      <div className="container contact__container">
        <div className="contact__info">
          <h2 id="contact-heading" className="contact__title">
            Bizimle İletişime Geçin 📬
          </h2>
          <p className="contact__subtitle">
            Her türlü soru, öneri veya iş birliği için bizimle iletişime
            geçebilirsiniz.
          </p>

          <div className="contact__details" aria-label="İletişim bilgileri">
            <p>
              <FaMapMarkerAlt aria-hidden="true" />{" "}
              <span>İstanbul, Türkiye</span>
            </p>
            <p>
              <FaEnvelope aria-hidden="true" /> <span>info@orneksite.com</span>
            </p>
            <p>
              <FaPhone aria-hidden="true" /> <span>+90 555 123 45 67</span>
            </p>
          </div>

          <iframe
            title="Harita - İstanbul konumu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.981380903078!2d28.9783585!3d41.0151375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab99c6a9b0db1%3A0x6d4e5e7e74b6e1d0!2sIstanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            loading="lazy"
            className="contact__map"
            aria-label="İstanbul konum haritası"
          ></iframe>
        </div>

        <form
          className="contact__form"
          onSubmit={handleSubmit}
          aria-label="İletişim formu"
          noValidate
        >
          <Input
            label="Ad Soyad"
            type="text"
            name="name"
            placeholder="Adınızı girin"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="E-posta"
            type="email"
            name="email"
            placeholder="E-posta adresinizi girin"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Mesajınız"
            name="message"
            placeholder="Mesajınızı yazın..."
            value={formData.message}
            onChange={handleChange}
            textarea
            rows={5}
            required
          />

          <Button
            type="submit"
            variant="primary"
            className="contact__button"
            ariaLabel="İletişim formunu gönder"
          >
            Gönder
          </Button>
        </form>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Teşekkürler!"
      >
        <p>Mesajınız gönderildi! Teşekkür ederiz 💌</p>
      </Modal>
    </section>
  );
};

export default Contact;

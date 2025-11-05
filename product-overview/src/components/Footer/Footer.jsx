import React from "react";
import "./Footer.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__content">
        {/* Sol kısım */}
        <div className="footer__left">
          <h3 className="footer__logo">Product Overview</h3>
          <p className="footer__text">
            Ürünlerinizi modern, etkileyici ve kullanıcı dostu bir şekilde
            tanıtın.
          </p>
        </div>

        {/* Orta kısım */}
        <nav className="footer__links" aria-label="Footer navigasyon">
          <h4>Keşfedin</h4>
          <ul>
            <li>
              <a href="#about" aria-label="Hakkımızda sayfasına git">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#contact" aria-label="İletişim sayfasına git">
                İletişim
              </a>
            </li>
            <li>
              <a href="#privacy" aria-label="Gizlilik politikası sayfasına git">
                Gizlilik Politikası
              </a>
            </li>
          </ul>
        </nav>

        {/* Sağ kısım */}
        <div className="footer__socials" aria-label="Sosyal medya linkleri">
          <h4>Bizi Takip Edin</h4>
          <div className="footer__icons">
            <a
              href="#"
              aria-label="Facebook sayfamızı ziyaret et"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Twitter sayfamızı ziyaret et"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Instagram sayfamızı ziyaret et"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Alt kısım */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Product Overview. Tüm hakları saklıdır.
        </p>
        <button
          onClick={scrollToTop}
          className="scroll-top"
          aria-label="Sayfanın en üstüne çık"
          type="button"
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

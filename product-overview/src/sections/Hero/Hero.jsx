import React from "react";
import styles from "./Hero.module.scss";
import Button from "../../components/Button/Button";
import productImg from "../../assets/pc.jpeg";

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`${styles.container} container`}>
        <div className={styles.textContent}>
          <h1 id="hero-heading" className={styles.title}>
            Ürününüzü Öne Çıkarın 🚀
          </h1>
          <p className={styles.subtitle}>
            Modern tasarım, güçlü performans ve kullanıcı dostu arayüz ile
            ürününüzü en iyi şekilde tanıtın.
          </p>
          <Button
            variant="primary"
            onClick={() => alert("Başlıyoruz!")}
            ariaLabel="Hemen başla butonu"
          >
            Hemen Başla
          </Button>
        </div>
        <div className={styles.imageContent} aria-label="Ürün görseli">
          <img
            src={productImg}
            alt="Ürün tanıtım görseli"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

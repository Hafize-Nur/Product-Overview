import React from "react";
import styles from "./Features.module.scss";
import Card from "../../components/Card/Card";

const Features = () => {
  const featureList = [
    {
      icon: "⚡",
      title: "Yüksek Performans",
      description: "Hızlı, optimize ve kullanıcı dostu bir deneyim sunar.",
    },
    {
      icon: "🎨",
      title: "Modern Tasarım",
      description: "Minimal ve estetik bir arayüz ile dikkat çeker.",
    },
    {
      icon: "🔒",
      title: "Güvenli Yapı",
      description: "Verileriniz en üst düzey güvenlik standartlarıyla korunur.",
    },
  ];

  return (
    <section className={styles.features} aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading" className={styles.heading}>
          Ürünün Öne Çıkan Özellikleri
        </h2>
        <div
          className={styles.grid}
          role="list"
          aria-label="Ürün özellikleri listesi"
        >
          {featureList.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

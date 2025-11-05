import React from "react";
import "./Pricing.scss";
import Button from "../../components/Button/Button";
import officePc from "../../assets/office_pc.jpeg";
import gamingPc from "../../assets/gaming_pc.jpeg";
import workstation from "../../assets/workstation_pc.jpeg";
const products = [
  {
    id: 1,
    name: "Office PC",
    description: "Günlük kullanım ve ofis işleri için ideal.",
    price: "12.999₺",
    image: officePc,
  },
  {
    id: 2,
    name: "Gaming PC",
    description: "Yüksek performanslı oyun deneyimi için tasarlandı.",
    price: "29.499₺",
    image: gamingPc,
  },
  {
    id: 3,
    name: "Workstation",
    description: "Profesyonel tasarım ve mühendislik uygulamaları için.",
    price: "45.999₺",
    image: workstation,
  },
];

const Pricing = () => {
  return (
    <section className="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <h2 id="pricing-heading" className="pricing__title">
          Ürünler 💻
        </h2>

        <div className="pricing__grid" role="list">
          {products.map((item) => (
            <article
              key={item.id}
              className="pricing-card"
              role="listitem"
              aria-labelledby={`product-${item.id}-name`}
            >
              <img
                src={item.image}
                alt={`${item.name} ürün görseli`}
                className="pricing-card__img"
                loading="lazy"
              />
              <h3 id={`product-${item.id}-name`} className="pricing-card__plan">
                {item.name}
              </h3>
              <p className="pricing-card__desc">{item.description}</p>
              <p
                className="pricing-card__price"
                aria-label={`Fiyat: ${item.price}`}
              >
                {item.price}
              </p>
              <Button
                variant="primary"
                onClick={() => alert("Sepete eklendi!")}
                ariaLabel={`${item.name} ürününü sepete ekle`}
              >
                Satın Al
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

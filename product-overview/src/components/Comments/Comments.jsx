import React from "react";
import "./Comments.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const comments = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Frontend Developer",
    comment:
      "Bu ürün tasarımıyla gerçekten fark yaratıyor. Kullanımı son derece kolay!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Elif Demir",
    role: "UX Designer",
    comment:
      "Modern ve sade bir yapı. Göz yormadan güçlü bir izlenim bırakıyor.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    role: "Proje Yöneticisi",
    comment:
      "Kullanıcı deneyimi açısından çok başarılı. Ekibimle birlikte sık sık kullanıyoruz.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Zeynep Kılıç",
    role: "Backend Developer",
    comment:
      "Basit, etkili ve performanslı! Projemizde referans aldık, harika iş.",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

const Comments = () => {
  return (
    <section className="comments" aria-labelledby="comments-heading">
      <div className="container">
        <h2 id="comments-heading" className="comments__title">
          Kullanıcı Yorumları 💬
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="comments__slider"
          aria-label="Kullanıcı yorumları carousel"
        >
          {comments.map((item) => (
            <SwiperSlide
              key={item.id}
              role="group"
              aria-label={`${item.name} yorumu`}
            >
              <article className="comment-card">
                <img
                  src={item.image}
                  alt={`${item.name} profil fotoğrafı`}
                  className="comment-card__img"
                  loading="lazy"
                />
                <h3 className="comment-card__name">{item.name}</h3>
                <p
                  className="comment-card__role"
                  aria-label={`Rol: ${item.role}`}
                >
                  {item.role}
                </p>
                <blockquote
                  className="comment-card__text"
                  cite={`${item.name}`}
                >
                  "{item.comment}"
                </blockquote>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Comments;

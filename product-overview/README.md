🌐Frontend Ürün Tanıtım Sayfası
Bu proje,React.js kullanılarak oluşturulmuştur.Bu proje, responsive, light/dark tema desteklive bileşen tabanlı bir modern tanıtım (landing) sayfasıdır.  
Tasarımda SCSS modülleri kullanılmıştır.

🚀 Özellikler

Hero alanı (Başlık, alt metin ve CTA butonu)

Özellikler (Features) bölümü - Grid yapısı ile düzenlendi

Yorumlar (Comments) bölümü - Slider’lı kullanıcı yorumları

Footer - Sosyal medya bağlantıları, yukarı çık butonu

SCSS değişken ve global yapı (variables.scss + global.scss)

BEM yapısına uygun SCSS sınıflandırması

Responsive tasarım (320px, 768px, 1440px breakpoint kontrolleri)

UI bileşenleri: Button, Card, Input, Modal, Accordion

Light/Dark tema desteği

İletişim Formu (yalancı submit + temel doğrulama)

Fiyat Kartları (Pricing Section)

Lighthouse raporu uyumlu yapı

🛠️ Kullanılan Teknolojiler

React.js

SCSS (BEM Methodology)

JavaScript (ES6+)

HTML5 / CSS3

ARIA (Erişilebilirlik standartları)

Lighthouse optimizasyonu
src/
┣assets/
┃ ┣screenshots/
┣ components/
┃ ┣Accordion/
┃ ┣ Button/
┃ ┣ Card/
┃ ┣ Comments/
┃ ┣ ContactForm/
┃ ┣ Footer/
┃ ┣ Button/
┃ ┣ Input/
┃ ┣ Modal/
┃ ┣Navbar/
┃ ┣ThemeToggle.jsx
┃ ┗ Accordion/
┣ sections/
┃ ┣Contact/
┃ ┣FAQ/
┃ ┣Features/
┃ ┣Hero/
┃ ┣Pricing/
┣ styles/
┃ ┣ variables.scss
┃ ┣ global.scss
┗ App.jsx

Projenin ekran görüntüleri assets klasörünün içindedir.

Bağımlılıkları yüklemek için
npm install

projeyi çalıştırmak için
npm run dev

projeyi başlatmak için
npm start

Tarayıcıda http://localhost:3000 portunda proje açılacaktır.

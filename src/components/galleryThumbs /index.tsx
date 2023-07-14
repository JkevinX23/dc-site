// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

import { useEffect, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const GalleryThumbsComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function loadImages() {
      await Promise.resolve(setTimeout(() => {}, 600));
      const imgs = [
        'https://img.freepik.com/fotos-gratis/foto-de-alto-angulo-da-praia-e-do-oceano-no-norte-do-brasil-ceara-fortaleza-cumbuco-parnaiba_181624-7512.jpg?w=1380&t=st=1688317570~exp=1688318170~hmac=da0fabc3e913137227b54762b39d75119789a5a04c2f82db45c615db8533224f',
        'https://img.freepik.com/fotos-gratis/bela-praia-tropical-mar-e-mar-com-palmeira-de-coco-na-hora-do-nascer-do-sol_74190-7454.jpg?w=1060&t=st=1688317585~exp=1688318185~hmac=a7c1089bb86143e9547f1b725736ae36b2e8ccd5ac5e895a3e0e1c878304136f',
        'https://img.freepik.com/fotos-gratis/bela-vista-da-praia-coberta-de-arvores-pelo-oceano-ondulado-capturado-em-pipa-brasil_181624-7873.jpg?w=1380&t=st=1688317598~exp=1688318198~hmac=5086183383154a67cd2c71a16557e4e5f9ea5092cb8fd56cc4a8be6fc22e7da0',
        'https://img.freepik.com/fotos-gratis/praia-tropical_74190-188.jpg?w=1380&t=st=1688317611~exp=1688318211~hmac=91da603000ea988a89e879894cba229171c72338b2b20944aad0e5ad6fe278d0',
        'https://img.freepik.com/fotos-premium/uma-praia-ao-por-do-sol-com-uma-praia-e-o-por-do-sol_894766-1352.jpg?w=1380',
        'https://img.freepik.com/fotos-gratis/vista-fascinante-do-litoral-com-areia-branca-e-aguas-cristalinas-turquesa-na-indonesia_181624-18082.jpg?w=1380&t=st=1688317643~exp=1688318243~hmac=58585f11837a9d89bfd894eb454db6efe45ef4d386bc6b944e8afa10e344e7e2',
        'https://img.freepik.com/fotos-gratis/bela-praia-tropical-mar-e-oceano-com-coqueiro-e-guarda-chuva-e-cadeira-no-ceu-azul_74190-8827.jpg?w=1380&t=st=1688317670~exp=1688318270~hmac=205eb6bc713f82757d586783ee2d32bbf2951a15ce6b9bd91e1b7fd4299908f1',
        'https://img.freepik.com/fotos-gratis/foto-de-alto-angulo-de-uma-estrada-com-grades-de-madeira-que-levam-ao-mar_181624-20319.jpg?w=1380&t=st=1688317681~exp=1688318281~hmac=2e87e7a95af149a86a3d915f9b3f593c23d68947949073b0fe98a1fefc78d7af',
        'https://img.freepik.com/fotos-gratis/bela-foto-panoramica-de-uma-cidade-praia-e-mar_181624-27725.jpg?w=740&t=st=1688317691~exp=1688318291~hmac=9715a3eca4da7d2351a9b040570dd6514db1f9d79ea1e9d5b19f87e0ee00d6cc',
        'https://img.freepik.com/fotos-gratis/ilha-paradisiaca-bonita-com-praia-e-mar_74190-6626.jpg?w=1380&t=st=1688317708~exp=1688318308~hmac=4d2bce87fe98834201e5023c5f02f08e2643a3e3dd986b28baabab0e81b031f1',
      ];
      setImages(imgs);
    }
    loadImages();
  }, []);

  return (
    <>
      <Swiper
        loop
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={3}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GalleryThumbsComponent;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

// Prepare image data for flexibility
const images = [
  {
    src: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaHxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'fishies',
  },
  {
    src: 'https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'rabbits',
  },
  {
    src: 'https://images.unsplash.com/photo-1527720255604-b27935ade401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVtYXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'mountain lion'
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1664304400278-8152cba3da20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVvcGFyZHxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'leopard'
  },

  {
    src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'african lion'
  }
];

function Home() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect="fade"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className='img-fluid'
            src={image.src}
            alt={image.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Home;

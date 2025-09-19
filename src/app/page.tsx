'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import igate from "@/image/igate.jpg"
import crowd from "@/image/crowd_igate.jpg"
import wipin from '@/image/wipin_diparani.jpg'
import Link from "next/link";

export default function Home() {
  const images = [
    { src: igate, alt: 'igate2024' },
    { src: crowd, alt: 'crowd in igate' },
    { src: wipin, alt: 'wipin diparani admin' }
  ]

  return (
    <main className="space-y-40 m-7">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{delay: 3000}}
        pagination={{clickable: true}}
        navigation
        loop
        className="rounded-xl overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover" 
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <section className="max-w-3xl mx-auto px-4 mt-10 text-center space-y-5">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Informatics Gathering 2025
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a turpis
          odio. Proin quis consequat metus. Etiam accumsan tellus vel eros suscipit
          mattis. Vestibulum rutrum consectetur dui vulputate suscipit. Vivamus
          sagittis felis a metus pharetra, nec facilisis lorem euismod. Nam aliquet
          quam eget risus consequat varius...
        </p>

        <Link href={'/about'}>
          <Button size={'lg'} className="cursor-pointer">
            About
          </Button>
        </Link>
      </section>

      <section className="max-w-3xl mx-auto px-4 mt-10 text-center space-y-5">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Get Your Ticket Here!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a turpis
          odio. Proin quis consequat metus. Etiam accumsan tellus vel eros suscipit
          mattis. Vestibulum rutrum consectetur dui vulputate suscipit. Vivamus
          sagittis felis a metus pharetra, nec facilisis lorem euismod. Nam aliquet
          quam eget risus consequat varius...
        </p>

        <Link href={'/ticket'}>
          <Button size={'lg'} className="cursor-pointer">
            Buy Ticket
          </Button>
        </Link>
      </section>
    </main>
  );
}

'use client';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "@/components/SplitText";

import igate from "@/image/igate.jpg";
import crowd from "@/image/crowd_igate.jpg";
import wipin from "@/image/wipin_diparani.jpg";



export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [popUpClosed, setPopUpClosed] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    } else {
      setPopUpClosed(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => setPopUpClosed(true), 300); 
  };

  const images = [
    { src: igate, alt: "igate2024" },
    { src: crowd, alt: "crowd in igate" },
    { src: wipin, alt: "wipin diparani admin" },
  ];

  return (
    <main className="space-y-40 mt-7 mb-7">
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50 h-full"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}>

            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-md text-center space-y-4"
              initial={{scale:0.8, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              exit={{scale: 0.8, opacity: 0}}
              transition={{duration: 0.3, ease: "easeIn"}}>

              <h3 className="text-2xl font-bold">Welcome To the 90's</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Place Where You Explore the Past
              </p>
              <Button onClick={handleClose}>Close</Button>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {popUpClosed && (
        <>
          <Navbar />

          <motion.div>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
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
          </motion.div>  



            <section className="max-w-3xl mx-auto px-4 mt-10 text-center space-y-3">
              <SplitText
                text="Informatics Gathering 2025"
                className="text-3xl font-bold text-black dark:text-white"
                delay={50}
                duration={0.1}
               />
              <motion.p 
                className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Expect Chaos in Every Harmony
              </motion.p>

              <Link href={"/about"}>
                <Button size={"lg"} className="cursor-pointer">
                  About Us
                </Button>
              </Link>
            </section>

            <motion.section 
              className="max-w-3xl mx-auto px-4 mt-7 text-center space-y-5"
              initial={{opacity:0, scale:0.5}}
              whileInView={{opacity:1, scale:[0.5, 1.2, 1]}}
              transition={{duration: 0.3}}>
              <Link href={"/ticket"}>
                <Button size={"lg"} className="cursor-pointer p-8 text-2xl underline">
                  Get Your Ticket Now!
                </Button>
              </Link>
            </motion.section> 
        </>
      )}
    </main>
  );
}

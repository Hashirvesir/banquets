"use client";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useLayoutEffect, useCallback } from "react";
import SliderCard from "./SliderCard";

const Slider = () => {

  const cards = [
    {
      url: "slider1.png",
      title: "Blissful Haven Events",
      id: 1,
    },
    {
      url: "slider5.png",
      title: "Radiant Union Halls",
      id: 2,
    },
    {
      url: "slider3.png",
      title: "Majestic Love Pavilion",
      id: 3,
    },
    {
      url: "slider4.png",
      title: "Radiant Union Halls",
      id: 4,
    },
    {
      url: "slider2.png",
      title: "Grand Harmony Estates",
      id: 5,
    },
    {
      url: "slider3.png",
      title: "Grand Harmony Estates",
      id: 6,
    },
    {
      url: "slider5.png",
      title: "Radiant Union Halls",
      id: 7,
    },
    {
      url: "slider5.png",
      title: "Majestic Love Pavilion",
      id: 7,
    },
    {
      url: "slider5.png",
      title: "Title 7",
      id: 7,
    },
    {
      url: "slider1.png",
      title: "Title 7",
      id: 7,
    }
    ,
    {
      url: "slider3.png",
      title: "Grand Harmony Estates",
      id: 6,
    },
    {
      url: "slider3.png",
      title: "Grand Harmony Estates",
      id: 6,
    },
    {
      url: "slider3.png",
      title: "Grand Harmony Estates",
      id: 6,
    },
    {
      url: "slider3.png",
      title: "Grand Harmony Estates",
      id: 6,
    }
  ];



  const targetRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    if (targetRef.current) {
      resizeObserver.observe(targetRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [targetRef, resizePageHeight]);

  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const physics = { damping: 50, mass:1, stiffness: 100 };
  const spring = useSpring(scrollYProgress, physics);

  const x = useTransform(spring, [0, 1], ["1%", "-100%"]);

  return (
    <section ref={targetRef} className="relative md:h-[130vh] h-[70vh]">
      <div
        style={{ height: pageHeight }}
        className="sticky top-0 flex md:h-[80vh] h-[58vh] items-center overflow-hidden"
      >
        <motion.div
          style={{ x }}
          // transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="flex gap-9"
        >
          {cards.map((card,index) => (
            <SliderCard  card={card} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;

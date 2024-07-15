"use client";

import { useEffect, useState, useRef } from "react";

const Carousal = ({ itemList, Component }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const scrollLeft = carousel.scrollLeft;
        const itemWidth = carousel.scrollWidth / itemList.length;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setActiveIndex(newIndex);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const scrollToItem = (index) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.scrollWidth / itemList.length;
      const newScrollLeft = itemWidth * index;
      carousel.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      setActiveIndex(index);
    }
  };
  const handlePrevious = () => {
    if (activeIndex > 0) {
      scrollToItem(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < itemList.length - 1) {
      scrollToItem(activeIndex + 1);
    }
  };
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          className=" text-2xl text-teal-100 p-2 rounded-full"
        >
          ❮
        </button>
        <div
          ref={carouselRef}
          className="carousel py-10 px-5 w-full gap-6 overflow-x-auto"
        >
          {itemList.map((item, key) => (
            <div id={key} key={key} className="carousel-item inline-block">
              <Component data={item} />
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className=" text-2xl text-teal-100 p-2 rounded-full"
        >
          ❯
        </button>
      </div>
      <ul className="flex w-full justify-center gap-2 py-2">
        {itemList.map((_, key) => {
          return (
            <li
              key={key}
              onClick={() => scrollToItem(key)}
              className={`border-2 p-2 rounded-full ${
                activeIndex === key
                  ? "bg-teal-100 border-teal-100"
                  : "border-teal-100"
              }`}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Carousal;

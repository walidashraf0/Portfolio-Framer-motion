import React from "react";
import { Thumbs, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
const Body = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
          damping: 20,
        }}
        className="w-full"
      >
        <div className="flex justify-between items-start py-[64px] px-[24px] max-md:items-center max-md:justify-center max-md:!flex-col gap-11">
          <div className="flex flex-col gap-7">
            <h2 className="font-semibold text-xl">Branding | Image Making</h2>
            <h1 className="font-bold text-6xl">Visual Designer</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem distinctio sint blanditiis ipsum totam obcaecati dicta
              error facere, explicabo qui atque rerum, nobis eos! Aliquid quo
              distinctio accusantium quidem voluptatem.
            </p>
            <button className="p-4 text-white bg-[#2D2D2D] w-[150px] h-[55px] flex items-center cursor-pointer justify-center">
              Contact
            </button>
          </div>
          <div className="flex w-full">
            <img src="/1.png" alt="hero" />
          </div>
        </div>
      </motion.section>

      {/* Second Section */}
      <section className="w-full">
        <div className="flex justify-between items-start py-[64px] px-[24px] max-md:items-center max-md:justify-center max-md:!flex-col gap-11">
          <div className="flex w-full justify-start max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.3,
                damping: 20,
              }}
              className="w-[200px]"
              src="/2.png"
              alt="hero"
            />
          </div>
          <div className="flex flex-col gap-10 items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.3,
                damping: 20,
              }}
              className="font-semibold text-xl text-center"
            >
              Branding | Image Making
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.4,
                damping: 20,
              }}
              className="font-bold text-7xl text-center w-full"
            >
              Visual Designer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="text-sm w-full text-gray-700 text-center"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem distinctio sint blanditiis ipsum totam obcaecati dicta
              error facere, explicabo qui atque rerum, nobis eos! Aliquid quo
              distinctio accusantium quidem voluptatem.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.7,
                damping: 20,
              }}
              className="p-4 text-white bg-[#2D2D2D] w-[150px] h-[55px] flex items-center cursor-pointer justify-center"
            >
              Contact
            </motion.button>
          </div>
          <div className="flex w-full justify-end max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                damping: 20,
              }}
              className="w-[200px]"
              src="/3.png"
              alt="hero"
            />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="w-full">
        <div className="flex justify-between items-center py-[42px] px-[24px]">
          <div className="flex gap-7 max-md:flex-col max-md:justify-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img src="/4.png" alt="" className="w-30 mb-2.5" />
              <h2 className="font-semibold text-xl text-black">
                Product Design
              </h2>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.7,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img src="/5.png" alt="" className="w-30 mb-2.5" />
              <h2 className="font-semibold text-xl text-black">
                Visual Design
              </h2>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img src="/6.png" alt="" className="w-30 mb-2.5" />
              <h2 className="font-semibold text-xl text-black">
                Art Direction
              </h2>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="w-full">
        <div className="w-full grid grid-cols-2 gap-10 max-md:grid-cols-1 py-[42px] px-[24px]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex gap-5 items-center justify-center"
          >
            <img src="/4.png" alt="" className="w-30" />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="font-semibold text-xl text-black">
                Product Design
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
              damping: 20,
            }}
            className="flex gap-5 items-center justify-center"
          >
            <img src="/5.png" alt="" className="w-30" />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="font-semibold text-xl text-black">
                Visual Design
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
              damping: 20,
            }}
            className="flex gap-5 items-center justify-center"
          >
            <img src="/6.png" alt="" className="w-30" />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="font-semibold text-xl text-black">
                Art Direction
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
              damping: 20,
            }}
            className="flex gap-5 items-center justify-center"
          >
            <img src="/9.png" alt="" className="w-30" />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="font-semibold text-xl text-black">
                Art Direction
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="w-full py-6">
        <div className="py-5">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="text-4xl font-semibold text-center"
          >
            Latest Work
          </motion.h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:text-center max-md:justify-center max-md:items-center py-[42px] px-[24px]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-5 justify-center items-center w-full"
          >
            <img src="/10.jpeg" alt="" className="w-[400px]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl text-black">
                Product Design
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-5 justify-center items-center w-full"
          >
            <img src="/10.jpeg" alt="" className="w-[400px]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl text-black">
                Visual Design
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-5 justify-center items-center w-full"
          >
            <img src="/11.jpeg" alt="" className="w-[400px]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl text-black">Art Design</h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-5 justify-center items-center w-full"
          >
            <img src="/12.jpeg" alt="" className="w-[400px]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl text-black">
                Product Design
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-5 justify-center items-center w-full"
          >
            <img src="/13.jpeg" alt="" className="w-[400px]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl text-black">
                Visual Design
              </h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-5 justify-center items-center w-full"
          >
            <img src="/14.jpeg" alt="" className="w-[400px]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl text-black">Art Design</h2>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sixth Section */}
      <section className="flex gap-20 items-center py-[42px] px-[24px] justify-center max-sm:px-0 max-sm:gap-0 max-sm:!justify-between">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          src="/google.svg"
          alt=""
          className="max-sm:w-16"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
            damping: 20,
          }}
          src="/nike.svg"
          alt=""
          className="max-sm:w-14"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.7,
            damping: 20,
          }}
          src="/samsung.svg"
          alt=""
          className="max-sm:w-[70px]"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.9,
            damping: 20,
          }}
          src="/apple.svg"
          alt=""
          className="max-sm:w-7"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.11,
            damping: 20,
          }}
          src="/adidas.svg"
          alt=""
          className="max-sm:w-11"
        />
      </section>

      {/* Seventh Section */}
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.3,
          damping: 20,
        }}
        className="w-full"
      >
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="text-center text-4xl font-semibold py-[42px] px-[24px]"
        >
          Testimonial
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="w-full"
        >
          <Swiper
            effect="fade"
            modules={[Thumbs, Grid]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            loop={false}
            scrollbar={{
              draggable: true,
            }}
            autoplay={true}
            className="py-[42px] px-[24px]"
          >
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-lg w-full shadow-lg flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae maiores praesentium dolor excepturi aspernatur commodi
                  mollitia voluptatum perspiciatis repellendus, impedit soluta
                  sed architecto illo ipsum qui cum incidunt optio.
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-14 rounded-full border border-[#f0f8ff]"
                    src="/16.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStar.svg" alt="" />
                    <div>
                      <p className="text-md">Gemma Nolen</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-lg w-full shadow-lg flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae maiores praesentium dolor excepturi aspernatur commodi
                  mollitia voluptatum perspiciatis repellendus, impedit soluta
                  sed architecto illo ipsum qui cum incidunt optio.
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-14 rounded-full border border-[#f0f8ff]"
                    src="/16.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStar.svg" alt="" />
                    <div>
                      <p className="text-md">Gemma Nolen</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-lg w-full shadow-lg flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae maiores praesentium dolor excepturi aspernatur commodi
                  mollitia voluptatum perspiciatis repellendus, impedit soluta
                  sed architecto illo ipsum qui cum incidunt optio.
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-14 rounded-full border border-[#f0f8ff]"
                    src="/16.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStar.svg" alt="" />
                    <div>
                      <p className="text-md">Gemma Nolen</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-lg w-full shadow-lg flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae maiores praesentium dolor excepturi aspernatur commodi
                  mollitia voluptatum perspiciatis repellendus, impedit soluta
                  sed architecto illo ipsum qui cum incidunt optio.
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-14 rounded-full border border-[#f0f8ff]"
                    src="/16.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStar.svg" alt="" />
                    <div>
                      <p className="text-md">Gemma Nolen</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-lg w-full shadow-lg flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae maiores praesentium dolor excepturi aspernatur commodi
                  mollitia voluptatum perspiciatis repellendus, impedit soluta
                  sed architecto illo ipsum qui cum incidunt optio.
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-14 rounded-full border border-[#f0f8ff]"
                    src="/16.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStar.svg" alt="" />
                    <div>
                      <p className="text-md">Gemma Nolen</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-lg w-full shadow-lg flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae maiores praesentium dolor excepturi aspernatur commodi
                  mollitia voluptatum perspiciatis repellendus, impedit soluta
                  sed architecto illo ipsum qui cum incidunt optio.
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-14 rounded-full border border-[#f0f8ff]"
                    src="/16.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStar.svg" alt="" />
                    <div>
                      <p className="text-md">Gemma Nolen</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-lg w-full shadow-lg flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae maiores praesentium dolor excepturi aspernatur commodi
                  mollitia voluptatum perspiciatis repellendus, impedit soluta
                  sed architecto illo ipsum qui cum incidunt optio.
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-14 rounded-full border border-[#f0f8ff]"
                    src="/16.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStar.svg" alt="" />
                    <div>
                      <p className="text-md">Gemma Nolen</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-lg w-full shadow-lg flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae maiores praesentium dolor excepturi aspernatur commodi
                  mollitia voluptatum perspiciatis repellendus, impedit soluta
                  sed architecto illo ipsum qui cum incidunt optio.
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-14 rounded-full border border-[#f0f8ff]"
                    src="/16.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStar.svg" alt="" />
                    <div>
                      <p className="text-md">Gemma Nolen</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-lg w-full shadow-lg flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae maiores praesentium dolor excepturi aspernatur commodi
                  mollitia voluptatum perspiciatis repellendus, impedit soluta
                  sed architecto illo ipsum qui cum incidunt optio.
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-14 rounded-full border border-[#f0f8ff]"
                    src="/16.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStar.svg" alt="" />
                    <div>
                      <p className="text-md">Gemma Nolen</p>
                      <p className="text-sm text-gray-500">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.section>

      {/* Eighth Section */}
      <section className="w-full">
        <div className="flex justify-between items-center w-full py-[42px] px-[24px] gap-5 max-md:flex-col">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col w-[50%] max-md:w-full"
          >
            <h1 className="text-start font-semibold text-4xl pb-[24px]">
              Let's Work Together
            </h1>
            <p className="text-sm text-gray-500 mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              blanditiis perferendis possimus ducimus, maxime labore? Natus
              cupiditate tenetur quis voluptates eligendi nemo ipsam fuga neque
              magnam. Nesciunt temporibus sint numquam.
            </p>
            <div className="flex gap-5 justify-start items-center">
              <img src="/discord.svg" alt="" />
              <img src="/dribbble.svg" alt="" />
              <img src="/fb.svg" alt="" />
              <img src="/insta.svg" alt="" />
              <img src="/behance.svg" alt="" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-3 w-[50%] items-start justify-start max-md:w-full"
          >
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-4 bg-[#f0f8ff] outline-0 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-4 bg-[#f0f8ff] outline-0 w-full"
            />
            <button className="p-4 text-white bg-[#2D2D2D] w-[150px] h-[55px] flex items-center cursor-pointer justify-center">
              Submit
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Body;

"use client";
import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercor, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";

export default function Home() {
  return (
    <>
      <section className="bg-[url('/img/banner.jpg')]  bg-no-repeat bg-center bg-cover">
        <div className="w-[90%] m-auto">
          <div className=" md:w-[70%] pt-40 pb-5  lg:pt-52 lg:pb-60">
            <h1 className="text-4xl md:text-6xl lg:text-8xl lg:ml-10 text-white font-bold ">
              Creative Work Idea
            </h1>
            <p className="text-lg text-white lg:ml-10 font-medium pt-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
            <div className="lg:ml-10 ">
              <button className="px-10 py-4 mt-5 mr-5 bg-white text-xl font-normal">
                About Company
              </button>
              <button className="px-10 py-4 mt-5 bg-white text-xl font-normal">
                About Company
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden xl:block">
        <div className="w-[80%] m-auto">
          <div className="py-20">
            <h2 className="text-5xl text-[#323232] font-bold text-center">
              What we do
            </h2>
            <hr className=" my-5  h-2 border-t-0 bg-[#323232] opacity-100 dark:opacity-50 mx-[40%] lg:mx-[47%]" />

            <div className="w-[80%] m-auto">
              <Swiper
                slidesPerView={3}
                autoplay={{
                  delay: 2000,
                }}
              >
                <SwiperSlide className="border-2 p-10 hover:border-slate-900 m-2">
                  <img src="/img/we1.png" alt="" className="w-[30%]" />
                  <h3 className="text-3xl font-bold text-[#292929] pt-5">
                    WEBSITE DESIGN
                  </h3>
                  <p className="text-lg text-[#292929] font-medium pt-2">
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which
                  </p>
                  <div className="w-full text-right">
                    <button className="bg-[#464646] py-3 px-10 mt-5 ">
                      Read More
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="border-2 p-10 hover:border-slate-900 m-2">
                  <img src="/img/we2.png" alt="" className="w-[30%]" />
                  <h3 className="text-3xl font-bold text-[#292929] pt-5">
                    APP DEVELMONT
                  </h3>
                  <p className="text-lg text-[#292929] font-medium pt-2">
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which
                  </p>
                  <div className="w-full text-right">
                    <button className="bg-[#464646] py-3 px-10 mt-5 ">
                      Read More
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="border-2 p-10 hover:border-slate-900 m-2">
                  <img src="/img/we3.png" alt="" className="w-[30%]" />
                  <h3 className="text-3xl font-bold text-[#292929] pt-5">
                    WEBSITE DESIGN
                  </h3>
                  <p className="text-lg text-[#292929] font-medium pt-2">
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which
                  </p>
                  <div className="w-full text-right">
                    <button className="bg-[#464646] py-3 px-10 mt-5 ">
                      Read More
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="border-2 p-10 hover:border-slate-900 m-2">
                  <img src="/img/we3.png" alt="" className="w-[30%]" />
                  <h3 className="text-3xl font-bold text-[#292929] pt-5">
                    WEBSITE DESIGN
                  </h3>
                  <p className="text-lg text-[#292929] font-medium pt-2">
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which
                  </p>
                  <div className="w-full text-right">
                    <button className="bg-[#464646] py-3 px-10 mt-5 ">
                      Read More
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="border-2 p-10 hover:border-slate-900 m-2">
                  <img src="/img/we3.png" alt="" className="w-[30%]" />
                  <h3 className="text-3xl font-bold text-[#292929] pt-5">
                    WEBSITE DESIGN
                  </h3>
                  <p className="text-lg text-[#292929] font-medium pt-2">
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which
                  </p>
                  <div className="w-full text-right">
                    <button className="bg-[#464646] py-3 px-10 mt-5 ">
                      Read More
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/img/about_bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="w-[90%] m-auto pt-20 pb-[29rem]">
          <div>
            <h2 className="text-5xl text-white font-bold text-center">
              About Company
            </h2>
            <hr className=" my-5  h-2 border-t-0 bg-white opacity-100 dark:opacity-50 mx-[40%] lg:mx-[47%]" />
            <p>
              <p className="text-lg text-white font-medium pt-2 text-center">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have
              </p>
            </p>
          </div>
        </div>
      </section>

      <section className="hidden lg:block">
        <div className="w-[90%] m-auto py-20">
          <h2 className="text-5xl text-[#323232] font-bold pl-5">
            We Have Done Portfolio
          </h2>
          <hr className=" my-5  h-2 border-t-0 bg-[#323232] opacity-100 dark:opacity-50 ml-5 lg:mr-[93%]" />
          <div className="flex">
            <div className="md:w-[50%] h-fit group">
              <div className="relative overflow-hidden   m-2 lg:m-5">
                <img className=" " src="img/prot1.png" alt="" />
                <div className="absolute h-[50%] w-full bg-white flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-[#323232]">
                    <h3>Carrency Dashbord</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[50%] h-fit group">
              <div className="relative overflow-hidden   m-2 lg:m-5">
                <img className=" " src="img/prot1.png" alt="" />
                <div className="absolute h-[50%] w-full bg-white flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-[#323232]">
                    <h3>Carrency Dashbord</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="md:w-[50%] h-fit group">
              <div className="relative overflow-hidden   m-2 lg:m-5">
                <img className=" " src="img/prot1.png" alt="" />
                <div className="absolute h-[50%] w-full bg-white flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-[#323232]">
                    <h3>Carrency Dashbord</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[50%] h-fit group">
              <div className="relative overflow-hidden   m-2 lg:m-5">
                <img className=" " src="img/prot1.png" alt="" />
                <div className="absolute h-[50%] w-full bg-white flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-[#323232]">
                    <h3>Carrency Dashbord</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#323232]">
        <div className="py-20 w-[90%] m-auto">
          <h2 className="text-5xl text-white font-bold ">Why Chose us</h2>
          <hr className=" my-5  h-2 border-t-0 bg-white opacity-100 dark:opacity-50 mr-[40%] lg:mr-[93%]" />

          <div className="md:flex">
            <div className="md:w-[33.3%] lg:w-[40%] mt-5 md:mt-0">
              <img src="/img/chose1.png" alt="" />
              <h3 className="text-3xl text-white font-bold">Project Done</h3>
              <h2 className="text-5xl text-white font-bold">1000+</h2>
              <button className="bg-white text-[#323232] text-xl py-3 px-10 mt-5">
                Read More
              </button>
            </div>
            <div className="md:w-[33.3%] lg:w-[40%] mt-5 md:mt-0">
              <img src="/img/chose1.png" alt="" />
              <h3 className="text-3xl text-white font-bold">Project Done</h3>
              <h2 className="text-5xl text-white font-bold">1000+</h2>
              <button className="bg-white text-[#323232] text-xl py-3 px-10 mt-5">
                Read More
              </button>
            </div>
            <div className="md:w-[33.3%] lg:w-[30%] mt-5 md:mt-0">
              <img src="/img/chose1.png" alt="" />
              <h3 className="text-3xl text-white font-bold">Project Done</h3>
              <h2 className="text-5xl text-white font-bold">1000+</h2>
              <button className="bg-white text-[#323232] text-xl py-3 px-10 mt-5">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[90%] m-auto">
          <div className="lg:flex py-10">
            <div className="lg:w-[50%]  mr-2">
              <h2 className="text-5xl text-[#323232] font-bold ">
                Get In Touch
              </h2>
              <hr className=" my-5  h-2 border-t-0 bg-[#323232] opacity-100 dark:opacity-50 mr-[40%] lg:mr-[85%]" />
              <form>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-5 mb-5 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-5 mb-5 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-10 mb-5 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#323232] hover:bg-[#6e6e6e] text-white font-bold py-5 px-14 rounded"
                >
                  SEND NOW
                </button>
              </form>
            </div>
            <div className="lg:w-[50%]  ml-2">
              <h2 className="text-5xl text-[#323232] font-bold ">
                Get In Touch
              </h2>
              <hr className=" my-5  h-2 border-t-0 bg-[#323232] opacity-100 dark:opacity-50 mr-[40%] lg:mr-[85%]" />
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper mt-20 "
              >
                <SwiperSlide className="border shadow-2xl mt-10 ">
                  <div className="flex">
                    <div className="w-[40%] pl-20 relative bottom-10 z-20">
                      <img src="/img/clint.jpg" className="m-auto " alt="" />
                    </div>
                    <div className="w-[40%] ">
                      <h3 className="text-2xl pt-5 font-semibold text-[#323232]">
                        Deno
                      </h3>
                    </div>
                    <div className="w-[20%] ">
                      <img
                        src="/img/icon.png"
                        className="m-auto pt-14 pr-10"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-lg text-[#323232] px-10 pb-10 text-center  ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem IpsumIt is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum
                  </p>
                </SwiperSlide>
                <SwiperSlide className="border shadow-2xl mt-10 ">
                  <div className="flex">
                    <div className="w-[40%] pl-20 relative bottom-10 z-20">
                      <img src="/img/clint.jpg" className="m-auto " alt="" />
                    </div>
                    <div className="w-[40%] ">
                      <h3 className="text-2xl pt-5 font-semibold text-[#323232]">
                        Deno
                      </h3>
                    </div>
                    <div className="w-[20%] ">
                      <img
                        src="/img/icon.png"
                        className="m-auto pt-14 pr-10"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-lg text-[#323232] px-10 pb-10 text-center  ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem IpsumIt is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum
                  </p>
                </SwiperSlide>
                <SwiperSlide className="border shadow-2xl mt-10 ">
                  <div className="flex">
                    <div className="w-[40%] pl-20 relative bottom-10 z-20">
                      <img src="/img/clint.jpg" className="m-auto " alt="" />
                    </div>
                    <div className="w-[40%] ">
                      <h3 className="text-2xl pt-5 font-semibold text-[#323232]">
                        Deno
                      </h3>
                    </div>
                    <div className="w-[20%] ">
                      <img
                        src="/img/icon.png"
                        className="m-auto pt-14 pr-10"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-lg text-[#323232] px-10 pb-10 text-center  ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem IpsumIt is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

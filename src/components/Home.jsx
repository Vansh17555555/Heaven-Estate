import { Carousel } from "flowbite-react";
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

export const Home = () => {
  return (
    <>
      <section className="bg-neutralSilver" id="home">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
          <Carousel className="w-full mx-auto">
            <div className="my-14 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div className="md:w-1/2">
                <img src={banner1} alt="" />
              </div>
              <div className="md:w-1/2 flex flex-col items-center justify-center md:items-start">
                <h1 className="home-h1">
                  Experience Real Estate in a  <br />{" "}
                  <span className="text-brandPrimary leading-snug">
                    New Dimension
                  </span>
                </h1>
                <p className="text-neutralGrey text-base mb-8 text-center md:text-left">
                Are you interested in exploring properties virtually through AR and 3D visualization?
                </p>
                <div className="flex justify-center items-center gap-4">
                  <button className="btn-primary">
                    <span className="flex">Download <BiLogoPlayStore size={'20px'} className="my-1" /></span>
                  </button>
                  <button className="btn-primary">
                    <span className="flex">Download <FaAppStoreIos size={'20px'} className="my-1" /></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="my-14 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div className="md:w-1/2">
                <img src={banner2} alt="" />
              </div>
              <div className="md:w-1/2 flex flex-col items-center justify-center md:items-start">
                <h1 className="home-h1">
                   Transforming Estate Discovery <br />{" "}
                  <span className="text-brandPrimary leading-snug">
                    in AR & 3D
                  </span>
                </h1>
                <p className="text-neutralGrey text-base mb-8 text-center md:text-left">
                Have you experience AR or 3D in real estate?
                </p>
                <div className="flex justify-center items-center gap-4">
                  <button className="btn-primary">
                    <span className="flex">Download <BiLogoPlayStore size={'20px'} className="my-1" /></span>
                  </button>
                  <button className="btn-primary">
                    <span className="flex">Download <FaAppStoreIos size={'20px'} className="my-1" /></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="my-14 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div className="md:w-1/2">
                <img src={banner3} alt="" />
              </div>
              <div className="md:w-1/2 flex flex-col items-center justify-center md:items-start">
                <h1 className="home-h1">
                Unlock Property Potential with <br />{" "}
                  <span className="text-brandPrimary leading-snug">
                  Heaven Estate
                  </span>
                </h1>
                <p className="text-neutralGrey text-base mb-8 text-center md:text-left">
                  Take a demo right now
                </p>
                <div className="flex justify-center items-center gap-4">
                  <button className="btn-primary">
                    <span className="flex">Download <BiLogoPlayStore size={'20px'} className="my-1" /></span>
                  </button>
                  <button className="btn-primary">
                    <span className="flex">Download <FaAppStoreIos size={'20px'} className="my-1" /></span>
                  </button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

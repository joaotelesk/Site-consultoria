// Components
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Utilities
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

// Interfaces
interface CarouselProps {
  serviceData: any[];
  type?: "primary" | "secondary";
}

export function Carousel({ serviceData, type = "primary" }: CarouselProps) {
  return (
    <>
      {type === "primary" ? (
        <div className=" container lg:px-0 overflow-x-scroll pb-4 scrollbar-hidden text-start z-0">
          <div className="flex justify-start gap-x-4  ">
            {serviceData.map((service) => (
              <motion.div
                key={service.title}
                className="flex  flex-col w-[248px] min-w-[256px] sm:min-w-[348px] sm:min-h-max text-start "
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={348}
                  height={247}
                  className="w-full object-cover"
                />
                <div className="flex flex-col px-7 py-8 bg-white-500">
                  <h3 className="text-base sm:text-xl font-medium text-black-400">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-300  lg:leading-5">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="linkStyle mt-4 lg:mt-11 flex gap-x-2 items-center"
                  >
                    <span>Saiba mais </span>
                    <FiArrowUpRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container lg:px-0 overflow-x-scroll pb-4 scrollbar-hidden text-start z-0">
          <div className="flex justify-start items-start gap-x-7 lg:px-3 ">
            {serviceData.map((service) => (
              <motion.div className=" shadow-xl  bg-white-500 w-[230px] min-w-[230px] sm:min-w-[328px] sm:min-h-max text-start  py-5 lg:py-9  px-5 lg:px-7 flex gap-x-6 flex-col justify-start items-start">
                <div className="bg-yellow-500 border px-1 lg:px-2  font-bold rounded-[100%] w-[73px] h-[73px] text-4xl lg:text-5xl text-red-500 flex justify-center items-center">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={36}
                    height={36}
                    className="w-[30px] h-[30px] lg:w-9 lg:h-9"
                  />
                </div>
                <div className="">
                  <h3 className="mt-10 text-base lg:text-xl font-medium text-black-400 lg:mt-10">
                    {service.title}
                  </h3>
                  <p className=" text-sm lg:text-base text-gray-300 mt-3">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="linkStyle mt-6 lg:mt-11 flex gap-x-2 items-center"
                  >
                    <span>Saiba mais </span>
                    <FiArrowUpRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

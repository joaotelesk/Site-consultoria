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
}

export function Carousel({ serviceData }: CarouselProps) {
  return (
    <>
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
                <p className="mt-2 text-sm sm:text-base text-gray-300">
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
    </>
  );
}

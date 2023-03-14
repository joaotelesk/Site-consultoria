// Components
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Interfaces
import { Post } from "@/interfaces";
import { convertStringCharacters } from "@/Utilities/Convert";
import { FiArrowUpRight } from "react-icons/fi";

interface CardBlogProps {
  blogData: Post[];
}

export function CardBlogCarousel({ blogData }: CardBlogProps) {
  return (
    <>
      <div className=" overflow-x-scroll pb-4 scrollbar-hidden text-start ">
        <div className="flex justify-start gap-x-7  ">
          {blogData.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-3 flex-col min-w-[230px] min-h-max text-start lg:max-w-[251px] "
            >
              <Image
                src={`${item.thumbnail}`}
                alt={`${item.thumbnailDescription}`}
                width={750}
                height={400}
                className="w-full object-cover"
              />

              <h3 className="text-base sm:text-xl font-medium text-black-400">
                {convertStringCharacters(item.title, 20)}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {convertStringCharacters(item.description, 85)}...
              </p>
              <Link
                href={`/blog/${item.postType}/${item.slug}`}
                className="linkStyle flex gap-x-2 items-center"
              >
                Ler este Post
                <FiArrowUpRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

import { Post } from "@/interfaces";
import {
  convertDateCard,
  convertDatePost,
  convertStringCharacters,
  convertStringUpcase,
} from "@/Utilities/Convert";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface cardPost {
  type: "variante" | "primary";
  category?: string;
  blogData: Post;
}

export default function CardPost({ type, category, blogData }: cardPost) {
  const {
    createdAt,
    title,
    description,
    postType,
    slug,
    thumbnailDescription,
  } = blogData;

  const createdDate = convertDateCard(createdAt);
  return (
    <>
      {type === "primary" ? (
        <div
          className={`flex flex-col w-auto ${
            category
              ? "lg:max-h-[526px] max-w-[585px]"
              : "lg:max-h-[593px] max-w-[360px]"
          } gap-6 text-gray-300`}
        >
          {category ? (
            <Image
              src={`${blogData.thumbnail}`}
              alt={`${thumbnailDescription}`}
              width={585}
              height={526}
              className="max-h-[426px]"
              priority
            />
          ) : (
            <Image
              src={`${blogData.thumbnail}`}
              alt={`${thumbnailDescription}`}
              width={360}
              height={360}
              className=" max-h-[300px] max-w-[360px]"
              priority
            />
          )}
          <div>
            <div className="flex  gap-x-5 text-xs lg:text-base">
              <p>{createdDate}</p>
              {category ? (
                <p className="text-black-400">
                  {convertStringUpcase(category)}
                </p>
              ) : (
                ""
              )}
            </div>
            <h2
              className={`text-black-400  text-base lg:mt-2 leading-8 font-medium ${
                category ? "lg:text-[32px] " : "lg:text-2xl"
              }`}
            >
              {title}
            </h2>
            <p className="lg:mt-3 text-sm lg:text-xl lg:leading-6 ">
              {convertStringCharacters(description, 100)}...
            </p>
          </div>
          <Link
            href={`/blog/${postType}/${slug}`}
            className="linkStyle flex gap-x-2 items-center"
          >
            Ler este Post
            <FiArrowUpRight size={20} />
          </Link>
        </div>
      ) : (
        <div className="flex flex-col max-h-[626px] max-w-[585px] w-auto gap-5 text-gray-300 border-b pb-8">
          <div>
            <div className="flex   gap-x-5 text-xs lg:text-sm">
              <p>{createdDate}</p>
              <p className="text-black-400">{convertStringUpcase(postType)}</p>
            </div>
            <h2 className="text-black-400 lg:mt-1 text-base lg:text-2xl lg:leading-6 font-medium ">
              {title}
            </h2>
            <p className="lg:mt-3 text-sm lg:text-xl lg:leading-6 ">
              {convertStringCharacters(description, 80)}...
            </p>
          </div>
          <Link
            href={`/blog/${postType}/${slug}`}
            className="linkStyle flex gap-x-2 items-center"
          >
            Ler este Post
            <FiArrowUpRight size={20} />
          </Link>
        </div>
      )}
    </>
  );
}

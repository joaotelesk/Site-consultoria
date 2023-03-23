// Components
import Image from "next/image";
import Link from "next/link";

// Utilities
import {
  convertDatePost,
  convertImage,
  convertStringCharacters,
  convertStringUpcase,
} from "@/Utilities/Convert";
import parse from "html-react-parser";

// Interfaces
import { Post } from "@/interfaces";

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  const {
    title,
    description,
    postType,
    createdAt,
    updatedAt,
    author,
    tags,
    banner,
    bannerAlt,
    content,
  } = post;
  const updatedDate = convertDatePost(updatedAt);
  const createdDate = convertDatePost(createdAt);

  return (
    <>
      <section className=" text-start pt-24 lg:pt-0 lg:mt-36">
        <div className="container grid grid-cols-1 lg:grid-cols-7 lg:gap-x-11">
          <div className="col-span-5 ">
            <div className="flex flex-col">
              <span className="font-light text-xs lg:text-base flex gap-x-1 lg:gap-x-3 text-green-500">
                <Link href="/" className="hover:text-blue-500">
                  <span>Início</span>
                </Link>
                {">"}
                <Link href="/blog" className="hover:text-blue-500">
                  <span>Blog</span>
                </Link>
                {">"}
                <Link
                  href={`/blog/${postType}`}
                  className="hover:text-blue-500"
                >
                  <span>
                    {postType === "dicas"
                      ? "Dicas Imigrei"
                      : convertStringUpcase(postType)}
                  </span>
                </Link>
                {">"}
                <span className="text-black-400">
                  {title.length > 14
                    ? convertStringCharacters(title, 14)
                    : title}
                  ...
                </span>
              </span>
              <h2 className="mt-3 lg:mt-8 text-2xl sm:text-4xl text-black-400 font-medium">
                {title}
              </h2>
              <p className="mt-3 font-normal text-gray-300 text-xl">
                {description}
              </p>
              <div className="mt-7 lg:mt-12 flex flex-wrap gap-x-5 gap-y-1 ">
                {tags.length > 0 ? (
                  tags.map((tag, index) => (
                    <span key={index} className="tags">
                      {convertStringUpcase(tag)}
                    </span>
                  ))
                ) : (
                  <span className="tags">{convertStringUpcase(postType)}</span>
                )}
              </div>
            </div>
            <div className="mt-5 text-xs  lg:text-base flex flex-wrap gap-x-5 gap-y-1 justify-between">
              <p className="text-gray-300 ">
                <span className="text-black-400">Criado </span>
                {createdDate}
              </p>

              <p className="text-gray-300 ">
                <span className="text-black-400">Atualizado </span>
                {updatedDate}
              </p>
              <p className="text-gray-300 ">
                <span className="text-black-400">Escrito</span> por{" "}
                {convertStringUpcase(author)}
              </p>
            </div>
            <Image
              width={350}
              height={228}
              src={`${banner}`}
              alt={bannerAlt}
              className="w-full mt-5 mb-4"
              priority
            />
            <span className="text-xs lg:text-base text-gray-300">
              {bannerAlt}
            </span>
            <article className="text-gray-300 my-10 flex flex-col gap-16 text-xl text-start">
              <div className="content-post">
                {" "}
                {parse(content, { replace: convertImage })}
              </div>
            </article>
          </div>

          <div className="hidden lg:block  lg:col-span-2">
            <div className="h-auto bg-white-400 flex flex-col px-5 py-10">
              <span className="mt-4 text-green-500 font-medium">Website</span>
              <h2 className="mt-2 text-4xl text-black-400 font-medium leading-8">
                Conheça as novidades do website da Imigrei!
              </h2>
              <p className="text-base  mt-5 text-gray-300 lg:leading-5">
                Clique no botão abaixo para ser redirecionado!
              </p>
              <Link
                href="/"
                className="mt-8 tags text-base self-start bg-green-500 text-white-500 "
              >
                Ver site Imigrei
              </Link>
              <Image
                src="/Blog/blog-sidebar.webp"
                alt="mulher segurando documentos"
                width={243}
                height={296}
                className="mt-12"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

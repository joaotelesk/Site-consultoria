import Image from "next/image";
import Link from "next/link";

export default function PostContent() {
  return (
    <>
      <section className=" text-center lg:text-start pt-28 lg:pt-0 lg:mt-40">
        <div className="container grid grid-cols-1 lg:grid-cols-6 lg:gap-x-11">
          <div className="col-span-4 ">
            <div className="flex flex-col">
              <span className="font-light flex gap-x-3 text-green-500">
                <span>Início</span> {">"} <span>Dicas Imigrei</span> {">"}
                <span className="text-black-400">3 dicas imperdí...</span>
              </span>
              <h2 className="mt-9 text-2xl sm:text-4xl text-black-400 font-medium">
                3 dicas imperdíveis para ter o seu visto em Portugal
              </h2>
              <p className="mt-5 font-normal text-gray-300 text-xl">
                Preparamos este post com incríveis 10 dicar que irá te ajudar, e
                muito, na retirada de visto para portugal. Aproveite! :)
              </p>
              <div className="mt-14 flex gap-3">
                <span className="tags">Dicas Imigrei</span>
                <span className="tags">Portugal</span>
                <span className="tags">Imigrantes</span>
              </div>
            </div>
            <div className="mt-5 flex justify-between">
              <p className="text-gray-300">
                <span className="text-black-400">Criado</span> em 03 AGO de 2022
              </p>
              <p className="text-gray-300">
                <span className="text-black-400">Atualizado</span> em 15 DEZ de
                2022
              </p>
              <p className="text-gray-300">
                <span className="text-black-400">Escrito</span> por Camila de
                Souza
              </p>
            </div>
            <Image
              width={752}
              height={414}
              src="/Blog/janela.png"
              alt="Foto da Janela de um avião. Fotografia de Alan Lima"
              className="w-full mt-16 mb-4"
            />
            <span className=" text-gray-300">
              Foto da Janela de um avião. Fotografia de Alan Lima
            </span>
            <article className="text-gray-300 my-10 flex flex-col gap-16 text-xl text-start">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                commodo felis a risus condimentum pellentesque. Pellentesque et
                diam vel nunc scelerisque molestie. Pellentesque eget risus ut
                urna bibendum consequat non a erat. Suspendisse rutrum dictum
                urna, aliquam ullamcorper mi. Integer id nulla porttitor nisi
                pellentesque tristique ac eu nulla. Sed pellentesque massa vitae
                diam iaculis, eget luctus urna gravida.
              </span>
              <div>
                <h3 className="text-black-400 text-2xl font-medium mb-4">
                  1 - Lorem ipsum
                </h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo felis a risus condimentum pellentesque. Pellentesque
                  et diam vel nunc scelerisque molestie. Pellentesque eget risus
                  ut urna bibendum consequat non a erat. Suspendisse rutrum
                  dictum urna, aliquam ullamcorper mi. Integer id nulla
                  porttitor nisi pellentesque tristique ac eu nulla. Sed
                  pellentesque massa vitae diam iaculis, eget luctus urna
                  gravida.
                </span>
              </div>
              <div>
                <h3 className="text-black-400 text-2xl font-medium mb-4">
                  2 - Lorem ipsum
                </h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo felis a risus condimentum pellentesque. Pellentesque
                  et diam vel nunc scelerisque molestie. Pellentesque eget risus
                  ut urna bibendum consequat non a erat. Suspendisse rutrum
                  dictum urna, aliquam ullamcorper mi. Integer id nulla
                  porttitor nisi pellentesque tristique ac eu nulla. Sed
                  pellentesque massa vitae diam iaculis, eget luctus urna
                  gravida.
                </span>
                <ul className="mt-4 flex flex-col gap-3">
                  <li>
                    Actum urna, aliquam ullamcorper mi. Integer id nulla
                    porttitor nisi pellentesque tristique!
                  </li>
                  <li>
                    Actum urna, aliquam ullamcorper mi. Integer id nulla
                    porttitor nisi pellentesque tristique!
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-black-400 text-2xl font-medium mb-4">
                  3 - Lorem ipsum
                </h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  commodo felis a risus condimentum pellentesque.
                </span>
                <Image
                  width={752}
                  height={414}
                  src="/Blog/janela.png"
                  alt="Foto da Janela de um avião. Fotografia de Alan Lima"
                  className="w-full mt-8 mb-4"
                />
              </div>
            </article>
          </div>

          <div className="hidden lg:block  lg:col-span-2">
            <div className="h-auto bg-white-400 flex flex-col px-9 py-10">
              <span className="mt-4 text-green-500 font-medium">Website</span>
              <h2 className="mt-2 text-4xl text-black-400 font-medium">
                Conheça as novidades do website da Imigrei!
              </h2>
              <p className="text-base  mt-5 text-gray-300">
                Clique no botão abaixo para ser redirecionado!
              </p>
              <Link
                href="#"
                className="mt-8 tags text-base self-start bg-green-500 text-white-500 "
              >
                Ver site Imigrei
              </Link>
              <Image
                src="/Blog/blog-sidebar.png"
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

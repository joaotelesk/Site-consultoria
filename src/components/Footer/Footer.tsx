// Components
import Image from "next/image";
import Link from "next/link";

// Utilities
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsWhatsapp,
} from "react-icons/bs";

// Interfaces

export default function Footer() {
  return (
    <footer className="bg-mobile bg-cover lg:bg-desktop">
      <div className="container py-8 sm:py-16 lg:p-16 flex flex-col gap-y-8 lg:flex-row items-start text-white-300 ">
        <div className="flex flex-col items-start lg:items-center gap-5 max-w-sm lg:text-center lg:self-center ">
          <Image
            src="/Footer/Logo-white.webp"
            alt="logo"
            width={193}
            height={35}
            className="self-start lg:self-center"
            priority
          />
          <p className="text-xs xl:text-base">
            Rua Manual João Souza, 540, São Paulo/SP - Brasil CNPJ:
            000000/0000-00
          </p>
          <div className=" flex gap-5 items-center">
            <Link href="#">
              <AiOutlineInstagram
                size={34}
                aria-label="instagram"
                className="text-white-300 font-light"
              />
            </Link>
            <Link href="#">
              <AiOutlineFacebook
                size={34}
                aria-label="facebook"
                className="text-white-300 font-light"
              />
            </Link>
          </div>
        </div>
        <div className="lg:ml-auto">
          <h3 className="text-xl text-white-500 font-bold ">Navegue</h3>
          <ul className="mt-4 flex flex-col gap-3 ">
            <li>
              <Link href="/" arial-label="Pagina Home">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" arial-label="Pagina Serviços">
                Servicos
              </Link>
            </li>
            <li>
              <Link href="#" arial-label="Pagina quem somos">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link href="/blog" arial-label="Pagina Blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:ml-auto">
          <h3 className="text-xl text-white-500 font-bold ">Contato</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <Link
                className="flex items-center gap-4"
                href="#"
                aria-label="Link para"
              >
                <BsTelephoneFill
                  size={18}
                  aria-label="telefone"
                  className="text-white-300"
                />
                <span>55+ 11 0 0000 - 0000</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-4"
                href="#"
                aria-label="Link para"
              >
                <BsFillEnvelopeFill
                  size={18}
                  aria-label="e-mail"
                  className="text-white-300"
                />
                <span>contato@imigrei.net</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-4"
                href="#"
                aria-label="Link para"
              >
                <BsWhatsapp
                  size={18}
                  aria-label="whatsapp"
                  className="text-white-300"
                />
                <span>55+ 11 9 9999 - 9999</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// Components
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

// Utilities
import { motion } from "framer-motion";

// Hooks
import { useRouter } from "next/router";
import { useState } from "react";

export function ListPrimary() {
  const router = useRouter();
  const [showServices, setShowServices] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  function toggleShowServices() {
    setShowServices(!showServices);
  }
  function handleNavClass(path: string) {
    const currentPath = router.pathname;
    return currentPath === path ? "border-b border-blue-500 text-blue-500" : "";
  }
  return (
    <>
      <div className=" lg:hidden">
        <RiMenuFill
          size={30}
          className="cursor-pointer"
          onClick={handleClick}
        />

        {showModal && (
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full min-h-5/6 bg-white-500 flex justify-center items-center"
            onClick={handleClose}
          >
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg px-4 py-5 w-full h-full flex flex-col justify-start"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between">
                <h2 className="text-2xl font-medium">Menu</h2>
                <VscChromeClose
                  size={30}
                  className="cursor-pointer"
                  onClick={handleClose}
                />
              </div>
              <ul className="mt-8 flex flex-col gap-4 font-medium">
                <Link href="/">
                  <li className="MenuLi" onClick={handleClose}>
                    Home
                  </li>
                </Link>
                <li className="MenuLi">
                  <div
                    className="flex justify-between"
                    onClick={toggleShowServices}
                  >
                    <span>Servicos</span>
                    {showServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                  {showServices ? (
                    <ul className="font-normal text-lg  flex flex-col gap-4 px-4">
                      <Link href="/servicos/cidadania-portuguesa">
                        <li className="MenuLi mt-5">Cidadania Portuguesa</li>
                      </Link>
                      <Link href="/servicos/cidadania-italiana">
                        <li className="MenuLi">Cidadania Italiana</li>
                      </Link>
                      <li>Visto</li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="MenuLi">Quem Somos</li>
                <Link href="/blog">
                  <li className="MenuLi" onClick={handleClose}>
                    Blog
                  </li>
                </Link>
              </ul>
              <Link className="linkButton mt-10" href="/contato">
                Contato
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>

      <div className="hidden lg:flex gap-14">
        <ul className="flex items-center gap-x-12">
          <li className={handleNavClass("/")}>
            <Link href="/">Home</Link>
          </li>
          <li
            onMouseEnter={toggleShowServices}
            onMouseLeave={toggleShowServices}
            className="flex justify-center"
          >
            <div className="flex gap-3 items-center link">
              <span className={handleNavClass("services")}>Serviços</span>
              {showServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {showServices && (
              <ul className="absolute top-[72px] py-4 z-10 flex flex-col bg-white-500 w-auto px-3  rounded shadow text-base">
                <Link href="/servicos/cidadania-portuguesa">
                  <li className="py-2 cursor-pointer ">Cidadania Portuguesa</li>
                </Link>
                <Link href="/servicos/cidadania-italiana">
                  <li className="py-2  cursor-pointer">Cidadania Italiana</li>
                </Link>
                <li className="py-2 cursor-pointer ">Vistos em Portugal</li>
              </ul>
            )}
          </li>
          <li>
            <Link href="#" className="link">
              Quem Somos
            </Link>
          </li>
          <li className={handleNavClass("/blog")}>
            <Link href="/blog" className="link">
              Blog
            </Link>
          </li>
        </ul>
        <Link className="linkButton" href="/contato">
          Contato
        </Link>
      </div>
    </>
  );
}

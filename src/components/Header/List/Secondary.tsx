// Components
import Link from "next/link";
import { TextInput } from "@/components/InputText/InputText";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuFill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

// Utilities
import { motion } from "framer-motion";

// Hooks
import { useRouter } from "next/router";
import { useState } from "react";

export function ListSecondary() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  function handleNavClass(path: string) {
    const currentPath = router.pathname;
    return currentPath.startsWith(path)
      ? "border-b border-blue-500 text-blue-500"
      : "";
  }

  function handleSearchClick() {
    setShowInput(true);
  }

  function handleCloseClick() {
    setShowInput(false);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
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
                <Link href="/blog/dicas">
                  v
                  <li className="MenuLi" onClick={handleClose}>
                    Dicas Imigrei
                  </li>
                </Link>
                <Link href="/blog/italia">
                  <li className="MenuLi" onClick={handleClose}>
                    Italia
                  </li>
                </Link>
                <Link href="/blog/portugal">
                  <li className="MenuLi" onClick={handleClose}>
                    Portugal
                  </li>
                </Link>
              </ul>
              <Link className="linkButton mt-10" href="#">
                Contato
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div className="hidden lg:flex gap-12">
        {showInput ? (
          <>
            <div>
              <TextInput.Root>
                <TextInput.Icon>
                  <FiSearch
                    className="transform scale-x-[-1] text-green-300"
                    size={20}
                  />
                </TextInput.Icon>
                <TextInput.Input
                  type="text"
                  value={searchValue}
                  placeholder="Pesquise por tema"
                  onChange={handleInputChange}
                />
                <TextInput.Icon>
                  <AiOutlineClose
                    className="cursor-pointer"
                    size={20}
                    onClick={handleCloseClick}
                  />
                </TextInput.Icon>
              </TextInput.Root>
            </div>
          </>
        ) : (
          <>
            <ul className="flex items-center gap-14">
              <li className={`${handleNavClass("/blog/dicas")} link`}>
                <Link href="/blog/dicas">Dicas Imigrei</Link>
              </li>
              <li className={`${handleNavClass("/blog/italia")} link`}>
                <Link href="/blog/italia">Italia</Link>
              </li>
              <li className={`${handleNavClass("/blog/portugal")} link`}>
                <Link href="/blog/portugal">Portugal</Link>
              </li>
              <li onClick={handleSearchClick}>
                <FiSearch
                  className="transform scale-x-[-1] transition-transform duration-300"
                  size={30}
                />
              </li>
            </ul>
          </>
        )}
        <Link className="linkButton" href="#">
          Contato Imigrei
        </Link>
      </div>
    </>
  );
}

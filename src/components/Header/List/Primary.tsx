// Components
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

// Utilities
import { motion } from "framer-motion";

// Hooks
import { useRouter } from "next/router";
import { useState } from "react";
import { BsBorderBottom } from "react-icons/bs";
import { scrollToSection } from "@/Utilities/Functions";

export function ListPrimary() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                <Link href="/" onClick={handleClose}>
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
                      <Link
                        href="/servicos/cidadania-portuguesa"
                        onClick={handleClose}
                      >
                        <li className="MenuLi mt-5">Cidadania Portuguesa</li>
                      </Link>
                      <Link
                        href="/servicos/cidadania-italiana"
                        onClick={handleClose}
                      >
                        <li className="MenuLi">Cidadania Italiana</li>
                      </Link>
                      <Link
                        href="/servicos/visto-portugues"
                        onClick={handleClose}
                      >
                        <li>Visto Portugues</li>
                      </Link>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <Link href="/quem-somos" onClick={handleClose}>
                  <li className="MenuLi">Quem Somos</li>
                </Link>
                <Link href="/blog" onClick={handleClose}>
                  <li className="MenuLi" onClick={handleClose}>
                    Blog
                  </li>
                </Link>
              </ul>
              <Link
                className="linkButton mt-10"
                href="/contato"
                onClick={handleClose}
              >
                Contato
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>

      <div className="hidden lg:flex gap-14">
        <ul className="flex items-center gap-x-12">
          <li className={handleNavClass("/")}>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Menu
              isOpen={isOpen}
              onClose={onClose}
              offset={[-40, -4]}
              closeOnBlur={false}
            >
              <Link
                href="#"
                onClick={(event) => scrollToSection(event, "servicos")}
              >
                <MenuButton
                  _active={{ backgroundColor: "transparent" }}
                  backgroundColor="transparent"
                  _hover={{
                    backgroundColor: "transparent",
                    textColor: "#11569E",
                  }}
                  isActive={isOpen}
                  as={Button}
                  px={0}
                  py={0}
                  rounded="none"
                  _focus={{ boxShadow: "none" }}
                  border="none"
                  boxShadow="none"
                  right="none"
                  outline="none"
                  className="flex justify-center outline-none"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  rightIcon={
                    isOpen ? (
                      <IoIosArrowUp size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )
                  }
                >
                  <span
                    className={
                      (handleNavClass("services"), "text-xl font-normal")
                    }
                  >
                    Serviços
                  </span>
                </MenuButton>
              </Link>
              <MenuList
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                py={0}
                rounded="md"
                width="auto"
              >
                <Link href="/servicos/cidadania-portuguesa">
                  <MenuItem
                    roundedTop="md"
                    className="active:bg-none text-base hover:bg-green-400 hover:text-black-400"
                  >
                    Cidadania Portuguesa
                  </MenuItem>
                </Link>
                <Link href="/servicos/cidadania-italiana">
                  <MenuItem className="active:bg-none text-base hover:bg-green-400 hover:text-black-400">
                    Cidadania Italiana
                  </MenuItem>
                </Link>
                <Link href="/servicos/visto-portugues">
                  <MenuItem
                    roundedBottom="md"
                    className="active:bg-none text-base hover:bg-green-400 hover:text-black-400"
                  >
                    Visto Portugues
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </li>
          <li className={handleNavClass("/quem-somos")}>
            <Link href="/quem-somos" className="link">
              <span>Quem Somos</span>
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

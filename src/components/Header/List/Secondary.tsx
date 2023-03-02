// Components
import Link from "next/link";
import { TextInput } from "@/components/InputText/InputText";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

// Hooks
import { useRouter } from "next/router";
import { useState } from "react";

export function ListSecondary() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  function handleNavClass(path: string) {
    const currentPath = router.pathname;
    return currentPath === path ? "border-b border-blue-500 text-blue-500" : "";
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
            <li>
              <Link href="#" className="link">
                Dicas Imigrei
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#" className="link">
                Italia
              </Link>{" "}
            </li>
            <li>
              <Link href="#" className="link">
                Portugal
              </Link>
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
    </>
  );
}

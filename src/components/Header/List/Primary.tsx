// Components
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

// Hooks
import { useRouter } from "next/router";
import { useState } from "react";

export function ListPrimary() {
  const router = useRouter();
  const [showServices, setShowServices] = useState(false);

  function handleNavClass(path: string) {
    const currentPath = router.pathname;
    return currentPath === path ? "border-b border-blue-500 text-blue-500" : "";
  }
  return (
    <>
      <ul className="flex items-center gap-14">
        <li className={handleNavClass("/")}>
          <Link href="/">Home</Link>
        </li>
        <li
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <div className="flex gap-3 items-center link">
            <span className={handleNavClass("services")}>Serviços</span>
            <IoIosArrowDown />
          </div>
          {showServices && (
            <ul className="absolute mt-0 py-4 z-10 flex flex-col">
              <li className="py-2 link">Cidadania Portuguesa</li>
              <li className="py-2 link">Vistos em Portugal</li>
              <li className="py-2 link">Cidadania Italiana</li>
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
      <Link className="linkButton" href="#">
        Contato
      </Link>
    </>
  );
}

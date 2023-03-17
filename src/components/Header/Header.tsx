// Components
import Image from "next/image";
import Link from "next/link";
import { ListPrimary } from "./List/Primary";
import { ListSecondary } from "./List/Secondary";

// Hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Header() {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full h-20 flex ${
          scrollPosition > 0 ? "bg-white-500 shadow-sm" : "bg-transparent"
        } duration-500 z-5 item-center lg:h-28`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image
              src="/Header/Logo-green.svg"
              alt="Logo"
              width={193}
              height={35}
              className="w-[135px] h-[25px] lg:w-[193px] lg:h-[35px]"
            />
          </Link>
          <nav className="flex items-center text-xl gap-20 text-green-500">
            {router.asPath === "/blog/" ||
            router.asPath.startsWith("/blog/") ? (
              <ListSecondary />
            ) : (
              <ListPrimary />
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

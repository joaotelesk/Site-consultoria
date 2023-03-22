// Components
import Script from "next/script";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";

// Utilities

// Interfaces
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      />
      <div className="font-spaceGrotesk">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

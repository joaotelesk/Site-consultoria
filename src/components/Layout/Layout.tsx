// Components
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";

// Utilities
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// Interfaces
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={`${spaceGrotesk.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

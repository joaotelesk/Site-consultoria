// Components
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
      <Header />
      {children}
      <Footer />
    </>
  );
}

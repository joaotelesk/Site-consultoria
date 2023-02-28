// Components
import Footer from "../Footer/Footer";

// Utilities

// Interfaces
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

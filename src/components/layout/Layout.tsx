import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: "linear-gradient(135deg, #0B0F14 0%, #121826 50%, #141A22 100%)",
      backgroundAttachment: "fixed"
    }}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

// src/components/Layout.tsx
import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 ml-64">
      {/* Optional: Add a navbar if you have one */}
      <main className="p-6 pt-16">
        {children}
      </main>
    </div>
  </div>
);

export default Layout;

import { ReactNode, useState } from "react";
import Sidebar from '../components/Sidebar';
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {/* Main content area */}
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-0'}`}>
                <Header />
                <Breadcrumb/>
                <main className="p-6 pt-16">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;

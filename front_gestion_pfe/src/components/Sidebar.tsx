import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import {
  AlignJustify,
  Folder,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  NotepadText,
  Upload,
  User2,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const menuItems = [
  { key: "/", label: "Dashboard", icon: <LayoutDashboard size={23} /> },
  { key: "/NewProject", label: "Submit New Project", icon: <Upload size={23} /> },
  { key: "/ProjectProposals", label: "Project Proposals", icon: <NotepadText size={23} /> },
  { key: "/MyProject", label: "My Project", icon: <Folder size={23} /> },
  { key: "/Defense", label: "Defense Schedule", icon: <GraduationCap size={23} /> },
  { key: "/Settings", label: "Profile and Settings", icon: <User2 size={23} /> },
  { key: "/Logout", label: "Log Out", icon: <LogOut size={23} /> },
];

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();

  const toggleSidebar = () => {
    if (window.innerWidth < 768) { // Prevent toggling when the screen is large
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {/* Menu toggle button, hidden when sidebar is open */}
      <AlignJustify
        onClick={toggleSidebar}
        className={`md:hidden fixed top-4 left-4 z-50 p-2 text-slate-800 ${isOpen ? 'hidden' : 'block'} size-10`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white text-slate-800 transition-transform z-40 w-60 ${isOpen ? 'translate-x-0' : '-translate-x-60'} md:translate-x-0`}
      >
        <div className="p-4 flex space-x-2 mb-2" onClick={toggleSidebar}>
          <img src="/Group.svg" alt="Logo" />
          <h2 className="text-2xl font-bold font-inter text-slate-800 mt-1">Belkaid Edge</h2>
        </div>
        <Menu
          theme="light"
          mode="inline"
          className="border-none"
          defaultSelectedKeys={[location.pathname]}
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              style={{
                color: location.pathname === item.key ? '#ffffff' : '#343D53',
                backgroundColor: location.pathname === item.key ? '#52ADA2' : '#ffffff',
                marginBottom: '8px',
              }}
            >
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </aside>

      {/* Overlay for closing sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

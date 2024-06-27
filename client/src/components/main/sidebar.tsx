// components/MainSidebar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Home,
  BookOpen,
  PenTool,
  Calendar,
  Mic,
  LayoutDashboard,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", href: "/main/home" },
  { icon: BookOpen, label: "Questões", href: "/main/questoes" },
  { icon: PenTool, label: "Redações", href: "/main/chat" },
  { icon: Calendar, label: "Cronograma", href: "/main/cronograma" },
  { icon: Mic, label: "Speech", href: "/main/speech" },
  { icon: LayoutDashboard, label: "Dashboard", href: "/main/dashboard" },
];

const MainSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={
          isOpen
            ? "fixed left-4 top-4 z-50 rounded-md border bg-secondary p-2"
            : "fixed top-1/2 z-50 -translate-x-2 -translate-y-1/2 transform rounded-r-full border bg-secondary p-2 text-foreground shadow-lg   transition-transform "
        }
      >
        {isOpen ? (
          <Menu className="h-6 w-6" />
        ) : (
          <ChevronRight className="h-6 w-6 " />
        )}
      </button>
      <div
        className={`fixed inset-0 z-40 flex ${isOpen ? "translate-x-0" : "-translate-x-full"} transform transition-transform duration-300`}
      >
        <div
          className="fixed inset-0 bg-background opacity-75"
          onClick={toggleSidebar}
        ></div>
        <div className="relative w-64 border-r bg-background shadow-lg">
          <div className="p-4">
            <h2 className="mt-14 text-lg font-bold">Menu</h2>
            <ul className="mt-2 space-y-2">
              {menuItems.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center space-x-2 rounded-md p-2 hover:bg-secondary hover:text-foreground"
                    onClick={toggleSidebar}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;

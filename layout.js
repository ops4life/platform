import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createPageUrl } from "./utils";
import { HardDrive, ShieldAlert, Book, Bot, Menu, X } from "lucide-react";

const navItems = [
    { title: "Dashboard", href: createPageUrl("Dashboard"), icon: HardDrive },
    { title: "Incidents", href: createPageUrl("Incidents"), icon: ShieldAlert },
    { title: "Runbooks", href: createPageUrl("Runbooks"), icon: Book },
];

export default function Layout({ children, currentPageName }) {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#FEFDE8] font-sans">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');
                body { font-family: 'Space Grotesk', sans-serif; }
            `}</style>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 bg-white border-4 border-black rounded-lg p-2 shadow-[4px_4px_0px_#000000]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r-4 border-black flex flex-col p-4
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center gap-3 mb-6 lg:mb-10 p-2 border-b-4 border-black">
                    <Bot className="w-8 h-8 lg:w-10 lg:h-10"/>
                    <h1 className="text-xl lg:text-2xl font-bold tracking-tighter">Ops4Life</h1>
                </div>
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`
                                flex items-center gap-3 p-3 text-base lg:text-lg font-bold border-4 border-black rounded-lg transition-all duration-200
                                hover:shadow-[4px_4px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1
                                ${router.pathname === item.href
                                    ? 'bg-yellow-400 shadow-[4px_4px_0px_#000000]'
                                    : 'bg-white'
                                }
                            `}
                        >
                            <item.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto p-3 lg:p-4 bg-white border-4 border-black rounded-lg shadow-[4px_4px_0px_#000000]">
                    <p className="font-bold text-sm lg:text-base">USER</p>
                    <p className="text-xs lg:text-sm">Platform Team</p>
                    <a href="#" className="text-xs lg:text-sm font-bold uppercase mt-2 block text-pink-600 hover:text-pink-800">Logout</a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col lg:ml-0">
                <header className="bg-white border-b-4 border-black px-4 lg:px-8 py-4">
                    <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-wider">{currentPageName}</h2>
                </header>
                <div className="flex-1 p-4 lg:p-8 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

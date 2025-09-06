import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createPageUrl } from "./utils";
import { HardDrive, ShieldAlert, Book, Bot } from "lucide-react";

const navItems = [
    { title: "Dashboard", href: createPageUrl("Dashboard"), icon: HardDrive },
    { title: "Incidents", href: createPageUrl("Incidents"), icon: ShieldAlert },
    { title: "Runbooks", href: createPageUrl("Runbooks"), icon: Book },
];

export default function Layout({ children, currentPageName }) {
    const router = useRouter();

    return (
        <div className="flex min-h-screen bg-[#FEFDE8] font-sans">


            {/* Sidebar */}
            <aside className="w-64 bg-white border-r-4 border-black flex flex-col p-4">
                <div className="flex items-center gap-3 mb-12 lg:mb-16 p-2 pt-4 border-b-4 border-black">

                    <Bot className="w-8 h-8 lg:w-10 lg:h-10"/>
                    <h1 className="text-xl lg:text-2xl font-bold tracking-tighter">Ops4Life</h1>
                </div>
                <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
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
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col lg:ml-0">
                <header className="bg-white border-b-4 border-black px-4 lg:px-8 py-2">
                    <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-wider">{currentPageName}</h2>
                </header>
                <div className="flex-1 p-4 lg:p-8 pt-8 lg:pt-12 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

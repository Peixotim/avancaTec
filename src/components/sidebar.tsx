"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Book,
  Award,
  Phone,
  Menu,
  X,
  GraduationCapIcon,
} from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Início", icon: <Home size={20} />, href: "/" },
  { name: "Cursos", icon: <Book size={20} />, href: "#cursos" },
  { name: "Certificação", icon: <Award size={20} />, href: "#Certificado" },
  { name: "Contato", icon: <Phone size={20} />, href: "#contato" },
  {
    name: "SISTEC-MEC",
    icon: <GraduationCapIcon size={20} />,
    href: "/sistec",
  },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 📱 Botão Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#024E0E] text-white p-3 rounded-xl shadow-lg hover:bg-[#046D18] transition-all"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 🖥️ Sidebar Desktop */}
      <motion.aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`hidden lg:flex sticky top-0 left-0 h-screen
        ${expanded ? "w-64" : "w-20"} 
        bg-gradient-to-b from-[#012F0A] via-[#024E0E] to-[#063E16]
        backdrop-blur-xl shadow-xl border-r border-[#ffffff22] 
        text-white transition-all duration-300 `}
      >
        <div className="flex flex-col justify-between w-full p-4">
          {/* LOGO */}
          <div className="flex items-center gap-2 mb-10 px-2">
            <span className="text-yellow-400 text-2xl font-extrabold tracking-tight">
              A
            </span>

            {expanded && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative w-32 h-12"
              >
                <Image
                  src="/images/AvancaTec.png"
                  alt="AvançaTec"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            )}
          </div>

          {/* LINKS */}
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-yellow-400 transition-all duration-300"
                >
                  {item.icon}
                  {expanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* FOOTER */}
          <div className="mt-10 text-center text-xs text-white/50">
            {expanded ? "© 2025 AvançaTec" : "©"}
          </div>
        </div>
      </motion.aside>

      {/* 📱 Sidebar Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-b from-[#024E0E] via-[#046D18] to-[#0B3C1B] shadow-xl p-6 flex flex-col justify-between rounded-r-3xl text-white"
          >
            <div>
              <div className="relative w-32 h-12 mb-8">
                <Image
                  src="/images/AvancaTec.png"
                  alt="AvançaTec"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-yellow-400 transition-all duration-300"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-white/50 text-center mt-8">
              © 2025 AvançaTec
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

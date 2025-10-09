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

// ========================
// 📚 Dados de Menu
// ========================
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

import Image from "next/image";

function Logo({ expanded = false }) {
  return (
    <motion.div
      key={expanded ? "logo-full" : "logo-mini"}
      initial={{ opacity: 0, x: -10, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -10, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex items-center justify-center gap-2"
    >
      {expanded ? (
        <>
          {/* 🔸 Logo com imagem da seta */}
          <div className="flex items-center gap-2">
            <Image
              src="/seta.png"
              alt="Logo AvançaTec"
              width={40}
              height={40}
              className="drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
              priority
            />
            <h1
              className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 
                           bg-clip-text text-transparent tracking-tight drop-shadow-[0_2px_6px_rgba(245,158,11,0.35)]"
            >
              AVANÇA<span className="">TEC</span>
            </h1>
          </div>
        </>
      ) : (
        // 🔹 Versão compacta (mini logo)
        <div
          className="w-10 h-10 grid place-items-center rounded-xl
                     bg-gradient-to-br from-[#F59E0B] to-[#D97706]
                     text-black/90 font-extrabold text-xl shadow-[0_10px_30px_-10px_#F59E0B]"
        >
          A
        </div>
      )}
    </motion.div>
  );
}
// ========================
// 🧭 Componente Sidebar
// ========================
export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 📱 Botão Mobile */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#024E0E] text-white p-3 rounded-xl shadow-lg hover:bg-[#046D18] transition-all"
        aria-label="Abrir menu"
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
          text-white transition-all duration-300`}
      >
        <div className="flex flex-col justify-between w-full p-4">
          {/* LOGO */}
          <div className="flex items-center justify-center mb-10">
            <AnimatePresence initial={false}>
              <Logo expanded={expanded} />
            </AnimatePresence>
          </div>

          {/* LINKS */}
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-yellow-400 transition-all duration-300"
                >
                  {item.icon}
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.span
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            ))}
          </ul>

          {/* FOOTER */}
          <div className="mt-10 text-center text-xs text-white/60">
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
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-b from-[#024E0E] via-[#046D18] to-[#0B3C1B]
                       shadow-xl p-6 flex flex-col justify-between rounded-r-3xl text-white"
          >
            {/* LOGO MOBILE */}
            <div className="flex flex-col items-center mb-8">
              <Logo expanded />
            </div>

            {/* LINKS MOBILE */}
            <ul className="space-y-6 w-full">
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

            {/* FOOTER */}
            <p className="text-xs text-white/50 text-center mt-8">
              © 2025 AvançaTec
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

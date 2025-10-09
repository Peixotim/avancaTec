"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  // Gera as partículas apenas no cliente (evita o "window is not defined")
  useEffect(() => {
    const generateParticles = () =>
      Array.from({ length: 30 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
    setParticles(generateParticles());
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#024E0E] via-[#013709] to-black text-white overflow-hidden px-6">
      {/* Efeito de brilho animado no fundo */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(242,150,14,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Luz suave girando */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-[#F2960E]/30 to-transparent rounded-full blur-3xl -z-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Número 404 com brilho e efeito de pulsação */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-[120px] sm:text-[160px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#F2960E] via-yellow-400 to-white drop-shadow-[0_0_25px_rgba(242,150,14,0.6)]"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl sm:text-3xl font-bold text-center"
      >
        Oops! Página não encontrada.
      </motion.h2>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-white/80 mt-3 text-center max-w-lg leading-relaxed"
      >
        Parece que você se perdeu no caminho. Mas não se preocupe — volte para o
        início ou explore nossos cursos e continue sua jornada de aprendizado 🚀
      </motion.p>

      {/* Botões de ação */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#F2960E] hover:bg-[#d6840d] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition transform hover:-translate-y-1 hover:shadow-amber-500/40"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Home
        </Link>
        <Link
          href="/cursos"
          className="flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold shadow-lg backdrop-blur-sm transition transform hover:-translate-y-1"
        >
          <Search className="w-5 h-5" />
          Explorar Cursos
        </Link>
      </motion.div>

      {/* Efeito de partículas (seguro no SSR) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F2960E] rounded-full opacity-50"
            initial={{ x: p.x, y: p.y }}
            animate={{
              y: [p.y, -20],
              opacity: [0.2, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </main>
  );
}

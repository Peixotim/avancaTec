import { Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

export interface CardPageProps {
  title: string;
  description: string;
  category: string;
  maisClicado: boolean;
  lancamentos: boolean;
  flag: string;
  benneficies: string[];
  img?: {
    src: string;
    alt: string;
  };
  bgColorFlag: string;
  bgColorCategory: string;
  bgColorHover: string;
  duration?: string;
  studentCount?: number;
}

export default function CardPage({
  title,
  description,
  category,
  benneficies,
  bgColorCategory,
  duration,
  studentCount,
}: CardPageProps) {
  const courseSlug = slugify(category);

  return (
    <div
      className="group w-full max-w-sm rounded-2xl border border-gray-200 
      bg-white p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 
      transition-all duration-500 ease-out flex flex-col font-sans 
      hover:border-green-300"
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${bgColorCategory}`}
        >
          {category}
        </span>
        <Award
          className="text-yellow-500 group-hover:rotate-12 transition-transform duration-300"
          size={22}
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-grow">
        <h2
          className="text-2xl font-bold text-[#024E0E] mb-2 
          transition-colors duration-300 group-hover:text-[#F2A413]"
        >
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        {(duration || studentCount) && (
          <div className="flex items-center gap-8 text-gray-500 mb-6">
            {duration && (
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="text-sm font-medium">{duration}</span>
              </div>
            )}
            {studentCount && (
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span className="text-sm font-medium">
                  {studentCount} alunos
                </span>
              </div>
            )}
          </div>
        )}

        {/* Especializações */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Especializações:
          </h3>
          <div className="flex flex-wrap gap-2">
            {benneficies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-none text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Botão */}
        <div className="mt-auto">
          <Link
            href={`/cursos/${courseSlug}`}
            className="block w-full text-center py-3 rounded-lg font-semibold 
            bg-gradient-to-r from-[#024E0E] to-[#046D18] 
            text-white transition-all duration-500 
            hover:from-green-900 hover:to-green-800
           hover:shadow-[0_0_15px_rgba(242,164,19,0.4)]
            hover:animate-bounceOnce group-hover:scale-[1.03]"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  );
}

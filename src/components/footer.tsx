import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#024E0E] to-[#01350B] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* COLUNA 1 - SOBRE */}
          <div className="space-y-4">
            {/* ✅ LOGO IMAGEM */}
            <div className="flex items-center space-x-3">
              <Image
                src="/av.png"
                alt="AvançaTec Logo"
                width={220}
                height={64}
                className="drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]"
                priority
              />
            </div>
            <span className="text-amber-500 text-medium">
              Educação Técnica de Excelência
            </span>
            <p className="text-sm text-white/80 leading-relaxed pt-2">
              Transformando vidas através da educação. Construindo profissionais
              do futuro com competência e inovação.
            </p>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/avancatecoficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-white hover:text-[#F2A413] transition-colors" />
              </a>
            </div>
          </div>

          {/* COLUNA 2 - CURSOS */}
          <div>
            <h4 className="font-semibold text-[#F2A413] mb-4 text-lg">
              Cursos
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#cursos" className="hover:text-[#F2A413]">
                  Área da Saúde
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#F2A413]">
                  Administração & Gestão
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#F2A413]">
                  Tecnologia e Informática
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#F2A413]">
                  Engenharia & Manutenção
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#F2A413]">
                  Construção e Infraestrutura
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3 - LINKS ÚTEIS */}
          <div>
            <h4 className="font-semibold text-[#F2A413] mb-4 text-lg">
              Links Úteis
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#inicio" className="hover:text-[#F2A413]">
                  Início
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#F2A413]">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#F2A413]">
                  Contato
                </a>
              </li>
              <li>
                <a href="#Certificado" className="hover:text-[#F2A413]">
                  Certificação
                </a>
              </li>
              <li>
                <a href="/sistec" className="hover:text-[#F2A413]">
                  SISTEC-MEC
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 4 - CONTATO */}
          <div>
            <h4 className="font-semibold text-[#F2A413] mb-4 text-lg">
              Entre em Contato
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-[#F2A413]" />
                <span>
                  R. Luiz Rodrigues dos Santos, 44 <br />
                  Cel. Fabriciano - MG
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F2A413]" />
                <a
                  href="mailto:gestaoavancatec@gmail.com"
                  className="hover:text-[#F2A413]"
                >
                  gestaoavancatec@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F2A413]" />
                <a href="tel:+5531982631563" className="hover:text-[#F2A413]">
                  (31) 98263-1563
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-[#F2A413]/20 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} AvançaTec. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-white/70">CNPJ: 63.110.547/0001-60</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

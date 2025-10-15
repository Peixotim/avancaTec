"use client";
import Script from "next/script";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://colegioavancatec.com.br/#organization",
    name: "Colégio AvançaTec",
    alternateName: [
      "AvançaTec",
      "Colegio Avancatec",
      "AvancaTec",
      "colegio avancatec",
      "avancatec",
      "Colégio Técnico AvançaTec",
      "Escola Técnica AvançaTec",
    ],
    url: "https://colegioavancatec.com.br",
    logo: "https://colegioavancatec.com.br/logo.png",
    image: "https://colegioavancatec.com.br/logo.png",
    description:
      "O Colégio AvançaTec é uma instituição de ensino técnico e profissionalizante reconhecida pelo MEC. Oferece cursos presenciais e EAD nas áreas da saúde, tecnologia, administração e refrigeração. Educação técnica de excelência para o futuro do trabalho.",
    email: "gestaoavancatec@gmail.com",
    telephone: "+55-31-98263-1563",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Luiz Rodrigues dos Santos, 44",
      addressLocality: "Coronel Fabriciano",
      addressRegion: "MG",
      postalCode: "35170-000",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/avancatecoficial",
      "https://www.facebook.com/colegioavancatec",
      "https://colegioavancatec.com.br",
    ],
    hasCourse: [
      {
        "@type": "Course",
        name: "Curso Técnico em Enfermagem",
        description:
          "Formação completa e reconhecida pelo MEC para quem deseja atuar na área da saúde.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Colégio AvançaTec",
        },
      },
      {
        "@type": "Course",
        name: "Curso de Refrigeração e Climatização",
        description:
          "Curso técnico prático com foco em refrigeração e climatização residencial e comercial.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Colégio AvançaTec",
        },
      },
      {
        "@type": "Course",
        name: "Curso Técnico em Administração",
        description:
          "Capacitação para atuar em empresas, gestão de pessoas e processos administrativos.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Colégio AvançaTec",
        },
      },
    ],
    openingHours: "Mo-Fr 08:00-18:00",
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://colegioavancatec.com.br";
  const lastModified = new Date();

  return [
    // Páginas principais
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sistec`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Seções internas
    {
      url: `${baseUrl}/#cursos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#Certificado`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contato`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Cursos específicos
    {
      url: `${baseUrl}/cursos/tecnico-em-enfermagem`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cursos/refrigeracao-e-climatizacao`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cursos/administracao`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cursos/informatica`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cursos/ead`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];
}
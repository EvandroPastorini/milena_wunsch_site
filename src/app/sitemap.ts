import type { MetadataRoute } from "next";
import { siteUrl } from "./business";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/media/photos/atendimento.jpg`,
        `${siteUrl}/media/photos/consultorio-canoas.jpg`,
        `${siteUrl}/media/photos/cuidado-proximo.jpg`,
      ],
    },
  ];
}

// Dados do negócio usados no site, nos metadados e no schema.org.
// Mantenha nome, endereço e telefone idênticos ao Perfil da Empresa no Google.

export const siteUrl = "https://podologamilenawunsch.com.br";

export const business = {
  name: "Milena Wunsch Podóloga",
  person: "Milena Wunsch",
  phone: "+5551995084242",
  phoneDisplay: "(51) 99508-4242",
  instagram: "https://www.instagram.com/milena.wunsch/",
  whatsapp:
    "https://wa.me/5551995084242?text=Ol%C3%A1%2C%20Milena!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento.",
  address: {
    // Preencha rua/número, bairro e CEP para reforçar a busca local.
    streetAddress: "",
    neighborhood: "",
    postalCode: "",
    city: "Canoas",
    region: "RS",
    country: "BR",
  },
  // Link "Como chegar" do Google Maps (Perfil da Empresa). Vazio esconde o botão.
  mapsUrl: "",
  // Formato schema.org, ex.: ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"]. Vazio omite.
  openingHours: [] as string[],
  areaServed: [
    "Canoas",
    "Esteio",
    "Sapucaia do Sul",
    "Nova Santa Rita",
    "Porto Alegre",
    "Cachoeirinha",
  ],
};

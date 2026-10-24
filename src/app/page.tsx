import Image from "next/image";
import {
  ArrowRight,
  Camera,
  Check,
  HeartPulse,
  Leaf,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { business, siteUrl } from "./business";

const whatsappHref = business.whatsapp;
const instagramHref = business.instagram;
const { address } = business;

const fullAddress = [
  address.streetAddress,
  address.neighborhood,
  `${address.city}/${address.region}`,
  address.postalCode,
]
  .filter(Boolean)
  .join(" · ");

const photos = [
  {
    src: "/media/photos/preparacao.jpg",
    alt: "Podóloga Milena Wunsch colocando as luvas ao lado da bancada do consultório em Canoas",
    title: "Antes de começar",
    text: "Preparação e atenção aos detalhes.",
  },
  {
    src: "/media/photos/instrumentos.jpg",
    alt: "Mãos com luvas segurando uma embalagem com instrumentos de podologia",
    title: "Cada detalhe importa",
    text: "Cuidado que começa na organização dos materiais.",
  },
  {
    src: "/media/photos/detalhe-atendimento.jpg",
    alt: "Milena avaliando os dedos do pé de uma pessoa durante o atendimento de podologia",
    title: "Um olhar individual",
    text: "Atenção às necessidades de cada pessoa.",
  },
];

const concerns = [
  "Unhas encravadas ou doloridas",
  "Calosidades, rachaduras e fissuras",
  "Desconforto ao caminhar",
  "Cuidados preventivos e acompanhamento",
];

const treatments = [
  {
    title: "Podologia preventiva",
    text: "Avaliação cuidadosa para manter os pés saudáveis e reduzir recorrências.",
  },
  {
    title: "Unha encravada",
    text: "Atendimento técnico para aliviar o desconforto da unha encravada com segurança e delicadeza.",
  },
  {
    title: "Calos e fissuras",
    text: "Remoção de calos e cuidado com rachaduras nos calcanhares para recuperar conforto ao caminhar.",
  },
  {
    title: "Micose nas unhas",
    text: "Orientação e acompanhamento de onicomicose com protocolos adequados para cada caso.",
  },
  {
    title: "Pés sensíveis",
    text: "Conduta adaptada para idosos, gestantes, pessoas com diabetes e quem precisa de atenção extra.",
  },
  {
    title: "Educação em cuidado",
    text: "Indicações práticas para rotina, hidratação, corte correto das unhas e prevenção.",
  },
];

const faqs = [
  {
    question: "Onde fica o consultório?",
    answer: address.streetAddress
      ? `O consultório fica em ${fullAddress}. Pelo WhatsApp você confirma o horário e recebe as orientações para chegar.`
      : "O consultório fica em Canoas/RS. Ao agendar pelo WhatsApp, você recebe o endereço completo e as orientações para chegar.",
  },
  {
    question: "Atende pessoas de outras cidades?",
    answer:
      "Sim. Além de Canoas, o consultório recebe pessoas de Esteio, Sapucaia do Sul, Nova Santa Rita, Cachoeirinha e Porto Alegre, especialmente da Zona Norte.",
  },
  {
    question: "Qual a diferença entre podóloga e pedicure?",
    answer:
      "A pedicure cuida da estética das unhas. A podóloga é a profissional da saúde dos pés: avalia e trata unha encravada, calos, fissuras, micose e outras alterações, com técnica, materiais apropriados e orientação preventiva.",
  },
  {
    question: "O atendimento dói?",
    answer:
      "A proposta é conduzir cada etapa com técnica, escuta e delicadeza. Em casos com dor prévia, a conduta é ajustada para preservar o máximo de conforto.",
  },
  {
    question: "Com que frequência devo ir à podóloga?",
    answer:
      "Depende de cada caso. Para manutenção preventiva, muitas pessoas retornam a cada 30 a 45 dias; em tratamentos como unha encravada ou micose, a Milena indica o intervalo ideal na avaliação.",
  },
  {
    question: "Preciso de encaminhamento médico?",
    answer:
      "Na maioria dos casos, não. Quando há sinais que pedem avaliação complementar, a orientação profissional adequada é indicada.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Clique em qualquer botão de WhatsApp no site, envie sua mensagem e combine o melhor horário diretamente com a Milena.",
  },
];

const postalAddress = {
  "@type": "PostalAddress",
  ...(address.streetAddress && { streetAddress: address.streetAddress }),
  ...(address.postalCode && { postalCode: address.postalCode }),
  addressLocality: address.city,
  addressRegion: address.region,
  addressCountry: address.country,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: business.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#negocio` },
    },
    {
      "@type": ["MedicalBusiness", "HealthAndBeautyBusiness"],
      "@id": `${siteUrl}/#negocio`,
      name: business.name,
      alternateName: "Podóloga Milena Wunsch",
      description:
        "Podóloga em Canoas/RS. Podologia clínica e preventiva: unha encravada, calos, fissuras, micose nas unhas e cuidado de pés sensíveis.",
      url: siteUrl,
      telephone: business.phone,
      logo: `${siteUrl}/brand/logo-horizontal.svg`,
      image: [
        `${siteUrl}/media/photos/atendimento.jpg`,
        `${siteUrl}/media/photos/consultorio-canoas.jpg`,
        `${siteUrl}/media/photos/cuidado-proximo.jpg`,
      ],
      medicalSpecialty: "Podiatric",
      address: postalAddress,
      areaServed: business.areaServed.map((city) => ({
        "@type": "City",
        name: `${city}, RS`,
      })),
      ...(business.mapsUrl && { hasMap: business.mapsUrl }),
      ...(business.openingHours.length > 0 && {
        openingHours: business.openingHours,
      }),
      founder: { "@id": `${siteUrl}/#milena` },
      sameAs: [instagramHref],
      knowsLanguage: "pt-BR",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: business.phone,
        contactType: "Agendamento",
        availableLanguage: "Portuguese",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tratamentos de podologia em Canoas",
        itemListElement: treatments.map((treatment) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: treatment.title,
            description: treatment.text,
            serviceType: "Podologia",
            areaServed: `${address.city}, ${address.region}`,
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#milena`,
      name: business.person,
      jobTitle: "Podóloga",
      image: `${siteUrl}/media/photos/consultorio-canoas.jpg`,
      worksFor: { "@id": `${siteUrl}/#negocio` },
      workLocation: { "@type": "Place", address: postalAddress },
      sameAs: [instagramHref],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#duvidas`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main id="conteudo">
      <a className="skip-link" href="#inicio">Pular para o conteúdo</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <a className="brand-mark" href="#inicio" aria-label="Milena Wunsch Podóloga">
          <Image
            src="/brand/logo-horizontal.svg"
            width={190}
            height={82}
            alt="Milena Wunsch Podóloga"
            priority
          />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#cuidados">Cuidados</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#consultorio">Consultório</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="icon-button header-action" href={whatsappHref}>
          <MessageCircle size={19} aria-hidden="true" />
          <span>Agendar</span>
        </a>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <h1>
            <span className="eyebrow hero-kicker">
              <MapPin size={15} aria-hidden="true" /> Podóloga em Canoas · RS
            </span>
            Seus pés merecem <span>esse cuidado.</span>
          </h1>
          <p>
            Podologia clínica e preventiva em Canoas para quem busca alívio,
            segurança e uma rotina de cuidado mais leve. Atendimento também para
            quem vem de Esteio, Sapucaia do Sul e Porto Alegre.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappHref}>
              <MessageCircle size={20} aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
            <a className="secondary-button" href="#consultorio">
              <MapPin size={18} aria-hidden="true" />
              Conheça o consultório
            </a>
          </div>
          <div className="hero-signature">
            <span className="signature-line" aria-hidden="true" />
            <span>Milena Wunsch <span className="signature-role">· Podóloga</span></span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src="/media/photos/atendimento.jpg"
              width={1200}
              height={1600}
              sizes="(max-width: 920px) 100vw, 48vw"
              alt="Podóloga Milena Wunsch avaliando os pés durante um atendimento em Canoas"
              priority
            />
            <div className="photo-caption">
              <span>Podologia clínica e preventiva</span>
              <strong>Cuidar é olhar de perto.</strong>
            </div>
          </div>
          <div className="hero-note">
            <ShieldCheck size={24} aria-hidden="true" />
            <span>Cuidado técnico, acolhedor e orientado à prevenção.</span>
          </div>
        </div>
      </section>

      <section className="concerns-section" id="cuidados">
        <div className="section-heading">
          <span className="eyebrow">Quando procurar uma podóloga</span>
          <h2>Pequenos desconfortos também merecem atenção.</h2>
        </div>
        <div className="concern-list">
          {concerns.map((item) => (
            <div className="concern-item" key={item}>
              <Check size={18} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="milena">
        <div className="about-media">
          <Image
            src="/media/photos/cuidado-proximo.jpg"
            width={1200}
            height={1600}
            sizes="(max-width: 920px) 100vw, 45vw"
            alt="Milena realizando uma avaliação cuidadosa dos pés, com sua marca no jaleco"
          />
        </div>
        <div className="about-copy">
          <span className="eyebrow">Quem é a Milena Wunsch</span>
          <h2>Por trás de cada cuidado, alguém que escuta você.</h2>
          <p>
            Milena Wunsch é podóloga em Canoas/RS. O cuidado começa por entender o
            que você sente: sua rotina, suas dúvidas e o conforto dos seus pés
            recebem atenção individual.
          </p>
          <p>
            Da avaliação às orientações para casa, cada etapa é conduzida com
            técnica, delicadeza e clareza para você cuidar melhor de si.
          </p>
          <div className="pill-row">
            <span>Atendimento humanizado</span>
            <span>Conduta preventiva</span>
            <span>Orientação individual</span>
          </div>
          <a className="text-link" href={whatsappHref}>
            Converse com a Milena <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="values-section" aria-label="Como a Milena trabalha">
        <div className="value-item">
          <Stethoscope size={28} aria-hidden="true" />
          <h3>Técnica</h3>
          <p>Procedimentos conduzidos com critério, higiene e atenção ao detalhe.</p>
        </div>
        <div className="value-item">
          <HeartPulse size={28} aria-hidden="true" />
          <h3>Acolhimento</h3>
          <p>Escuta ativa para entender sua queixa e respeitar seu ritmo.</p>
        </div>
        <div className="value-item">
          <Leaf size={28} aria-hidden="true" />
          <h3>Prevenção</h3>
          <p>Orientações simples para manter o resultado também em casa.</p>
        </div>
      </section>

      <section className="treatments-section" id="tratamentos">
        <div className="section-heading wide">
          <span className="eyebrow">Tratamentos de podologia em Canoas</span>
          <h2>Cuidado para aliviar, prevenir e devolver bem-estar.</h2>
          <p>
            Cada atendimento considera sua rotina, sensibilidade e necessidade do
            momento.
          </p>
        </div>
        <div className="treatment-grid">
          {treatments.map((treatment) => (
            <article className="treatment-card" key={treatment.title}>
              <Sparkles size={20} aria-hidden="true" />
              <h3>{treatment.title}</h3>
              <p>{treatment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="location-section" id="consultorio" aria-labelledby="consultorio-title">
        <div className="location-media">
          <Image
            src="/media/photos/consultorio-canoas.jpg"
            width={1200}
            height={1600}
            sizes="(max-width: 920px) 100vw, 45vw"
            alt="Podóloga Milena Wunsch abrindo uma embalagem de instrumentos no consultório em Canoas, com vista para a cidade"
          />
        </div>
        <div className="location-copy">
          <span className="eyebrow">Consultório em Canoas</span>
          <h2 id="consultorio-title">Um espaço claro e tranquilo, perto de você.</h2>
          <p>
            O atendimento acontece em consultório próprio em Canoas, preparado
            para receber você com conforto, higiene e privacidade.
          </p>
          <address className="location-address">
            <MapPin size={20} aria-hidden="true" />
            <span>
              <strong>{business.name}</strong>
              {fullAddress}
            </span>
          </address>
          <div className="location-actions">
            <a className="primary-button" href={whatsappHref}>
              <MessageCircle size={20} aria-hidden="true" />
              Agendar avaliação
            </a>
            {business.mapsUrl && (
              <a
                className="secondary-button"
                href={business.mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Navigation size={18} aria-hidden="true" />
                Como chegar
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="section-heading">
          <span className="eyebrow">O cuidado está nos detalhes</span>
          <h2 id="gallery-title">Da preparação ao atendimento.</h2>
        </div>
        <div className="photo-grid">
          {photos.map((photo) => (
            <figure className="photo-card" key={photo.src}>
              <div className="gallery-photo">
                <Image src={photo.src} alt={photo.alt} width={1200} height={1600} sizes="(max-width: 640px) 100vw, (max-width: 920px) 50vw, 33vw" />
              </div>
              <figcaption><h3>{photo.title}</h3><p>{photo.text}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="faq-section" id="duvidas">
        <div className="section-heading">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>Antes de agendar, tire as principais dúvidas.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <ArrowRight size={18} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div>
          <span className="eyebrow">Agendamento</span>
          <h2>Fale com a Milena e combine seu atendimento.</h2>
          <p>
            Envie uma mensagem pelo WhatsApp para consultar disponibilidade,
            horários e informações para chegar ao consultório em Canoas.
          </p>
        </div>
        <div className="contact-actions">
          <a className="primary-button light" href={whatsappHref}>
            <MessageCircle size={20} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a
            className="secondary-button light-outline"
            href={instagramHref}
            rel="noreferrer"
            target="_blank"
          >
            <Camera size={19} aria-hidden="true" />
            @milena.wunsch
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <Image
          src="/brand/isotipo.svg"
          width={46}
          height={46}
          alt=""
          aria-hidden="true"
        />
        <span>{business.name}</span>
        <span>Podologia em {address.city}/{address.region}</span>
        <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
        <span>Todos os direitos reservados.</span>
      </footer>
    </main>
  );
}

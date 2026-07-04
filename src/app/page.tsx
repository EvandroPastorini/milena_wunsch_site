import Image from "next/image";
import {
  ArrowRight,
  Camera,
  Check,
  HeartPulse,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/5551995084242?text=Ol%C3%A1%2C%20Milena!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento.";

const instagramHref = "https://www.instagram.com/milena.wunsch/";

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
    title: "Unhas encravadas",
    text: "Atendimento técnico para aliviar o desconforto com segurança e delicadeza.",
  },
  {
    title: "Calos e fissuras",
    text: "Cuidado profissional para recuperar conforto, acabamento e bem-estar.",
  },
  {
    title: "Micose nas unhas",
    text: "Orientação e acompanhamento com protocolos adequados para cada caso.",
  },
  {
    title: "Pés sensíveis",
    text: "Conduta adaptada para idosos, gestantes e pessoas que precisam de atenção extra.",
  },
  {
    title: "Educação em cuidado",
    text: "Indicações práticas para rotina, hidratação, corte de unhas e prevenção.",
  },
];

const faqs = [
  {
    question: "O atendimento dói?",
    answer:
      "A proposta é conduzir cada etapa com técnica, escuta e delicadeza. Em casos com dor prévia, a conduta é ajustada para preservar o máximo de conforto.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer:
      "O tempo pode variar conforme a necessidade do atendimento. Pelo WhatsApp, a Milena orienta melhor a previsão para o seu caso.",
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

export default function Home() {
  return (
    <main>
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
          <span className="eyebrow">Podologia com escuta e precisão</span>
          <h1>Saúde e conforto para os seus pés, com cuidado profissional.</h1>
          <p>
            Atendimento em podologia clínica e preventiva para quem busca alívio,
            segurança e uma rotina de cuidado mais leve.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappHref}>
              <MessageCircle size={20} aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
            <a
              className="secondary-button"
              href={instagramHref}
              rel="noreferrer"
              target="_blank"
            >
              <Camera size={19} aria-hidden="true" />
              Ver Instagram
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Identidade visual Milena Wunsch">
          <div className="logo-panel">
            <Image
              src="/brand/logo-horizontal-light.svg"
              width={390}
              height={220}
              alt="Logotipo Milena Wunsch Podóloga"
              priority
            />
          </div>
          <div className="hero-note">
            <ShieldCheck size={24} aria-hidden="true" />
            <span>Cuidado técnico, acolhedor e orientado à prevenção.</span>
          </div>
        </div>
      </section>

      <section className="concerns-section" id="cuidados">
        <div className="section-heading">
          <span className="eyebrow">Quando procurar</span>
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

      <section className="about-section">
        <div className="about-media">
          <Image
            src="/applications/logotipo-laranja.jpg"
            width={900}
            height={600}
            alt="Aplicação da identidade visual Milena Wunsch em ficha de anamnese"
          />
        </div>
        <div className="about-copy">
          <span className="eyebrow">Milena Wunsch</span>
          <h2>Uma presença profissional que une clareza, equilíbrio e proximidade.</h2>
          <p>
            A marca da Milena foi criada para transmitir confiança e acolhimento.
            No atendimento, essa mesma intenção aparece em cada detalhe: escuta,
            higiene, técnica e orientação clara para o cuidado diário.
          </p>
          <div className="pill-row">
            <span>Atendimento humanizado</span>
            <span>Conduta preventiva</span>
            <span>Orientação individual</span>
          </div>
        </div>
      </section>

      <section className="values-section">
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
          <span className="eyebrow">Tratamentos</span>
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
            horários e informações para chegar ao atendimento.
          </p>
        </div>
        <div className="contact-actions">
          <a className="primary-button light" href={whatsappHref}>
            <MessageCircle size={20} aria-hidden="true" />
            +55 51 99508-4242
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
        <span>Milena Wunsch Podóloga</span>
        <span>Todos os direitos reservados.</span>
      </footer>
    </main>
  );
}

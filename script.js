const services = {
  "posto-fixo": {
    title: "Bombeiro Civil — Posto Fixo",
    content: `
      <p>Disponibilização de <strong>Bombeiros Civis para atuação permanente nas instalações do cliente</strong>, com foco na prevenção e combate a princípios de incêndio, primeiros socorros, abandono de área e inspeções preventivas.</p>
      <p>Atendemos condomínios, empresas, indústrias, centros comerciais, instituições e demais estabelecimentos que necessitem de uma brigada profissional fixa, dimensionada de acordo com as características e necessidades de cada local.</p>
    `
  },
  "eventos": {
    title: "Bombeiro Civil para Eventos",
    content: `
      <p>Fornecimento de <strong>Bombeiros Civis para eventos de pequeno, médio e grande porte</strong>, atuando na prevenção de incêndios, primeiros socorros, controle de situações de emergência e apoio à evacuação do público.</p>
      <p>Atendemos shows, feiras, congressos, festas, eventos corporativos, esportivos, culturais e demais atividades temporárias, com possibilidade de fornecimento de equipe conforme o porte e o risco do evento.</p>
    `
  },
  "piscina": {
    title: "Guardião de Piscina",
    content: `
      <p>Disponibilização de <strong>profissionais capacitados para prevenção de acidentes e atendimento de emergências em piscinas e áreas aquáticas</strong>.</p>
      <p>Indicado para condomínios, clubes, hotéis, escolas, academias, centros esportivos e espaços de lazer, proporcionando maior segurança aos usuários e suporte imediato em situações de emergência.</p>
    `
  },
  "bvi": {
    title: "Treinamento de Brigada Voluntária — BVI",
    content: `
      <p>Realização de <strong>treinamentos teóricos e práticos para formação e capacitação de Brigadistas Voluntários de Incêndio</strong>, preparando os participantes para agir corretamente em situações de emergência.</p>
      <p>Os treinamentos abrangem prevenção e combate a incêndio, utilização de extintores, abandono de área, procedimentos de emergência e primeiros socorros, de acordo com o escopo contratado e as normas aplicáveis.</p>
    `
  },
  "manutencao": {
    title: "Manutenção de Sistemas de Prevenção e Combate a Incêndio",
    content: `
      <p>Execução de <strong>inspeção, manutenção preventiva e corretiva dos sistemas de segurança contra incêndio</strong>, visando manter equipamentos e instalações em condições adequadas de funcionamento.</p>
      <p>Podemos atender sistemas como hidrantes, mangueiras, bombas de incêndio, sinalização, iluminação de emergência, alarmes e demais componentes, conforme a necessidade da edificação.</p>
    `
  },
  "extintores": {
    title: "Recarga e Manutenção de Extintores",
    content: `
      <p>Serviços de <strong>inspeção, manutenção e recarga de extintores de incêndio</strong>, de acordo com o tipo de equipamento e agente extintor.</p>
      <p>O objetivo é garantir que os equipamentos permaneçam em condições adequadas de utilização, dentro dos prazos de manutenção e conforme as exigências técnicas aplicáveis.</p>
    `
  },
  "projetos": {
    title: "Projetos e Instalações de Sistemas Contra Incêndio",
    content: `
      <p>Elaboração de <strong>projetos de prevenção e combate a incêndio</strong>, além da execução e adequação das instalações necessárias para atendimento das exigências técnicas e de segurança.</p>
      <p>Os serviços podem contemplar sistemas de hidrantes, extintores, sinalização, iluminação de emergência, alarmes, detecção, bombas, tubulações e demais medidas de segurança previstas para cada tipo de edificação.</p>
    `
  }
};

// Header
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Products / Services split interaction
const splitPanels = document.querySelectorAll(".split-panel");

function activatePanel(panel) {
  if (window.innerWidth <= 980) {
    const wasActive = panel.classList.contains("is-active");
    splitPanels.forEach(p => p.classList.remove("is-active"));
    if (!wasActive) panel.classList.add("is-active");
  }
}

splitPanels.forEach(panel => {
  panel.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    activatePanel(panel);
  });

  panel.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activatePanel(panel);
    }
  });
});

// Modal
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

function openModal(key) {
  const data = services[key];
  if (!data) return;
  modalTitle.textContent = data.title;
  modalContent.innerHTML = data.content;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".service-more").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.service));
});

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

// Demo contact form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // OPÇÃO 1: configure um número de WhatsApp abaixo:
  const whatsapp = ""; // Ex.: 5521999999999

  const data = new FormData(contactForm);
  const message = [
    "Olá, Comando Fire! Gostaria de solicitar um orçamento.",
    "",
    `Nome: ${data.get("nome") || ""}`,
    `Empresa: ${data.get("empresa") || ""}`,
    `Telefone: ${data.get("telefone") || ""}`,
    `E-mail: ${data.get("email") || ""}`,
    `Serviço: ${data.get("servico") || ""}`,
    `Mensagem: ${data.get("mensagem") || ""}`
  ].join("\n");

  if (whatsapp) {
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  } else {
    alert("Formulário pronto. Insira o número de WhatsApp da Comando Fire no arquivo script.js para ativar o envio.");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const CONFIG = {
  whatsapp: "5521980924302",
  instagramUrl: "https://www.instagram.com/comandofirerj?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  instagramHandle: "@comandofirerj",
  address: "Av. Marechal Câmara, 160, sala 1107, Centro - RJ",
  email: "adm@comandofire.com"
};

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".hero-dots button")];
let current = 0;
let timer;

function showSlide(index){
  current = (index + slides.length) % slides.length;
  slides.forEach((s,i)=>s.classList.toggle("active",i===current));
  dots.forEach((d,i)=>d.classList.toggle("active",i===current));
}
function nextSlide(){ showSlide(current+1); }
function resetTimer(){ clearInterval(timer); timer=setInterval(nextSlide, 6000); }

document.querySelector(".hero-arrow.next").addEventListener("click",()=>{nextSlide();resetTimer();});
document.querySelector(".hero-arrow.prev").addEventListener("click",()=>{showSlide(current-1);resetTimer();});
dots.forEach(d=>d.addEventListener("click",()=>{showSlide(Number(d.dataset.slide));resetTimer();}));
resetTimer();

const menuBtn=document.querySelector(".menu-btn");
const menu=document.querySelector(".menu");
menuBtn.addEventListener("click",()=>{
  const open=menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",open?"true":"false");
});
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));

document.querySelectorAll(".gallery-tabs button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".gallery-tabs button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".gallery-panel").forEach(p=>p.classList.remove("active"));
    document.getElementById(btn.dataset.gallery).classList.add("active");
  });
});

const details = {
  posto:["Bombeiro Civil — Posto Fixo","Disponibilização de Bombeiros Civis para atuação permanente nas instalações do cliente, com foco na prevenção e combate a princípios de incêndio, primeiros socorros, abandono de área e inspeções preventivas. Atendemos condomínios, empresas, indústrias, centros comerciais, instituições e demais estabelecimentos que necessitem de brigada profissional fixa."],
  eventos:["Bombeiro Civil para Eventos","Fornecimento de Bombeiros Civis para eventos de pequeno, médio e grande porte, atuando na prevenção de incêndios, primeiros socorros, controle de emergências e apoio à evacuação do público. Atendimento para shows, feiras, congressos, festas, eventos corporativos, esportivos e culturais."],
  piscina:["Guardião de Piscina","Profissionais capacitados para prevenção de acidentes e atendimento de emergências em piscinas e áreas aquáticas. Indicado para condomínios, clubes, hotéis, escolas, academias, centros esportivos e espaços de lazer."],
  bvi:["Treinamento de Brigada Voluntária — BVI","Treinamentos teóricos e práticos para formação e capacitação de Brigadistas Voluntários de Incêndio, incluindo prevenção e combate a incêndio, uso de extintores, abandono de área, procedimentos de emergência e primeiros socorros, conforme o escopo contratado."],
  manutencao:["Manutenção de Sistemas de Prevenção e Combate a Incêndio","Inspeção, manutenção preventiva e corretiva de sistemas como hidrantes, mangueiras, bombas de incêndio, sinalização, iluminação de emergência, alarmes e demais componentes."],
  extintores:["Recarga e Manutenção de Extintores","Serviços de inspeção, manutenção e recarga de extintores de incêndio de acordo com o tipo de equipamento e agente extintor, buscando manter os equipamentos em condições adequadas de utilização."],
  projetos:["Projetos e Instalações de Sistemas Contra Incêndio","Elaboração de projetos, adequações e instalações de sistemas de hidrantes, extintores, sinalização, iluminação de emergência, alarmes, detecção, bombas, tubulações e demais medidas de segurança aplicáveis."]
};

const modal=document.getElementById("serviceModal");
document.querySelectorAll("[data-modal]").forEach(btn=>btn.addEventListener("click",()=>{
  const [title,text]=details[btn.dataset.modal];
  document.getElementById("modalTitle").textContent=title;
  document.getElementById("modalText").innerHTML=`<p>${text}</p>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}));
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",()=>{
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}));

// Aplicação dos dados de contato quando forem preenchidos no CONFIG.
document.getElementById("contactAddress").textContent=CONFIG.address;
document.getElementById("contactInstagram").textContent=CONFIG.instagramHandle;
const contactEmail = document.getElementById("contactEmail");
if (contactEmail) contactEmail.textContent = CONFIG.email;
if(CONFIG.whatsapp){
  const pretty=CONFIG.whatsapp;
  document.getElementById("contactPhone").textContent=pretty;
  document.getElementById("whatsappFloat").href=`https://wa.me/${CONFIG.whatsapp}`;
  document.getElementById("whatsappFloat").target="_blank";
}
if(CONFIG.instagramUrl){
  document.getElementById("instagramFloat").href=CONFIG.instagramUrl;
  document.getElementById("instagramFloat").target="_blank";
}

document.getElementById("budgetForm").addEventListener("submit",e=>{
  e.preventDefault();
  const fd=new FormData(e.currentTarget);
  const msg=[
    "Olá, Comando Fire! Gostaria de solicitar um orçamento.",
    "",
    `Nome: ${fd.get("nome")||""}`,
    `Empresa/Local: ${fd.get("empresa")||""}`,
    `Telefone: ${fd.get("telefone")||""}`,
    `Serviço: ${fd.get("servico")||""}`,
    `Mensagem: ${fd.get("mensagem")||""}`
  ].join("\n");
  if(CONFIG.whatsapp){
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank");
  } else {
    alert("O formulário está pronto. Falta inserir o número oficial do WhatsApp no arquivo script.js.");
  }
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&modal.classList.contains("open")){
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }
});

document.getElementById("year").textContent=new Date().getFullYear();

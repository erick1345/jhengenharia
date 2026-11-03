// Header scroll state
const header = document.getElementById('header');
const onScroll = () => {
  if (window.scrollY > 10) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> send via WhatsApp
const WHATSAPP_NUMBER = '5542999528989';
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  const nome = (data.get('nome') || '').toString().trim();
  const telefone = (data.get('telefone') || '').toString().trim();
  const servico = (data.get('servico') || '').toString().trim();
  const mensagem = (data.get('mensagem') || '').toString().trim();

  const lines = [
    'Olá! Gostaria de solicitar um orçamento.',
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `Serviço de interesse: ${servico}`
  ];
  if (mensagem) lines.push(`Mensagem: ${mensagem}`);

  const text = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
});

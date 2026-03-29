import './style.css'

// スクロール時のフェードインアニメーション
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => observer.observe(el));
});

// ナビゲーションのスムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// パララックスエフェクト（ヒーロー画像）
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg');
  const scrollPos = window.scrollY;
  if(heroBg && scrollPos < window.innerHeight) {
    heroBg.style.transform = `scale(1.05) translateY(${scrollPos * 0.3}px)`;
  }
});

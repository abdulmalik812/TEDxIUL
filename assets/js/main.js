// Original Prototype by Abdul Malik (@abdulmalik812)
// ── 3D TESSELLATION CANVAS ──
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let W, H, particles, triangles, animId;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  initScene();
}

function rand(a, b) { return a + Math.random() * (b - a); }

// Colors from the poster: dark navy bg, red triangles, purple/blue X-like shards
const COLORS = [
  'rgba(230,43,30,',      // red
  'rgba(107,63,160,',     // purple
  'rgba(45,107,228,',     // blue
  'rgba(180,60,200,',     // pink-purple
  'rgba(255,255,255,',    // white shards
];

function initScene() {
  particles = [];
  triangles = [];
  const count = Math.floor(W * H / 8000);

  for (let i = 0; i < count; i++) {
    const col = COLORS[Math.floor(Math.random() * COLORS.length)];
    const size = rand(6, 38);
    particles.push({
      x: rand(0, W), y: rand(0, H),
      vx: rand(-0.18, 0.18), vy: rand(-0.12, 0.12),
      size,
      col,
      alpha: rand(0.08, 0.55),
      rot: rand(0, Math.PI * 2),
      rotSpeed: rand(-0.004, 0.004),
      type: Math.random() > 0.35 ? 'tri' : 'shard',
    });
  }

  // Static glowing particles (stars)
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: rand(0, W), y: rand(0, H),
      vx: rand(-0.04, 0.04), vy: rand(-0.04, 0.04),
      size: rand(1, 2.5),
      col: 'rgba(255,255,255,',
      alpha: rand(0.1, 0.6),
      rot: 0, rotSpeed: 0,
      type: 'dot',
    });
  }
}

function drawTriangle(x, y, size, rot, col, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(size * 0.866, size * 0.5);
  ctx.lineTo(-size * 0.866, size * 0.5);
  ctx.closePath();
  ctx.fillStyle = col + alpha + ')';
  ctx.fill();
  ctx.restore();
}

function drawShard(x, y, size, rot, col, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  const w = size * 0.45, h = size;
  ctx.beginPath();
  ctx.moveTo(0, -h);
  ctx.lineTo(w, h * 0.3);
  ctx.lineTo(0, h * 0.7);
  ctx.lineTo(-w * 0.6, h * 0.1);
  ctx.closePath();
  ctx.fillStyle = col + alpha + ')';
  ctx.fill();
  ctx.restore();
}

// Draw glowing "X" shape in center
function drawCenterX() {
  const cx = W / 2, cy = H / 2 - 40;
  const size = Math.min(W, H) * 0.22;

  // Glow
  const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 1.2);
  grd.addColorStop(0, 'rgba(107,63,160,0.18)');
  grd.addColorStop(0.5, 'rgba(45,107,228,0.08)');
  grd.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(cx, cy, size * 1.2, 0, Math.PI * 2);
  ctx.fillStyle = grd;
  ctx.fill();

  // X arms
  const arm = size * 0.55, thick = size * 0.18;
  ctx.save();
  ctx.translate(cx, cy);

  // Draw X as two crossing rectangles
  [Math.PI / 4, -Math.PI / 4].forEach(angle => {
    ctx.save();
    ctx.rotate(angle);
    const lg = ctx.createLinearGradient(-arm, 0, arm, 0);
    lg.addColorStop(0, 'rgba(180,140,255,0.15)');
    lg.addColorStop(0.5, 'rgba(200,180,255,0.4)');
    lg.addColorStop(1, 'rgba(100,180,255,0.15)');
    ctx.fillStyle = lg;
    ctx.beginPath();
    ctx.roundRect(-arm, -thick / 2, arm * 2, thick, thick * 0.15);
    ctx.fill();

    // edge glow
    ctx.strokeStyle = 'rgba(220,200,255,0.25)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  });

  // Center bright node
  const cr = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.12);
  cr.addColorStop(0, 'rgba(255,255,255,0.6)');
  cr.addColorStop(0.4, 'rgba(200,180,255,0.3)');
  cr.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.12, 0, Math.PI * 2);
  ctx.fillStyle = cr;
  ctx.fill();

  ctx.restore();
}

let frame = 0;
function animate() {
  animId = requestAnimationFrame(animate);
  frame++;

  // Deep space background
  ctx.fillStyle = 'rgba(5,5,16,0.18)';
  ctx.fillRect(0, 0, W, H);

  // Subtle nebula blobs
  if (frame % 3 === 0) {
    [[W * 0.2, H * 0.3, 'rgba(230,43,30,0.025)'],
    [W * 0.8, H * 0.7, 'rgba(107,63,160,0.03)'],
    [W * 0.6, H * 0.2, 'rgba(45,107,228,0.02)']].forEach(([x, y, c]) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, W * 0.3);
      g.addColorStop(0, c); g.addColorStop(1, 'transparent');
      ctx.beginPath(); ctx.arc(x, y, W * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
    });
  }

  drawCenterX();

  // Particles
  for (const p of particles) {
    p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed;
    if (p.x < -50) p.x = W + 50;
    if (p.x > W + 50) p.x = -50;
    if (p.y < -50) p.y = H + 50;
    if (p.y > H + 50) p.y = -50;

    if (p.type === 'tri') drawTriangle(p.x, p.y, p.size, p.rot, p.col, p.alpha);
    else if (p.type === 'shard') drawShard(p.x, p.y, p.size, p.rot, p.col, p.alpha);
    else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.col + p.alpha + ')';
      ctx.fill();
    }
  }
}

// Initial full clear
function start() {
  ctx.fillStyle = '#050510';
  ctx.fillRect(0, 0, W, H);
  animate();
}

window.addEventListener('resize', () => { cancelAnimationFrame(animId); resize(); });
resize();
start();

// ── COUNTDOWN ──
const eventDate = new Date('2026-09-15T14:00:00').getTime();
function tick() {
  const diff = eventDate - Date.now();
  if (diff <= 0) return;
  const pad = n => String(Math.floor(n)).padStart(2, '0');
  document.getElementById('days').textContent = pad(diff / 86400000);
  document.getElementById('hours').textContent = pad((diff % 86400000) / 3600000);
  document.getElementById('minutes').textContent = pad((diff % 3600000) / 60000);
  document.getElementById('seconds').textContent = pad((diff % 60000) / 1000);
}
tick(); setInterval(tick, 1000);

// ── GSAP SCROLL ANIMATIONS ──
gsap.registerPlugin(ScrollTrigger);

// Hero content entrance (replaces CSS keyframe animations)
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl
  .from('.hero-badge', { opacity: 0, y: 30, duration: 0.7, delay: 0.3 })
  .from('.hero-logo-row', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
  .from('.hl-tagline', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
  .from('.hero-title', { opacity: 0, y: 40, scale: 0.95, duration: 1 }, '-=0.3')
  .from('.hero-sub', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
  .from('.hero-date', { opacity: 0, y: 20, duration: 0.7 }, '-=0.4')
  .from('.hero-line', { opacity: 0, scaleX: 0, duration: 0.6 }, '-=0.3')
  .from('.hero-desc', { opacity: 0, y: 20, duration: 0.7 }, '-=0.3')
  .from('.hero-ctas', { opacity: 0, y: 20, duration: 0.7 }, '-=0.3');

// Fade-in elements on scroll
gsap.utils.toArray('.fade-in').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  });
});

// Timeline items – staggered slide-in from left
gsap.utils.toArray('.tl-item').forEach((item, i) => {
  gsap.from(item, {
    opacity: 0,
    x: -30,
    duration: 0.7,
    delay: i * 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  });
});

// Speaker cards – staggered pop-up
gsap.from('.sp-card', {
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 0.6,
  stagger: 0.12,
  ease: 'back.out(1.4)',
  scrollTrigger: {
    trigger: '.speakers-grid',
    start: 'top 80%',
    toggleActions: 'play none none none',
  }
});

// Countdown items – scale bounce
gsap.from('.cd-item', {
  opacity: 0,
  scale: 0.8,
  y: 30,
  duration: 0.6,
  stagger: 0.1,
  ease: 'back.out(1.7)',
  scrollTrigger: {
    trigger: '.cd-grid',
    start: 'top 80%',
    toggleActions: 'play none none none',
  }
});

// Ticket cards – staggered scale-up
gsap.from('.ticket-card', {
  opacity: 0,
  y: 60,
  scale: 0.9,
  duration: 0.8,
  stagger: 0.15,
  ease: 'back.out(1.4)',
  scrollTrigger: {
    trigger: '.tickets-grid',
    start: 'top 80%',
    toggleActions: 'play none none none',
  }
});

// Sponsor boxes – fade stagger
gsap.from('.sp-box', {
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.08,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.sp-row',
    start: 'top 85%',
    toggleActions: 'play none none none',
  }
});

// FAQ items – slide in
gsap.from('.faq-item', {
  opacity: 0,
  x: -20,
  duration: 0.5,
  stagger: 0.08,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.faq-list',
    start: 'top 80%',
    toggleActions: 'play none none none',
  }
});

// Contact section – form and info slide in from opposite sides
gsap.from('.contact-inner > div:first-child', {
  opacity: 0,
  x: -50,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 75%',
    toggleActions: 'play none none none',
  }
});
gsap.from('.contact-info-col', {
  opacity: 0,
  x: 50,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 75%',
    toggleActions: 'play none none none',
  }
});

// Navbar hide/show on scroll
const showNav = gsap.from('nav', {
  yPercent: -100,
  paused: true,
  duration: 0.3,
  ease: 'power2.inOut',
}).progress(1);

ScrollTrigger.create({
  start: 'top top',
  end: 'max',
  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse();
  }
});

// ── FAQ ──
function toggleFaq(btn) {
  const ans = btn.nextElementSibling, open = ans.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q.open').forEach(q => q.classList.remove('open'));
  if (!open) { ans.classList.add('open'); btn.classList.add('open'); }
}

// ============================================================
// Mobile nav toggle
// ============================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

// ============================================================
// Contact form (client-side only demo — hubungkan ke backend
// atau layanan form seperti Formspree jika ingin benar-benar
// mengirim pesan)
// ============================================================
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    note.textContent = 'Mohon lengkapi semua kolom dengan benar.';
    note.style.color = '#B8622E';
    return;
  }

  const name = document.getElementById('name').value.trim();
  note.textContent = `Terima kasih, ${name}. Pesan Anda tersimpan (demo lokal).`;
  note.style.color = '#52735F';
  form.reset();
});

// ============================================================
// TODO: ganti '#' pada #projectLink dengan URL situs Toko Batik
// setelah situs dinamis selesai di-deploy.
// ============================================================
document.getElementById('projectLink').setAttribute('href', '#');

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

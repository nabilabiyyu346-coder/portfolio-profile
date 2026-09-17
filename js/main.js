// ============================================================
// Mobile nav toggle & galeri lightbox sekarang ditangani oleh
// Alpine.js langsung lewat atribut x-data / @click di index.html.
// ============================================================

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

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

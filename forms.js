document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('contactMsg');
  if (!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const entries = JSON.parse(localStorage.getItem('contactSubmissions')||'[]');
    entries.push({...data, ts: Date.now()});
    localStorage.setItem('contactSubmissions', JSON.stringify(entries));
    msg.textContent = 'Thanks! We will reach out shortly.';
    form.reset();
  });
});
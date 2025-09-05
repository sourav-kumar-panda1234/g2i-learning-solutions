document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});
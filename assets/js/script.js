// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// Modal logic
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImage');

document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modalImg.src = img.getAttribute('data-img');
  });
});

modal.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalImg.src = '';
});

function logout() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
  }
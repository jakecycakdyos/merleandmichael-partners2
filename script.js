document.addEventListener('DOMContentLoaded', () => {
  const partners = document.querySelectorAll('.partner');
  partners.forEach(partner => {
    const details = partner.querySelector('.details');
    partner.addEventListener('click', () => {
      const isOpen = partner.classList.contains('open');
      partners.forEach(p => {
        p.classList.remove('open');
        p.querySelector('.details').style.maxHeight = null;
      });
      if (!isOpen) {
        partner.classList.add('open');
        details.style.maxHeight = details.scrollHeight + 'px';
      }
    });
  });
});

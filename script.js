// Scroll smooth nav
document.querySelectorAll('header nav a').forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  };
};

// Scroll tombol "Beli Sekarang"
document.querySelectorAll('.scroll-to-form').forEach(btn => {
  btn.onclick = () => {
    document.querySelector('#form-pembelian').scrollIntoView({ behavior: 'smooth' });
  };
});
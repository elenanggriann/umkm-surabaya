$(document).ready(function() {
  // Menyembunyikan popup saat halaman pertama kali dimuat
  $('.carousel-popup').hide(); 

  // Saat tombol gallery ditekan, munculkan popup
  $('.gallery__product').on('click', function() {
      $('.carousel-popup').fadeIn();
  });

  // Saat carousel-inner ditekan, sembunyikan popup
  $('.carousel-popup__bg').on('click', function() {
      $('.carousel-popup').fadeOut();
  });
});
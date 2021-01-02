// event pada saat link
// "jquery tolong carikan elemen 'page-scroll'" "jika di-'click' jalankan function()"
$('.page-scroll').on('click', function(e){
    
    // ambil isi h ref
    var href = $(this).attr('href');
    // tangkap elemen bersangkutan
    var elemenHref = $(href);
    
    // pindah scroll
    $('html, body').animate({
        scrollTop: elemenHref.offset().top - 50
    }, 1200);

    e.preventDefault();
});
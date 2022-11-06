// loader
var loade = document.getElementById("loader");

        window.addEventListener("load", function(){
            loader.style.display = "none";
        })
        
// Smooth scroll
$('.navbar a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },
         800
        );
    }
});


$('.home-link').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },
         1800
        );
    }
});
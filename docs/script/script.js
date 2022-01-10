$(document).ready(function(){
        $(".item").magnificPopup({
        	type : 'image',
        	fixedContentPos: true,
        	closeBtnInside: false,
		fixedContentPos: true,
        	removalDelay: 300,
        	mainClass: 'mfp-fade',
        });
    });

document.querySelector('.btn__nav').onclick = function (e) {
        var menu = document.querySelector('.menu');
        var btn = document.querySelector('.btn__nav');
        var dots = document.querySelector('.fp-right'); 

        menu.classList.toggle('is-active');
        btn.classList.toggle('is-active');
        dots.classList.toggle('is-active');

        e.preventDefault(); 
};







/* paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
};

Pace.on('done', function() {
        $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19, 1, 0.22, 1]));

        $("#preloader").delay(1500).animate({top: '-1000'}, 2000, $.bez([0.19, 1, 0.22, 1]));
        
        TweenMax.from(".title", 2, {
                delay: 1.8,
                y: 10,
                opacity: 0, 
                ease: Expo.easeInOut
        });

}); */
// --hr--
$('.hr_nav-box-right').on('click',function(){
     $('.hr_nav-list').slideToggle();
});
$('.hr_nav-list-item-1').hover(function(){
    $('.hr_nav-list-item-dropdown')
    .stop().fadeToggle();
});


$( '#acdn-button' ).click( function()
{
    $( '#acdn-target' ).slideToggle() ;
} ) ;



// --hr--

// --top--
$('.admission_contents-link').hover(function(){
	$('.admission_contents').addClass('padding-bottom');
}, function() {
	$('.admission_contents').removeClass('padding-bottom');
});
// --top--

// --news event--
$('.detail5').on('click',function(){
     $('.hide5').slideToggle();
});
$('.detail4').on('click',function(){
     $('.hide4').slideToggle();
});
$('.detail3').on('click',function(){
     $('.hide3').slideToggle();
});
$('.detail2').on('click',function(){
     $('.hide2').slideToggle();
});
$('.detail1').on('click',function(){
     $('.hide1').slideToggle();
});
// --news event--

new WOW().init();




// if (window.matchMedia('(min-width: 1008px)').matches) {

// $('.hr_nav-list-item-button').on('click',function(){
//      $('.hr_nav-list-item-dropdown').slideToggle();
// });

// }


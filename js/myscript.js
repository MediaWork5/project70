/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    
    
    $('.link1').click(function() {

        $('html, body').animate({

            scrollTop: $('#pashak').offset().top

        },2500);

    });
    
    
    $('.link2').click(function() {

        $('html, body').animate({

            scrollTop: $('#laly-group').offset().top

        },2500);

    });
    
    
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
        scrollButton.click(function(){
            
            $("html, body").animate({ scrollTop: 0}, 2000);
            
        });
        
    });
    
    
    // special for navbar addation
    
    $(window).scroll(function(){
        
        if($(window).scrollTop() >=500){
            
            $("#navbar").css({"position":"fixed"});
            $("#navbar").css({"margin-top":"-7px"});
        }
        else{
            
            $("#navbar").css({"position":"relative"});
        }
        
    });
    
         //starting the carousel1111111111111
    $('.autoplay').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 3
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
           
  ] 
               
    }); 
    
        
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay').slick({
    
    });
    });
    
});




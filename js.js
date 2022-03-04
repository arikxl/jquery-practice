'use strict'

$('document').ready(function(){

    $('.btn1').click(function(){
        $('.img1').fadeToggle(3000);
    });

    $('.img1').dblclick(function(){
        $('.img1').css('width', '50%');
    });


    $('.img1').hover(removeColor, setColor);
    function removeColor(){
        $('.img1').css('filter', 'grayscale(100%)');
    }
    function setColor(){
        $('.img1').css('filter', 'grayscale(0)');
    }
    
    
    $('.btn2').click(changeStyle);
    
    function changeStyle() {
        $('section').css('background-color', 'lightblue');
        $('#p-container2').css('color', 'brown');
        $('.p1').css('font-style', 'italic');
        $('.p3, .p2').css('text-transform', 'uppercase');
        $('li:first-child, h1').css('text-transform', 'capitalize');
        $('li:odd').fadeToggle();
    };
    

    $('.img2').css('height', '250px');
    $('.flex > button').css('background-color', 'orange','flex', '1');
    
    $('.btn-hide').click(function(){
        $('.img2').hide(2000);        
    })
    $('.btn-show').click(function(){
        $('.img2').show(2000);        
    })
    $('.btn-toggle').click(function(){
        $('.img2').toggle(3000);        
    })
    $('.btn-slide').click(function(){
        $('.img2').slideToggle(3000);        
    })
    $('.btn-stop').click(function(){
        $('.img2').stop();        
    })


    $('.btn7').click(function(){
        $('.img3').animate({
            left:'1550px',
            opacity:0.5,
            height: '300px',
            width: '400px'
        },'fast')
    })

});
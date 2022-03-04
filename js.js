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
    
});
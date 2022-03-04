'use strict'

$('.btn1').click(fade);
$('.btn2').click(changeStyle);

function fade() {
    $('.img1').fadeToggle(3000);
};

function changeStyle() {
    $('section').css('background-color', 'lightblue');
    $('#p-container2').css('color', 'brown');
    $('.p1').css('font-style', 'italic');
    $('.p3, .p2').css('text-transform', 'uppercase');
    $('li:first-child, h1').css('text-transform', 'capitalize');
    $('li:odd').fadeToggle();
};

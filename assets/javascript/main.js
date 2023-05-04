$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all'){
            $('.post-box').show('1000')
        }
        else{
            $('.post-box').not('.'+value).hide('1000')
            $('.post-box').filter('.'+value).show('1000')
        }
    });

    // Add active class
    $('.filter-item').click(function(){
        $(this).addClass("active").siblings().removeClass('active');
    });
});

let header = document.querySelector("header");

window.addEventListener("scroll", ()=> {
    header.classList.toggle("shadow", window.scrollY > 0);
});
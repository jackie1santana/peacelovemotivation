
$(document).ready(function(){
     $('.fa-angle-double-down').on('click',function(){
         $('html, body').animate({scrollTop: $(".video").offset().top}, 1671);
     });
 });


 //Loader
window.addEventListener("load", function(){
    var loader = document.querySelector(".loader")
    var word = document.querySelector("#word")
    loader.style.display = 'none'
    word.style.display = 'none'
    

});
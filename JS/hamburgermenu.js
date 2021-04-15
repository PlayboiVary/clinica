/* 
1. Al cargarse todo el dom, registrar un listener (observador) al evento
click del nodo de la hamburguesa.

2. Al hacer el click en la hamburguesa esconder o mostrar el nodo nav

3. Cuando este en modo de media tableta o escritorio siempre mostrar el nav.

DOM  -- Documento Object Model  : Representación en memoria de la página en el
navegador.
*/

/*
document.addEventListener("DOMContentLoaded", function(e){

});
*/


document.addEventListener("DOMContentLoaded", page_loaded);

function page_loaded(e) {
    //var hmbbtn = document.getElementsByClassName("hamburguerMenu")[0];
    var hmbbtn = document.getElementById("hmbbtn");
    hmbbtn.addEventListener("click", hmbbtn_onclick);
    /*
    document.getElementsByTagName("header")[0].addEventListener("click", hmbbtn_onclick);
    document.getElementsByTagName("body")[0].addEventListener("click", hmbbtn_onclick);
    */
}

function hmbbtn_onclick(e) {
    e.preventDefault();
    e.stopPropagation();
    var menu = document.getElementById("menu");
    menu.classList.toggle("hidden"); //Es un switch, si la clase esta declara en
    // el nodo, la quita. Si no esta declarada en el nodo, la agrega.
}

/*aqui el slider*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("miSlide");
    var dots = document.getElementsByClassName("puntito");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
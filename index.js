var burger=document.querySelector('.burger');
var navbar= document.querySelector('.navbar');
var rightnav= document.querySelector('.rightNav');
var navList= document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
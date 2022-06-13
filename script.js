//variables
const navbar       = document.querySelector('.navbar');
const menuBtn      = document.querySelector('.menu-btn');
const menuBtnI     = document.querySelector('.menu-btn i');
const navbarMenu   = document.querySelector('.navbar .menu');
const scrollUpBtn  = document.querySelector('.scroll-up-btn');

//navbar
window.addEventListener('scroll', ()=>{
   if(this.scrollY > 20){
      navbar.classList.add("sticky");
      menuBtn.classList.add("sticky");
   }else{
      navbar.classList.remove("sticky");
      menuBtn.classList.remove("sticky");
   }

   if(this.scrollY > 500){
      scrollUpBtn.classList.add("show");
   }else{
      scrollUpBtn.classList.remove("show");
   }
});

//slide-up
scrollUpBtn.addEventListener("click", ()=>{
   window.scrollTo(0,0);
});

//toggle menu/navbar
menuBtn.addEventListener('click', ()=>{
   navbarMenu.classList.toggle("active");
   menuBtnI.classList.toggle("active");
   menuBtn.classList.toggle("active");
});


//typing animation - home
let typed = new Typed(".typingHome", {
   strings:["HTML" , "CSS", "JavaScript", "TypeScript", "React", "Java", "PHP", "SQL", "Git"],
   typeSpeed: 100,
   backSpeed: 60,
   loop:true
});

//typing animation - about me
let typed1 = new Typed(".typingAboutMe", {
   strings:["Full Stack Developer", "PROgrammer"],
   typeSpeed: 100,
   backSpeed: 60,
   loop:true
});

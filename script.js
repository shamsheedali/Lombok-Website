window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
}); 

let lastScrollY = 0;

const navbar = document.querySelector('header')
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    if(currentScrollY > lastScrollY){
        console.log('scroll down')
        navbar.classList.add('hidden')
    }else {
        console.log('scroll up')
        navbar.classList.remove('hidden')
    }
    lastScrollY = currentScrollY
})
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.items');
const navItems = document.querySelectorAll('.navigation .item')
let navItemActive = document.querySelector('.navigation .item.active');

// Nav links
navItems.forEach(item => {
    item.addEventListener('click', () => {
        
        item.classList.add('active');
        if(navItemActive!=item){
            navItemActive.classList.remove('active');
            navItemActive=item;
        }
        if(window.innerWidth<1024)burgerClicked()
    })
});

// Burger
function burgerClicked() {
    burger.classList.toggle('active');
    navLinks.classList.toggle('hide');


    navItems.forEach((item, index) => {
        if(item.style.animation)        
            item.style.animation = ''
        else
            item.style.animation = `navItemsFade 0.5s ease both ${index/7 + 0.2 }s`
    });
}
burger.addEventListener('click', burgerClicked)

window.addEventListener('resize', function(){
    if(this.innerWidth > 1024){
        navLinks.classList.remove('hide');
    }else{
        navLinks.classList.add('hide');
    }
})
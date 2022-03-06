const homePageButton = document.getElementById("main-button");
const contactPageButton = document.getElementById("contact-button");
const galleryPageButton = document.getElementById("gallery-button");
const orderPageButton = document.getElementById("order-button");

const pageHeader = document.getElementById('page-scroll');
const headerButtons = document.querySelectorAll(".header-buttons");

console.log(headerButtons);

headerButtons.forEach(button => {
    button.addEventListener("mouseenter", function(){
        button.classList.add('aqua');
    })
})

headerButtons.forEach(button => {
    button.addEventListener("mouseleave", function(){
        button.classList.remove('aqua');
    })
})

// Обработка нажатие кнопок - открытие соотвествующих страниц
homePageButton.addEventListener('click', function(){
    window.location = 'index.html';
})
galleryPageButton.addEventListener('click', function(){
    window.location = 'gallery.html';
})
orderPageButton.addEventListener('click', function(){
    window.location = 'order.html';
})
contactPageButton.addEventListener('click', function(){
    window.location = 'contacts.html';
})

// window.addEventListener('scroll', function(){
//     let scrollPosition = window.scrollY;

//     if(scrollPosition === 300)
//         pageHeader.classList.add('page-header');
// })

// let headerButtons2 = document.querySelectorAll("button");


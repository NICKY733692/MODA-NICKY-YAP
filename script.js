document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    // 使用 requestAnimationFrame 来处理自动轮播
    function autoSlide() {
        plusSlides(1);
        requestAnimationFrame(autoSlide);
    }
    setTimeout(() => requestAnimationFrame(autoSlide), 5000);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // 使用 classList 代替直接操作 className
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    
    slides[slideIndex-1].classList.add('active');
    dots[slideIndex-1].classList.add('active');
}
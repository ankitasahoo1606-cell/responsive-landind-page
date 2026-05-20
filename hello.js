window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // Checks if the page has been scrolled down by more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Applies active background/styling
    } else {
        navbar.classList.remove('scrolled'); // Reverts to clean/transparent state
    }
});
// document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('DOMContentLoaded', () => {
        const offerButtons = document.querySelectorAll('.mobile-menu-btn');
      
        offerButtons.forEach(button => {
          button.addEventListener('click', () => {
            button.querySelectorAll('span').forEach(span =>{
                span.style.display = 'none';
            });
          });
        });
    //   });

    // Menu tabs
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuContents = document.querySelectorAll('.menu-content');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            
            menuTabs.forEach(t => t.classList.remove('active'));
            menuContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`${target}-menu`).classList.add('active');
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (you can replace this with your own backend logic)
    const contactForm = document.getElementById('contact-form');
    const reservationForm = document.getElementById('reservation-form');

    contactForm.addEventListener('submit', handleFormSubmit);
    reservationForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        e.target.reset();
    }
});
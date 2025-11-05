document.addEventListener('DOMContentLoaded', function() {
    
    // --- Header Background Change on Scroll ---
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    console.log("CUT.TO MOVIES site loaded successfully!");

    // --- FUTURE JAVASCRIPT ---
    // Here you can add more functionality, such as:
    // 1. A modal window that appears when you click "More Info".
    // 2. A video player that opens when you click "Play Now".
    // 3. Logic to fetch movie data from an API and populate the carousels dynamically.
    // 4. A function for the search bar.
});
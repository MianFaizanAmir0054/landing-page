/**
 * Partner Logos Slider
 * Creates an infinite scrolling slider for partner logos
 */ (function() {
    'use strict';
    // Wait for DOM to be ready
    function initSlider() {
        const sliderTrack = document.querySelector('.partner-logos-track');
        if (!sliderTrack) return;
        const slider = document.querySelector('.partner-logos-slider');
        const logoItems = sliderTrack.querySelectorAll('.partner-logo-item');
        if (logoItems.length === 0) return;
        // Calculate total width needed for seamless loop
        let totalWidth = 0;
        logoItems.forEach((item, index)=>{
            const itemWidth = item.offsetWidth;
            totalWidth += itemWidth;
            if (index < logoItems.length - 1) totalWidth += 24; // gap width
        });
        // Set track width to accommodate all items
        sliderTrack.style.width = `${totalWidth}px`;
        // Pause animation on hover
        slider.addEventListener('mouseenter', ()=>{
            sliderTrack.style.animationPlayState = 'paused';
        });
        slider.addEventListener('mouseleave', ()=>{
            sliderTrack.style.animationPlayState = 'running';
        });
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', ()=>{
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(()=>{
                // Recalculate on resize
                totalWidth = 0;
                logoItems.forEach((item, index)=>{
                    const itemWidth = item.offsetWidth;
                    totalWidth += itemWidth;
                    if (index < logoItems.length - 1) totalWidth += 24;
                });
                sliderTrack.style.width = `${totalWidth}px`;
            }, 250);
        });
        // Adjust animation speed based on screen size
        function adjustAnimationSpeed() {
            const isMobile = window.innerWidth <= 768;
            const duration = isMobile ? 20 : 30; // Faster on mobile
            sliderTrack.style.animationDuration = `${duration}s`;
        }
        adjustAnimationSpeed();
        window.addEventListener('resize', adjustAnimationSpeed);
    }
    // Initialize when DOM is ready
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initSlider);
    else initSlider();
})();

//# sourceMappingURL=landing-page.1ed597b5.js.map

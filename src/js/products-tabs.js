/**
 * Product Tabs Handler
 * Manages product category switching by showing/hiding product grids
 */

(function() {
  'use strict';

  function initProductTabs() {
    const tabs = document.querySelectorAll('.product-tab');
    const productGrids = document.querySelectorAll('.product-category');
    
    if (!tabs.length || !productGrids.length) return;

    // Function to show products for selected category
    function showCategory(category) {
      productGrids.forEach(grid => {
        const gridCategory = grid.getAttribute('data-category');
        if (gridCategory === category) {
          grid.style.display = 'grid';
          // Add fade-in animation
          grid.style.opacity = '0';
          setTimeout(() => {
            grid.style.transition = 'opacity 0.3s ease';
            grid.style.opacity = '1';
          }, 10);
        } else {
          grid.style.display = 'none';
        }
      });
    }

    // Handle tab clicks
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get category from data attribute
        const category = this.getAttribute('data-category');
        
        // Show products for selected category
        if (category) {
          showCategory(category);
        }
      });
    });

    // Initialize with Tahini products (already visible)
    // No need to call showCategory as tahini is already displayed
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductTabs);
  } else {
    initProductTabs();
  }
})();


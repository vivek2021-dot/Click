
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('open');
        });

        // Mobile dropdown toggles
        const servicesToggle = document.querySelector('.services-toggle');
        const industriesToggle = document.querySelector('.industries-toggle');
        
        if (servicesToggle) {
            servicesToggle.addEventListener('click', function() {
                const dropdown = document.querySelector('.services-dropdown');
                dropdown.classList.toggle('hidden');
                
                // Close other dropdown if open
                const otherDropdown = document.querySelector('.industries-dropdown');
                if (!otherDropdown.classList.contains('hidden')) {
                    otherDropdown.classList.add('hidden');
                }
            });
        }

        if (industriesToggle) {
            industriesToggle.addEventListener('click', function() {
                const dropdown = document.querySelector('.industries-dropdown');
                dropdown.classList.toggle('hidden');
                
                // Close other dropdown if open
                const otherDropdown = document.querySelector('.services-dropdown');
                if (!otherDropdown.classList.contains('hidden')) {
                    otherDropdown.classList.add('hidden');
                }
            });
        }

    // fade down effect. 
 AOS.init({
      duration: 1000,
    });
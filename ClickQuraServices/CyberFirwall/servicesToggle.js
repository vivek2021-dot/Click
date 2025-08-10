 // DOM Elements
 document.addEventListener("DOMContentLoaded", () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const closeMobileMenuButton = document.getElementById('close-mobile-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        const servicesDropdownParent = document.getElementById('services-dropdown-parent');
        const servicesMenu = document.getElementById('services-menu');

        const industriesDropdownParent = document.getElementById('industries-dropdown-parent');
        const industriesMenu = document.getElementById('industries-menu');

        const mobileServicesToggle = document.getElementById('mobile-services-toggle');
        const mobileServicesMenu = document.getElementById('mobile-services-menu');

        const mobileIndustriesToggle = document.getElementById('mobile-industries-toggle');
        const mobileIndustriesMenu = document.getElementById('mobile-industries-menu');

        let activeDropdown = null; // To keep track of the currently active dropdown for desktop

        // --- Desktop Dropdown Logic ---

        // Function to open a dropdown
        function openDropdown(menuElement) {
            if (activeDropdown && activeDropdown !== menuElement) {
                closeDropdown(activeDropdown); // Close any other open dropdown
            }
            menuElement.classList.remove('hidden');
            // Add a small delay for CSS transition to apply `display: block` first, then `active` class
            setTimeout(() => {
                menuElement.classList.add('active');
            }, 10);
            activeDropdown = menuElement;
            // Set aria-expanded to true for accessibility
            menuElement.previousElementSibling.setAttribute('aria-expanded', 'true');
        }

        // Function to close a dropdown
        function closeDropdown(menuElement) {
            menuElement.classList.remove('active');
            // After the transition, hide the element
            setTimeout(() => {
                menuElement.classList.add('hidden');
            }, 300); // Match CSS transition duration
            if (activeDropdown === menuElement) {
                activeDropdown = null;
            }
            // Set aria-expanded to false for accessibility
            if (menuElement.previousElementSibling) { // Check if previous element exists (i.e., the button)
                menuElement.previousElementSibling.setAttribute('aria-expanded', 'false');
            }
        }

        // Toggle Services Dropdown for Desktop
        servicesDropdownParent.querySelector('button').addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent document click from immediately closing
            if (servicesMenu.classList.contains('active')) {
                closeDropdown(servicesMenu);
            } else {
                openDropdown(servicesMenu);
            }
        });

        // Toggle Industries Dropdown for Desktop
        industriesDropdownParent.querySelector('button').addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent document click from immediately closing
            if (industriesMenu.classList.contains('active')) {
                closeDropdown(industriesMenu);
            } else {
                openDropdown(industriesMenu);
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (event) => {
            if (activeDropdown &&
                !servicesDropdownParent.contains(event.target) &&
                !industriesDropdownParent.contains(event.target)) {
                closeDropdown(activeDropdown);
            }
        });

        // Prevent dropdown from closing when clicking inside it
        servicesMenu.addEventListener('click', (event) => event.stopPropagation());
        industriesMenu.addEventListener('click', (event) => event.stopPropagation());


        // --- Mobile Menu Logic ---

        // Open mobile menu
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling body when menu is open
        });

        // Close mobile menu
        closeMobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore body scrolling
            // Also close any open mobile dropdowns when closing the main menu
            mobileServicesMenu.classList.remove('active', 'block');
            mobileServicesMenu.classList.add('hidden');
            mobileServicesToggle.setAttribute('aria-expanded', 'false');

            mobileIndustriesMenu.classList.remove('active', 'block');
            mobileIndustriesMenu.classList.add('hidden');
            mobileIndustriesToggle.setAttribute('aria-expanded', 'false');
        });

        // Close mobile menu when clicking overlay
        mobileMenuOverlay.addEventListener('click', () => {
            closeMobileMenuButton.click(); // Trigger the close button click
        });

        // Toggle Mobile Services Dropdown
        mobileServicesToggle.addEventListener('click', () => {
            const isExpanded = mobileServicesToggle.getAttribute('aria-expanded') === 'true';
            mobileServicesToggle.setAttribute('aria-expanded', !isExpanded);
            mobileServicesMenu.classList.toggle('hidden');
            mobileServicesMenu.classList.toggle('block'); // Use block/hidden for instant mobile toggle
            mobileServicesToggle.querySelector('svg').classList.toggle('rotate-180', !isExpanded);
            // Ensure only one mobile dropdown is open at a time
            if (!isExpanded && mobileIndustriesMenu.classList.contains('block')) {
                mobileIndustriesMenu.classList.add('hidden');
                mobileIndustriesMenu.classList.remove('block');
                mobileIndustriesToggle.setAttribute('aria-expanded', 'false');
                mobileIndustriesToggle.querySelector('svg').classList.remove('rotate-180');
            }
        });

        // Toggle Mobile Industries Dropdown
        mobileIndustriesToggle.addEventListener('click', () => {
            const isExpanded = mobileIndustriesToggle.getAttribute('aria-expanded') === 'true';
            mobileIndustriesToggle.setAttribute('aria-expanded', !isExpanded);
            mobileIndustriesMenu.classList.toggle('hidden');
            mobileIndustriesMenu.classList.toggle('block'); // Use block/hidden for instant mobile toggle
            mobileIndustriesToggle.querySelector('svg').classList.toggle('rotate-180', !isExpanded);
            // Ensure only one mobile dropdown is open at a time
            if (!isExpanded && mobileServicesMenu.classList.contains('block')) {
                mobileServicesMenu.classList.add('hidden');
                mobileServicesMenu.classList.remove('block');
                mobileServicesToggle.setAttribute('aria-expanded', 'false');
                mobileServicesToggle.querySelector('svg').classList.remove('rotate-180');
            }
        });

        // Prevent body scroll when mobile menu is open (for larger screens during resize)
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) { // md breakpoint
                document.body.style.overflow = '';
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
            }
        });

        });
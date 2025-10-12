// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const body = document.body;
    
    // Add loading class to body
    body.classList.add('loading');
    
    // Hide loading screen after 2.5 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        body.classList.remove('loading');
        
        // Remove loading screen from DOM after animation
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 2500);
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Background Change on Scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 22, 40, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 22, 40, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Statistics Counter Animation
const counterObserverOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, counterObserverOptions);

// Observe all stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    counterObserver.observe(stat);
});

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.tab-btn');
const portfolioGrid = document.getElementById('portfolio-grid');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter portfolio items
        const portfolioItems = portfolioGrid.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (filterValue === 'all' || itemCategory === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-row, .package-row, .portfolio-item, .stat-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
const footerCopy = document.querySelector('.footer-copy');
if (footerCopy) {
    footerCopy.textContent = `© ${currentYear} مصطفي السيسي - Mohamed Beshir. جميع الحقوق محفوظة`;
}

// Portfolio Management Functions
class PortfolioManager {
    constructor() {
        this.portfolioItems = [];
    }

    // Add new portfolio item
    addItem(item) {
        // Ensure item has required fields
        if (!item.category) {
            item.category = 'all';
        }
        this.portfolioItems.push(item);
        this.renderItems();
    }

    // Remove portfolio item
    removeItem(id) {
        this.portfolioItems = this.portfolioItems.filter(item => item.id !== id);
        this.renderItems();
    }

    // Render portfolio items
    renderItems() {
        const portfolioGrid = document.getElementById('portfolio-grid');
        if (!portfolioGrid) return;

        // Clear empty state if exists
        const emptyState = portfolioGrid.querySelector('.portfolio-empty');
        if (emptyState && this.portfolioItems.length > 0) {
            emptyState.remove();
        }

        // Clear existing items except empty state
        const existingItems = portfolioGrid.querySelectorAll('.portfolio-item');
        existingItems.forEach(item => item.remove());

        if (this.portfolioItems.length === 0) {
            if (!emptyState) {
                portfolioGrid.innerHTML = `
                    <div class="portfolio-empty">
                        <p>لإضافة أعمالك، راجع ملف HOW-TO-ADD-WORKS.md</p>
                        <p>To add your works, check HOW-TO-ADD-WORKS.md file</p>
                    </div>
                `;
            }
            return;
        }

        // Render items
        this.portfolioItems.forEach(item => {
            const itemElement = this.createItemElement(item);
            portfolioGrid.appendChild(itemElement);
        });
    }

    // Create portfolio item element
    createItemElement(item) {
        const div = document.createElement('div');
        div.className = 'portfolio-item';
        div.setAttribute('data-id', item.id);
        div.setAttribute('data-category', item.category || 'all');
        div.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        if (item.type === 'image') {
            div.innerHTML = `<img src="${item.src}" alt="${item.title || 'Portfolio Item'}" loading="lazy">`;
        } else if (item.type === 'video') {
            div.innerHTML = `
                <video src="${item.src}" poster="${item.poster || ''}" preload="metadata"></video>
                <div class="play-btn">▶</div>
            `;
            
            // Add click handler for video
            div.addEventListener('click', () => {
                const video = div.querySelector('video');
                if (video.paused) {
                    video.play();
                    div.querySelector('.play-btn').style.display = 'none';
                } else {
                    video.pause();
                    div.querySelector('.play-btn').style.display = 'flex';
                }
            });
        }

        return div;
    }

    // Load items from data
    loadItems(items) {
        this.portfolioItems = items;
        this.renderItems();
    }
}

// Initialize Portfolio Manager
const portfolioManager = new PortfolioManager();

// Example: Load portfolio items (you can customize this)
// Uncomment and modify when you have items to add
/*
portfolioManager.loadItems([
    {
        id: 1,
        type: 'image',
        src: 'images/portfolio/item1.jpg',
        title: 'عمل شركتنا 1',
        category: 'company' // 'company', 'clients', 'projects', or 'all'
    },
    {
        id: 2,
        type: 'video',
        src: 'images/portfolio/video1.mp4',
        poster: 'images/portfolio/video1-poster.jpg',
        title: 'فيديو عميل 1',
        category: 'clients'
    },
    {
        id: 3,
        type: 'image',
        src: 'images/portfolio/project1.jpg',
        title: 'مشروع 1',
        category: 'projects'
    }
]);
*/

// Make portfolioManager globally accessible for easy updates
window.portfolioManager = portfolioManager;


// Console message for developers
console.log('%c مصطفي السيسي - Mohamed Beshir ', 'background: linear-gradient(135deg, #00BCD4, #00E676); color: white; font-size: 20px; padding: 10px;');
console.log('%c 📸 Portfolio Manager متاح الآن! ', 'color: #00BCD4; font-size: 16px; font-weight: bold;');
console.log('%c لإضافة عمل واحد:', 'color: #888; font-size: 14px;');
console.log(`window.portfolioManager.addItem({
    id: 1,
    type: 'image', // أو 'video'
    src: 'images/portfolio/item1.jpg',
    title: 'اسم العمل',
    category: 'company' // 'company', 'clients', 'projects'
});`);
console.log('%c لإضافة عدة أعمال:', 'color: #888; font-size: 14px; margin-top: 10px;');
console.log(`window.portfolioManager.loadItems([
    { id: 1, type: 'image', src: 'path/to/image.jpg', title: 'عمل 1', category: 'company' },
    { id: 2, type: 'video', src: 'path/to/video.mp4', title: 'عمل 2', category: 'clients' }
]);`);


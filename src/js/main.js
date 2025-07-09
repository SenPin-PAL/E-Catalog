document.addEventListener('DOMContentLoaded', () => {
    // --- State & Data ---
    let allProducts = {};
    let historyData = [];

    // --- DOM Elements ---
    const backButton = document.getElementById('back-to-home');
    const allPages = document.querySelectorAll('.page');
    
    // --- SPA Navigation ---
    const navigateTo = (pageId) => {
        window.scrollTo(0, 0); // Scroll to top on page change
        allPages.forEach(page => page.classList.add('hidden'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
        }
        backButton.classList.toggle('hidden', pageId === 'page-landing');

        // Initialize animations for specific pages when they are shown
        if (pageId === 'page-profile') {
            initProfileScrollReveal();
        }
    };
    
    // Event Listeners for Landing Page Cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => navigateTo(card.dataset.page));
    });
    
    // Event listener for Back to Home button
    backButton.addEventListener('click', () => navigateTo('page-landing'));

    // --- Page Initializations ---

    // PROFILE PAGE SCROLL REVEAL
    const initProfileScrollReveal = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('#page-profile .reveal').forEach(el => {
            // Reset animation by removing class before observing
            el.classList.remove('visible');
            observer.observe(el);
        });
    };

    // HISTORY PAGE LOGIC
    const initHistoryPage = async () => {
        historyData = await (await fetch('src/data/history.json')).json();
        const wheelContainer = document.querySelector('.steering-wheel-container');
        const panel = document.getElementById('history-panel');
        
        const buttonPositions = [
            { top: '30px', left: '185px' },
            { top: '185px', right: '30px' },
            { bottom: '30px', left: '185px' },
            { top: '185px', left: '30px' }
        ];

        historyData.forEach((item, index) => {
            const pos = buttonPositions[index];
            const button = document.createElement('button');
            button.className = 'era-button';
            button.innerHTML = item.era;
            button.dataset.era = item.era;
            Object.assign(button.style, pos);
            wheelContainer.appendChild(button);
        });

        wheelContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('era-button')) {
                const eventData = historyData.find(item => item.era === e.target.dataset.era);
                if (eventData) {
                    panel.style.opacity = 0;
                    setTimeout(() => {
                        // --- PERBAIKAN DI SINI ---
                        // Menambahkan <div> sebagai elemen induk tunggal
                        // dan membersihkan teks deskripsi dari format [cite]
                        panel.innerHTML = `
                            <div>
                                <img src="${eventData.image}" alt="${eventData.title}">
                                <h3>${eventData.title}</h3>
                                <p>${eventData.description.replace(/\[(cite|source):\s*\d+\]/g, '').trim()}</p>
                            </div>
                        `;
                        panel.style.opacity = 1;
                    }, 300);
                }
            }
        });
    };

    // PRODUCTS PAGE LOGIC
    const initProductsPage = async () => {
        allProducts = await (await fetch('src/data/products.json')).json();

        const buildTimeline = (category, containerId) => {
            const container = document.getElementById(containerId);
            if (!container) return;
            const products = allProducts[category] || [];
            products.sort((a, b) => a.year - b.year);
            container.innerHTML = products.map(product => `
                <div class="timeline-item" data-id="${product.id}">
                    <div class="timeline-item-image-wrapper">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="timeline-item-info">
                        <h4>${product.name}</h4>
                        <p>${product.year}</p>
                    </div>
                </div>
            `).join('');
        };
        
        buildTimeline('niaga', 'niaga-timeline');
        buildTimeline('militer', 'militer-timeline');
        initModal();
    };

    // MODAL LOGIC
    const initModal = () => {
        const modal = document.getElementById('product-modal');
        const showModal = (productId) => {
            const categoryKey = productId.startsWith('militer') ? 'militer' : 'niaga';
            const ship = allProducts[categoryKey]?.find(p => p.id === productId);
            if (ship) {
                document.getElementById('modal-img').src = ship.image;
                document.getElementById('modal-name').textContent = ship.name;
                // Membersihkan teks spesifikasi dari format [cite]
                document.getElementById('modal-specs').textContent = ship.specs.replace(/\[(cite|source):\s*\d+\]/g, '').trim();
                modal.classList.remove('hidden');
            }
        };

        document.getElementById('page-products').addEventListener('click', (e) => {
            const item = e.target.closest('.timeline-item');
            if (item) showModal(item.dataset.id);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
                modal.classList.add('hidden');
            }
        });
    };
    
    // --- MAIN APP INITIALIZATION ---
    const initializeApp = () => {
        initHistoryPage();
        initProductsPage();
        navigateTo('page-landing'); // Start at landing page
    };

    initializeApp();
});
document.addEventListener('DOMContentLoaded', () => {
    // Memastikan variabel data dari data.js sudah ada sebelum memulai
    if (typeof historyData === 'undefined' || typeof productsData === 'undefined') {
        console.error("Kesalahan Kritis: Variabel data (historyData atau productsData) tidak ditemukan. Pastikan file 'src/js/data.js' sudah dimuat dengan benar sebelum 'src/js/main.js' di file HTML Anda.");
        // Menampilkan pesan error di halaman jika data tidak ada
        const productPage = document.getElementById('page-products');
        if(productPage) {
            productPage.innerHTML = '<p class="no-data-message">Gagal memuat data produk. Silakan periksa konsol browser (F12) untuk detail teknis.</p>';
        }
        return; // Menghentikan eksekusi skrip
    }
    
    // --- DOM Elements ---
    const allPages = document.querySelectorAll('.page');
    
    // --- FUNGSI UTAMA ---

    // Fungsi untuk navigasi antar halaman virtual (SPA)
    const navigateTo = (pageId) => {
        window.scrollTo(0, 0); // Selalu kembali ke atas saat pindah halaman
        allPages.forEach(page => page.classList.add('hidden'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
        }
        // Inisialisasi animasi scroll hanya saat halaman profil dibuka
        if (pageId === 'page-profile') {
            initProfileScrollReveal();
        }
    };
    
    // Fungsi untuk inisialisasi animasi scroll-reveal di halaman profil
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
            el.classList.remove('visible');
            observer.observe(el);
        });
    };

    // Fungsi untuk inisialisasi Halaman Sejarah
    const initHistoryPage = () => {
        const container = document.getElementById('era-stands-container');
        const modal = document.getElementById('history-modal');
        if (!container || !modal) return;

        container.innerHTML = historyData.map(item => `
            <div class="era-stand" data-era="${item.era}">
                <h3>${item.era}</h3>
                <p>${item.title}</p>
            </div>
        `).join('');

        container.addEventListener('click', (e) => {
            const stand = e.target.closest('.era-stand');
            if (stand) {
                const eraData = historyData.find(item => item.era === stand.dataset.era);
                if (eraData) showHistoryModal(eraData);
            }
        });

        const showHistoryModal = (data) => {
            document.getElementById('modal-history-img').src = data.image;
            document.getElementById('modal-history-title').textContent = data.title;
            document.getElementById('modal-history-desc').textContent = data.description;
            modal.classList.remove('hidden');
        };

        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
                modal.classList.add('hidden');
            }
        });
    };

    // Fungsi untuk inisialisasi Halaman Produk dengan layout Master-Detail
    const initProductsPage = () => {
        const intervalListEl = document.getElementById('interval-list');
        const shipDisplayAreaEl = document.getElementById('ship-display-area');
        if (!intervalListEl || !shipDisplayAreaEl) {
            console.error("Elemen untuk halaman produk tidak ditemukan.");
            return;
        }

        const intervals = [
            { start: 1985, end: 1989 }, { start: 1990, end: 1994 },
            { start: 1995, end: 1999 }, { start: 2000, end: 2004 },
            { start: 2005, end: 2009 }, { start: 2010, end: 2014 },
            { start: 2015, end: 2019 }, { start: 2020, end: 2024 },
        ];
        
        const allShips = [...productsData.niaga, ...productsData.militer].sort((a, b) => a.year - b.year);

        const renderShipList = (start, end) => {
            const shipsInInterval = allShips.filter(p => p.year >= start && p.year <= end);
            
            shipDisplayAreaEl.innerHTML = ''; // Kosongkan dulu area tampilan
            
            if (shipsInInterval.length === 0) {
                shipDisplayAreaEl.innerHTML = `<p class="no-data-message">Tidak ada kapal yang tercatat pada periode ini.</p>`;
                return;
            }

            shipDisplayAreaEl.innerHTML = shipsInInterval.map(ship => `
                <div class="ship-detail-card">
                    <img src="${ship.image}" alt="${ship.name}">
                    <div class="ship-detail-card-info">
                        <h4>${ship.name}</h4>
                        <p>${ship.specs}</p>
                    </div>
                </div>
            `).join('');
        };

        intervalListEl.innerHTML = intervals.map(interval => `
            <li data-start="${interval.start}" data-end="${interval.end}">
                ${interval.start} - ${interval.end}
            </li>
        `).join('');

        intervalListEl.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                intervalListEl.querySelectorAll('li').forEach(li => li.classList.remove('active'));
                e.target.classList.add('active');

                const start = e.target.dataset.start;
                const end = e.target.dataset.end;
                renderShipList(start, end);
            }
        });

        const firstInterval = intervalListEl.querySelector('li');
        if (firstInterval) {
            firstInterval.click();
        } else {
             shipDisplayAreaEl.innerHTML = `<p class="no-data-message">Tidak ada data produk untuk ditampilkan.</p>`;
        }
    };

    // --- INISIALISASI APLIKASI ---
    const initializeApp = () => {
        // Menambahkan event listener ke semua tombol navigasi
        document.querySelectorAll('.card').forEach(card => card.addEventListener('click', () => navigateTo(card.dataset.page)));
        document.querySelectorAll('.back-button').forEach(button => button.addEventListener('click', () => navigateTo('page-landing')));
        
        // Menjalankan fungsi inisialisasi untuk setiap halaman
        initHistoryPage();
        initProductsPage();
        
        // Memulai aplikasi dengan menampilkan landing page
        navigateTo('page-landing');
    };

    initializeApp();
});
/**
 * LazyHomeWeb - Main JavaScript File
 */

// --- Variables de Configuración Globales ---
const AppConfig = {
    socialUrls: {
        instagram: 'https://instagram.com/lazyhouseramen/',
        facebook: 'https://facebook.com/lazyhouseramen/',
        whatsapp: 'https://wa.me/66614946760?text=Hi%20Lazy%20House!%20I%27d%20like%20to%20reserve%20a%20table.'
    },
    restaurantName: {
        en: 'LAZY HOUSE',
        th: 'เลซี่ เฮ้าส์'
    },
    contact: {
        phone: '+66 61 494 6760',
        email: 'lazyjunglehouse@gmail.com',
        address: {
            en: '11 Khanom, Nakhon Si Thammarat 80210, Thailand',
            th: '11 ขนอม, นครศรีธรรมราช 80210, ประเทศไทย'
        }
    },
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.5778847844!2d99.8436898!3d9.1620977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30547d2fe70bca8d%3A0xc412104f1f494023!2sLazy%20House%20Khanom%20-%20Ramen%20Restaurant!5e0!3m2!1sen!2sth!4v1714420000000!5m2!1sen!2sth'
};

// --- Diccionario de Textos (Bilingüe) ---
const Translations = {
    en: {
        // Navigation Options
        nav_about: 'About Us',
        nav_gallery: 'Gallery',
        nav_menu: 'Menu',
        nav_contact: 'Contact',
        // Phase 1 testing and Phase 2 Hero
        hero_title: 'LAZY HOUSE',
        hero_tagline: 'Japanese Minimalism & Taste',
        hero_cta: 'View Menu',
        // Phase 2 About Us
        about_heading: 'From Winter Memories to a Bold Japanese Taste',
        about_p1: 'People often wonder how a "Southern Thai guy" like me ended up running a Japanese restaurant.',
        about_p2: 'It all started from years of living with Japanese friends as "Ramen fanatics," exploring shops and recreating flavors together. The true turning point, however, was a winter I spent immersed in a rustic, countryside Izakaya kitchen. It wasn’t a fancy place in the big city, but a simple, authentic spot rooted in the local lifestyle and "home-cooked" flavors that you won\'t find in any cookbook. That experience truly opened a whole new world for me.',
        about_p3: 'Growing up with the bold and spicy flavors of Southern Thailand, I’ve always appreciated a strong culinary character. I’ve taken those authentic, rustic Japanese experiences and refined them with a Southern Thai palate, making the flavors bolder and more distinct. My goal is to serve Japanese food that is both authentic in soul and vibrant in taste. My philosophy is simple: "If I enjoy it, I know you will too."',
        // Phase 5 Footer
        footer_bio: 'Japanese Minimalism & Taste.',
        footer_contact_title: 'Contact Us',
        footer_address_title: 'Location',
        footer_address_value: '11 Khanom, Nakhon Si Thammarat 80210, Thailand',
        footer_rights: '© {YEAR} Lazy House. All rights reserved.',
        gallery_caption: 'Crafted locally'
    },
    th: {
        nav_about: 'เกี่ยวกับเรา',
        nav_gallery: 'แกลลอรี่',
        nav_menu: 'เมนู',
        nav_contact: 'ติดต่อเรา',
        hero_title: 'เลซี่ เฮ้าส์',
        hero_tagline: 'ความเรียบง่ายและรสชาติแบบญี่ปุ่น',
        hero_cta: 'ดูเมนู',
        about_heading: 'จากความทรงจำในฤดูหนาว... สู่รสชาติอาหารญี่ปุ่นที่เข้มข้นและชัดเจน',
        about_p1: 'หลายคนสงสัยว่า "หนุ่มใต้แท้ๆ" อย่างผม มาทำอาหารญี่ปุ่นได้ยังไง?',
        about_p2: 'จุดเริ่มต้นมาจากหลายปีที่ผมใช้ชีวิตคลุกคลีอยู่กับเพื่อนชาวญี่ปุ่น เราคือกลุ่มคน "คลั่งราเมง" ที่ตระเวนกินและกลับมาลองทำกินเองบ่อยครั้ง แต่จุดเปลี่ยนสำคัญคือช่วงหน้าหนาวหนึ่งในญี่ปุ่นที่ผมได้มีโอกาสเข้าไปอยู่ในครัวอิซากายะแบบบ้านนอก ที่นั่นไม่ใช่ร้านหรูในเมืองใหญ่ แต่เป็นร้านบ้านๆ ที่เต็มไปด้วยวิถีชีวิตและรสชาติอาหารแบบดั้งเดิมที่หาไม่ได้จากตำราไหน ซึ่งนั่นเป็นประสบการณ์ที่เปิดโลกทัศน์ของผมอย่างมาก',
        about_p3: 'ในฐานะคนที่โตมากับรสชาติปักษ์ใต้ที่จัดจ้าน ผมยอมรับว่าอาหารญี่ปุ่นดั้งเดิมบางอย่างอาจเข้าใจยากในตอนแรก ผมจึงนำประสบการณ์จากครัวบ้านนอกที่ญี่ปุ่นนั้นมาปรับเปลี่ยน โดยใส่ความชัดเจนของรสชาติแบบคนใต้เข้าไป เพื่อให้ได้รสสัมผัสที่เข้มข้นขึ้น เพราะคติประจำร้านเราคือ "ถ้าผมกินได้... คุณก็กินได้"',
        // Phase 5 Footer
        footer_bio: 'ความเรียบง่ายและรสชาติแบบญี่ปุ่น',
        footer_contact_title: 'ติดต่อเรา',
        footer_address_title: 'สถานที่ตั้ง',
        footer_address_value: '11 ขนอม, นครศรีธรรมราช 80210, ประเทศไทย',
        footer_rights: '© {YEAR} เลซี่ เฮ้าส์ สงวนลิขสิทธิ์ทั้งหมด',
        gallery_caption: 'ผลิตในท้องถิ่น'
    }
};

let menuData = null;
let activeCategoryIndex = 0;
let currentLanguage = 'en';

// --- Inicialización al cargar el DOM ---
document.addEventListener('DOMContentLoaded', () => {
    initUI();
    initLanguageSystem();
    initScrollReveal();
    initSmartHeader();
    loadMenuData();
    setDynamicYear();
    initGalleryCarousel();
    initLightbox();
    initLazySmoothScroll();
});

// --- UI e Interacciones ---
function initUI() {
    // 1. Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        // Helper: close mobile menu and restore state
        const closeMobileMenu = () => {
            mainNav.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) icon.classList.replace('fa-times', 'fa-bars');
            // Remove inert from content (P1-04)
            const mainContent = document.getElementById('main-content');
            const footer = document.querySelector('.site-footer');
            if (mainContent) mainContent.removeAttribute('inert');
            if (footer) footer.removeAttribute('inert');
        };

        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const isOpen = mainNav.classList.contains('active');

            // Update aria-expanded (WCAG 4.1.2)
            mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));

            // Switch Icon
            const icon = mobileMenuToggle.querySelector('i');
            if (isOpen) {
                icon.classList.replace('fa-bars', 'fa-times');
                // Set inert on background content (P1-04)
                const mainContent = document.getElementById('main-content');
                const footer = document.querySelector('.site-footer');
                if (mainContent) mainContent.setAttribute('inert', '');
                if (footer) footer.setAttribute('inert', '');
                // Focus first nav link
                const firstLink = mainNav.querySelector('.nav-link');
                if (firstLink) firstLink.focus();
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
                // Remove inert
                const mainContent = document.getElementById('main-content');
                const footer = document.querySelector('.site-footer');
                if (mainContent) mainContent.removeAttribute('inert');
                if (footer) footer.removeAttribute('inert');
            }
        });

        // Close on Escape (P1-04)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                closeMobileMenu();
                mobileMenuToggle.focus();
            }
        });

        // Focus trap inside mobile menu (P1-04)
        mainNav.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab' || !mainNav.classList.contains('active')) return;
            const focusable = mainNav.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        });

        // Close menu on nav link click
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    }

    // 2. Set Social Links for Desktop and Mobile components
    const socialPlatforms = ['ig', 'fb', 'wa'];
    socialPlatforms.forEach(platform => {
        // Find them in both mobile and desktop menus using IDs or Classes
        const desktopLink = document.getElementById(`link-${platform}-desktop`);
        const mobileLink = document.getElementById(`link-${platform}-mobile`);

        let targetUrl = '';
        if (platform === 'ig') targetUrl = AppConfig.socialUrls.instagram;
        if (platform === 'fb') targetUrl = AppConfig.socialUrls.facebook;
        if (platform === 'wa') targetUrl = AppConfig.socialUrls.whatsapp;

        if (desktopLink) desktopLink.href = targetUrl;
        if (mobileLink) mobileLink.href = targetUrl;
    });
}

// --- Sistema Bilingüe (EN/TH) ---
function initLanguageSystem() {
    const langToggles = document.querySelectorAll('.lang-toggle');

    langToggles.forEach(toggleBtn => {
        toggleBtn.addEventListener('click', () => {
            // Alternar idioma
            currentLanguage = currentLanguage === 'en' ? 'th' : 'en';

            // Actualizar botones UI
            updateLanguageButtonsUI();

            // Actualizar textos en el DOM
            applyTranslations();

            // Re-render Dynamic Menu if loaded
            if (typeof menuData !== 'undefined' && menuData) {
                renderMenuCategories();
                renderMenuItems(activeCategoryIndex);
            }

            // Update dynamic copyright year text
            setDynamicYear();
        });
    });

    // Ejecución inicial por si acaso, aunque ya arranca en EN por HTML
    applyTranslations();
}

function updateLanguageButtonsUI() {
    const langEnSpans = document.querySelectorAll('.lang-en');
    const langThSpans = document.querySelectorAll('.lang-th');

    if (currentLanguage === 'en') {
        langEnSpans.forEach(el => el.classList.add('active'));
        langThSpans.forEach(el => el.classList.remove('active'));
    } else {
        langEnSpans.forEach(el => el.classList.remove('active'));
        langThSpans.forEach(el => el.classList.add('active'));
    }
}

function applyTranslations() {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');

        if (Translations[currentLanguage] && Translations[currentLanguage][key]) {
            // Actualizar texto
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = Translations[currentLanguage][key];
            } else {
                element.textContent = Translations[currentLanguage][key];
            }
        }
    });

    // Special case for language that requires document language specification changes
    document.documentElement.lang = currentLanguage;
}

// --- Scroll Reveal Animation ---
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed if you only want the animation to play once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
}

// --- Dynamic Menu Logic (Google Sheets Live Feed) ---

// Thai translations for category names from the Google Sheet
const CATEGORY_TRANSLATIONS = {
    'Ramen': 'ราเมน',
    'Rice Set': 'ข้าวชุด',
    'Japanese Curry': 'แกงกะหรี่ญี่ปุ่น',
    'Appetizers': 'อาหารเรียกน้ำย่อย',
    'Vegetarian Dishes': 'อาหารมังสวิรัติ',
    'Vegetarian Appetizers': 'เรียกน้ำย่อยมังสวิรัติ',
    'Alcoholic Drinks': 'เครื่องดื่มแอลกอฮอล์',
    'Non-Alcoholic Drinks': 'เครื่องดื่มไม่มีแอลกอฮอล์'
};

// ⚠️ REPLACE THIS URL with your published Google Sheet CSV link
// Go to: File → Share → Publish to the Web → Sheet 1 → CSV → Publish → Copy URL
const GOOGLE_SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRGU0werGVMn3yhDVy8j8iz8BDHHIGAFDCDubldW7xuTmpeM13yAzD5FzFpAmsNiFaHxWFCjG8R2-ma/pub?gid=0&single=true&output=csv';

// Hardcoded fallback in case Google Sheets is down or unreachable
const FALLBACK_MENU = {
    categories: [
        {
            name_en: "Ramen", name_th: "ราเมน",
            items: [
                { name_en: "Tonkotsu Ramen", name_th: "ทงคตสึราเมน", description_en: "Rich pork broth ramen with chashu", description_th: "ราเมนซุปกระดูกหมูเข้มข้นพร้อมชาชู", price: "250" },
                { name_en: "Shoyu Ramen", name_th: "โชยุราเมน", description_en: "Classic soy sauce based broth ramen", description_th: "ราเมนซุปซีอิ๊วญี่ปุ่นแบบคลาสสิก", price: "220" }
            ]
        },
        {
            name_en: "Rice Set", name_th: "ข้าวชุด",
            items: [
                { name_en: "Katsudon", name_th: "คัตสึด้ง", description_en: "Fried pork cutlet rice bowl with egg", description_th: "ข้าวหน้าหมูทอดทงคัตสึใส่ไข่", price: "180" },
                { name_en: "Salmon Teriyaki Don", name_th: "ข้าวหน้าแซลมอนเทอริยากิ", description_en: "Grilled salmon with sweet teriyaki sauce", description_th: "ปลาแซลมอนย่างซอสเทอริยากิ", price: "280" }
            ]
        },
        {
            name_en: "Japanese Curry", name_th: "แกงกะหรี่ญี่ปุ่น",
            items: [
                { name_en: "Pork Katsu Curry", name_th: "แกงกะหรี่หมูทอด", description_en: "Rich Japanese curry with fried pork", description_th: "แกงกะหรี่ญี่ปุ่นเข้มข้นพร้อมหมูทอด", price: "230" }
            ]
        },
        {
            name_en: "Appetizers", name_th: "อาหารเรียกน้ำย่อย",
            items: [
                { name_en: "Edamame", name_th: "ถั่วแระญี่ปุ่น", description_en: "Steamed young soybeans with sea salt", description_th: "ถั่วแระญี่ปุ่นนึ่งโรยเกลือทะเล", price: "80" },
                { name_en: "Gyoza", name_th: "เกี๊ยวซ่า", description_en: "Pan-fried pork and cabbage dumplings", description_th: "เกี๊ยวซ่าหมูและกะหล่ำปลีทอด", price: "120" }
            ]
        },
        {
            name_en: "Vegetarian Dishes", name_th: "อาหารมังสวิรัติ",
            items: [
                { name_en: "Yasai Itame", name_th: "ผัดผักรวม", description_en: "Stir-fried mixed vegetables", description_th: "ผัดผักรวมมิตร", price: "150" }
            ]
        },
        {
            name_en: "Vegetarian Appetizers", name_th: "เรียกน้ำย่อยมังสวิรัติ",
            items: [
                { name_en: "Agedashi Tofu", name_th: "เต้าหู้ทอดราดซอส", description_en: "Deep fried tofu in savory dashi broth", description_th: "เต้าหู้ทอดในน้ำซุปดาชิ", price: "100" }
            ]
        },
        {
            name_en: "Alcoholic Drinks", name_th: "เครื่องดื่มแอลกอฮอล์",
            items: [
                { name_en: "Asahi Draft Beer", name_th: "เบียร์สดอาซาฮี", description_en: "Crisp Japanese draft beer (Pint)", description_th: "เบียร์สดจากญี่ปุ่น", price: "140" }
            ]
        },
        {
            name_en: "Non-Alcoholic Drinks", name_th: "เครื่องดื่มไม่มีแอลกอฮอล์",
            items: [
                { name_en: "Iced Matcha Latte", name_th: "มัทฉะลาเต้เย็น", description_en: "Premium green tea with fresh milk", description_th: "ชาเขียวมัทฉะพรีเมียมผสมนมสด", price: "95" }
            ]
        }
    ]
};

/**
 * Parses raw CSV text (from Google Sheets) into our menu data structure.
 * Expected columns: category, name_en, name_th, description_en, description_th, price
 */
function parseCSVToMenu(csvText) {
    const lines = csvText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    if (lines.length < 2) return null; // Need header + at least 1 data row

    // Skip header row (line 0)
    const categoriesMap = new Map();

    for (let i = 1; i < lines.length; i++) {
        // Handle CSV fields that might contain commas inside quotes
        const fields = parseCSVLine(lines[i]);
        if (fields.length < 7) continue; // Skip malformed rows

        const [category_en, category_th, name_en, name_th, description_en, description_th, price] = fields.map(f => f.trim());

        if (!category_en || !name_en) continue; // Skip empty rows

        if (!categoriesMap.has(category_en)) {
            categoriesMap.set(category_en, {
                name_en: category_en,
                name_th: category_th || CATEGORY_TRANSLATIONS[category_en] || category_en,
                items: []
            });
        }

        categoriesMap.get(category_en).items.push({
            name_en,
            name_th: name_th || name_en,
            description_en: description_en || '',
            description_th: description_th || '',
            price: price || '0'
        });
    }

    if (categoriesMap.size === 0) return null;
    return { categories: Array.from(categoriesMap.values()) };
}

/**
 * Parses a single CSV line respecting quoted fields with commas inside.
 */
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
                current += '"'; // Escaped quote
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (ch === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += ch;
        }
    }
    result.push(current);
    return result;
}

/**
 * Loads the menu: tries Google Sheets first, falls back to hardcoded data.
 */
function loadMenuData() {
    if (GOOGLE_SHEETS_CSV_URL === 'YOUR_GOOGLE_SHEET_CSV_URL_HERE') {
        // No Sheet URL configured yet — use fallback directly
        console.warn('⚠️ Google Sheets URL not configured. Using fallback menu.');
        menuData = FALLBACK_MENU;
        renderMenuCategories();
        renderMenuItems(0);
        return;
    }

    fetch(GOOGLE_SHEETS_CSV_URL)
        .then(response => {
            if (!response.ok) throw new Error('Google Sheets responded with ' + response.status);
            return response.text();
        })
        .then(csvText => {
            const parsed = parseCSVToMenu(csvText);
            if (parsed && parsed.categories.length > 0) {
                menuData = parsed;
            } else {
                console.warn('⚠️ Google Sheet returned empty data. Using fallback.');
                menuData = FALLBACK_MENU;
            }
            renderMenuCategories();
            renderMenuItems(0);
        })
        .catch(error => {
            console.error('❌ Error fetching menu from Google Sheets:', error);
            console.warn('📋 Loading fallback menu instead.');
            menuData = FALLBACK_MENU;
            renderMenuCategories();
            renderMenuItems(0);
        });
}

function renderMenuCategories() {
    const navContainer = document.getElementById('category-nav');
    if (!navContainer || !menuData) return;

    navContainer.innerHTML = '';
    navContainer.setAttribute('role', 'tablist');
    navContainer.setAttribute('aria-label', 'Menu categories');

    menuData.categories.forEach((category, index) => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${index === activeCategoryIndex ? 'active' : ''}`;

        // ARIA tab pattern (P1-07)
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', String(index === activeCategoryIndex));
        btn.setAttribute('tabindex', index === activeCategoryIndex ? '0' : '-1');
        btn.id = `category-tab-${index}`;
        btn.setAttribute('aria-controls', 'menu-items-container');

        const catName = currentLanguage === 'th' && category.name_th ? category.name_th : category.name_en;
        btn.textContent = catName;

        btn.addEventListener('click', () => {
            activeCategoryIndex = index;
            renderMenuCategories();
            renderMenuItems(index);
        });

        // Arrow key navigation between tabs (P1-07)
        btn.addEventListener('keydown', (e) => {
            const tabs = navContainer.querySelectorAll('[role="tab"]');
            let newIndex = index;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                newIndex = (index + 1) % tabs.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                newIndex = (index - 1 + tabs.length) % tabs.length;
            } else if (e.key === 'Home') {
                e.preventDefault();
                newIndex = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                newIndex = tabs.length - 1;
            }
            if (newIndex !== index) {
                tabs[newIndex].focus();
                tabs[newIndex].click();
            }
        });

        navContainer.appendChild(btn);
    });
}

function renderMenuItems(categoryIndex) {
    const itemsContainer = document.getElementById('menu-items-container');
    const categoryHeadingEl = document.getElementById('active-category-name');
    if (!itemsContainer || !menuData) return;

    const category = menuData.categories[categoryIndex];
    if (!category || !category.items) return;

    // Update sidebar category heading with smooth fade
    const catName = currentLanguage === 'th' && category.name_th ? category.name_th : category.name_en;
    const isFirstLoad = itemsContainer.children.length === 0;

    if (categoryHeadingEl) {
        if (isFirstLoad) {
            categoryHeadingEl.textContent = catName;
        } else {
            categoryHeadingEl.classList.add('fade-out');
            setTimeout(() => {
                categoryHeadingEl.textContent = catName;
                categoryHeadingEl.classList.remove('fade-out');
            }, 300);
        }
    }

    // ARIA tabpanel (P1-07)
    itemsContainer.setAttribute('role', 'tabpanel');
    itemsContainer.setAttribute('aria-labelledby', `category-tab-${categoryIndex}`);

    // Helper: build the menu items into the container
    const buildItems = () => {
        itemsContainer.innerHTML = '';

        category.items.forEach(item => {
            const itemName = currentLanguage === 'th' && item.name_th ? item.name_th : item.name_en;
            const itemDesc = currentLanguage === 'th' && item.description_th ? item.description_th : item.description_en;

            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item scroll-reveal active';

            const headerEl = document.createElement('div');
            headerEl.className = 'menu-item-header';

            const nameEl = document.createElement('h4');
            nameEl.className = 'menu-item-name';
            nameEl.textContent = itemName;

            const priceEl = document.createElement('div');
            priceEl.className = 'menu-item-price';
            priceEl.textContent = `${item.price} ฿`;

            headerEl.appendChild(nameEl);
            headerEl.appendChild(priceEl);
            itemEl.appendChild(headerEl);

            if (itemDesc) {
                const descEl = document.createElement('p');
                descEl.className = 'menu-item-desc';
                descEl.textContent = itemDesc;
                itemEl.appendChild(descEl);
            }

            itemsContainer.appendChild(itemEl);
        });
    };

    if (isFirstLoad) {
        // First load: build immediately with a gentle fade-in
        buildItems();
        itemsContainer.classList.add('fade-out');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                itemsContainer.classList.remove('fade-out');
                itemsContainer.classList.add('fade-in');
            });
        });
    } else {
        // Category switch: crossfade (fade out → rebuild → fade in)
        itemsContainer.classList.add('fade-out');
        itemsContainer.classList.remove('fade-in');

        setTimeout(() => {
            buildItems();
            requestAnimationFrame(() => {
                itemsContainer.classList.remove('fade-out');
                itemsContainer.classList.add('fade-in');
            });
        }, 450);
    }
}


// --- Smart Sticky Header ---
function initSmartHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    let lastScrollTop = 0;
    const scrollThreshold = 50; // Minimum scroll distance before adding solid background

    window.addEventListener('scroll', () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // If at the very top, remove solid background and don't hide
        if (currentScrollTop <= scrollThreshold) {
            header.classList.remove('header-solid');
            header.classList.remove('header-hidden');
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
            return;
        }

        // Determine Scroll Direction
        if (currentScrollTop > lastScrollTop) {
            // Scrolling Down
            header.classList.add('header-hidden');
            header.classList.remove('header-solid'); // Optional: optimize layout recalcs
        } else {
            // Scrolling Up
            header.classList.remove('header-hidden');
            header.classList.add('header-solid');
        }

        // Update last scroll position (for mobile or negative scrolling)
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }, { passive: true });
}

// --- Dynamic Copyright Year ---
function setDynamicYear() {
    const yearEl = document.getElementById('footer-year');
    if (!yearEl) return;
    const year = new Date().getFullYear();
    const enText = `© ${year} Lazy House. All rights reserved.`;
    const thText = `© ${year} เลซี่ เฮ้าส์ สงวนลิขสิทธิ์ทั้งหมด`;
    yearEl.textContent = currentLanguage === 'th' ? thText : enText;
    // Store for language toggle
    yearEl.setAttribute('data-year-en', enText);
    yearEl.setAttribute('data-year-th', thText);
}

// --- Gallery Carousel ---
function initGalleryCarousel() {
    const carousel = document.querySelector('.gallery-carousel');
    if (!carousel) return;

    const pages = carousel.querySelectorAll('.gallery-page');
    const dots = carousel.querySelectorAll('.gallery-dot');
    const prevBtn = carousel.querySelector('.gallery-arrow--prev');
    const nextBtn = carousel.querySelector('.gallery-arrow--next');
    if (pages.length === 0) return;

    let currentPage = 0;
    let isTransitioning = false;
    const FADE_DURATION = 600; // Must match CSS transition duration

    function goToPage(index) {
        if (isTransitioning || index === currentPage || index < 0 || index >= pages.length) return;
        isTransitioning = true;

        const outgoing = pages[currentPage];
        const incoming = pages[index];

        // Start cross-fade: outgoing fades out, incoming fades in
        outgoing.classList.remove('active');
        outgoing.classList.add('fading-out');

        incoming.classList.add('active');

        // Update dots immediately for responsiveness
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // After transition completes, clean up
        setTimeout(() => {
            outgoing.classList.remove('fading-out');
            currentPage = index;
            isTransitioning = false;
        }, FADE_DURATION);
    }

    function nextPage() {
        const next = (currentPage + 1) % pages.length;
        goToPage(next);
    }

    function prevPage() {
        const prev = (currentPage - 1 + pages.length) % pages.length;
        goToPage(prev);
    }

    // Arrow click events
    prevBtn?.addEventListener('click', prevPage);
    nextBtn?.addEventListener('click', nextPage);

    // Dot click events
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const pageIndex = parseInt(dot.getAttribute('data-page'), 10);
            goToPage(pageIndex);
        });
    });

    // Touch swipe support (mobile)
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextPage(); // Swipe left → next
            } else {
                prevPage(); // Swipe right → prev
            }
        }
    }, { passive: true });
}

// --- Gallery Lightbox (P2-03) ---
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const closeBtn = lightbox?.querySelector('.lightbox-close');
    const prevBtn = lightbox?.querySelector('.lightbox-prev');
    const nextBtn = lightbox?.querySelector('.lightbox-next');
    const overlay = lightbox?.querySelector('.lightbox-overlay');

    if (!lightbox || !lightboxImg) return;

    const galleryImages = document.querySelectorAll('.gallery-img');
    if (galleryImages.length === 0) return;

    let currentIndex = 0;
    let triggerElement = null;

    // Make gallery images keyboard-accessible
    galleryImages.forEach((img) => {
        img.setAttribute('role', 'button');
        img.setAttribute('tabindex', '0');
        img.setAttribute('aria-label', 'Open image in gallery viewer');
    });

    function openLightbox(index) {
        currentIndex = index;
        updateImage();
        lightbox.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        // Make background inert
        const header = document.getElementById('site-header');
        const mainContent = document.getElementById('main-content');
        const footer = document.querySelector('.site-footer');
        if (header) header.setAttribute('inert', '');
        if (mainContent) mainContent.setAttribute('inert', '');
        if (footer) footer.setAttribute('inert', '');
        // Focus close button
        closeBtn?.focus();
    }

    function closeLightbox() {
        lightbox.setAttribute('hidden', '');
        document.body.style.overflow = '';
        // Remove inert
        const header = document.getElementById('site-header');
        const mainContent = document.getElementById('main-content');
        const footer = document.querySelector('.site-footer');
        if (header) header.removeAttribute('inert');
        if (mainContent) mainContent.removeAttribute('inert');
        if (footer) footer.removeAttribute('inert');
        // Return focus to trigger
        if (triggerElement) triggerElement.focus();
    }

    function updateImage() {
        const img = galleryImages[currentIndex];
        if (!img) return;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightboxCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateImage();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateImage();
    }

    // Open on click/keyboard
    galleryImages.forEach((img, index) => {
        const handler = () => {
            triggerElement = img;
            openLightbox(index);
        };
        img.addEventListener('click', handler);
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handler();
            }
        });
    });

    // Controls
    closeBtn?.addEventListener('click', closeLightbox);
    overlay?.addEventListener('click', closeLightbox);
    prevBtn?.addEventListener('click', prevImage);
    nextBtn?.addEventListener('click', nextImage);

    // Keyboard navigation inside lightbox
    lightbox.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'Tab') {
            // Focus trap
            const focusable = lightbox.querySelectorAll('button');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });
}

// --- Lazy Smooth Scrolling ---
function initLazySmoothScroll() {
    const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;

    // Easing function: easeInOutCubic - relaxed, slow start and end
    const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    document.querySelectorAll('.nav-link[href^="#"], .cta-button[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty hashes

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();

            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;

            // Duration in ms: feeling lazy/relaxed
            const duration = 1200;
            let start = null;

            window.requestAnimationFrame(function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                // Calculate percentage of duration (capped at 1)
                const percent = Math.min(progress / duration, 1);

                // Apply easing
                const easedProgress = easeInOutCubic(percent);
                window.scrollTo(0, startPosition + distance * easedProgress);

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                } else {
                    // Finally, silently update the URL hash without jumping
                    history.pushState(null, null, targetId);
                }
            });
        });
    });
}

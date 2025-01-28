function openModal() {
    document.getElementById('settingsModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

function saveSettings() {
    const language = document.getElementById('language').value;
    const country = document.getElementById('country').value;
    const currency = document.getElementById('currency').value;

    // Update flag and language abbreviation
    const flag = document.getElementById('flag');
    const languageAbbr = document.getElementById('language-abbr');

    if (country === 'us') {
        flag.src = 'img/EEUU.png';
        languageAbbr.textContent = 'US';
    } else if (country === 'es') {
        flag.src = 'img/españa.jpg';
        languageAbbr.textContent = 'ES';
    } else if (country === 'fr') {
        flag.src = 'img/francia.png';
        languageAbbr.textContent = 'FR';
    }

    // Update text content based on language
    updateLanguage(language);

    // Update prices and currency symbol based on currency
    updatePrices(currency);
    updateCurrencySymbol(currency);

    closeModal();
}

function updateLanguage(language) {
    if (language === 'en') {
        document.getElementById('home-link').textContent = 'Home';
        document.getElementById('products-link').textContent = 'Products';
        document.getElementById('about-link').textContent = 'About';
        document.getElementById('contact-link').textContent = 'Contact';
        document.getElementById('hero-title').textContent = 'Welcome to AlphaStrength';
        document.getElementById('hero-description').textContent = 'Your one-stop shop for all your fitness needs.';
        document.getElementById('shop-now-btn').textContent = 'Shop Now';
        document.getElementById('featured-products-title').textContent = 'Featured Products';
        document.getElementById('product1-title').textContent = 'Product 1';
        document.getElementById('product2-title').textContent = 'Product 2';
        document.getElementById('product3-title').textContent = 'Product 3';
        document.getElementById('account-text').textContent = 'Account';
        document.getElementById('cart-text').textContent = 'Cart';
        document.getElementById('cart-title').textContent = 'Your Cart';
    } else if (language === 'es') {
        document.getElementById('home-link').textContent = 'Inicio';
        document.getElementById('products-link').textContent = 'Productos';
        document.getElementById('about-link').textContent = 'Acerca de';
        document.getElementById('contact-link').textContent = 'Contacto';
        document.getElementById('hero-title').textContent = 'Bienvenido a AlphaStrength';
        document.getElementById('hero-description').textContent = 'Tu tienda única para todas tus necesidades de fitness.';
        document.getElementById('shop-now-btn').textContent = 'Comprar Ahora';
        document.getElementById('featured-products-title').textContent = 'Productos Destacados';
        document.getElementById('product1-title').textContent = 'Producto 1';
        document.getElementById('product2-title').textContent = 'Producto 2';
        document.getElementById('product3-title').textContent = 'Producto 3';
        document.getElementById('account-text').textContent = 'Cuenta';
        document.getElementById('cart-text').textContent = 'Cesta';
        document.getElementById('cart-title').textContent = 'Tu Cesta';
    } else if (language === 'fr') {
        document.getElementById('home-link').textContent = 'Accueil';
        document.getElementById('products-link').textContent = 'Produits';
        document.getElementById('about-link').textContent = 'À propos';
        document.getElementById('contact-link').textContent = 'Contact';
        document.getElementById('hero-title').textContent = 'Bienvenue à AlphaStrength';
        document.getElementById('hero-description').textContent = 'Votre boutique unique pour tous vos besoins en fitness.';
        document.getElementById('shop-now-btn').textContent = 'Acheter Maintenant';
        document.getElementById('featured-products-title').textContent = 'Produits Vedettes';
        document.getElementById('product1-title').textContent = 'Produit 1';
        document.getElementById('product2-title').textContent = 'Produit 2';
        document.getElementById('product3-title').textContent = 'Produit 3';
        document.getElementById('account-text').textContent = 'Compte';
        document.getElementById('cart-text').textContent = 'Panier';
        document.getElementById('cart-title').textContent = 'Votre Panier';
    }
}

function updatePrices(currency) {
    const prices = {
        'usd': ['$29.99', '$39.99', '$49.99'],
        'eur': ['€29.99', '€39.99', '€49.99'],
        'gbp': ['£29.99', '£39.99', '£49.99']
    };

    const productPrices = prices[currency];
    document.getElementById('product1-price').textContent = productPrices[0];
    document.getElementById('product2-price').textContent = productPrices[1];
    document.getElementById('product3-price').textContent = productPrices[2];
}

function updateCurrencySymbol(currency) {
    const currencySpan = document.getElementById('currency');
    if (currency === 'usd') {
        currencySpan.textContent = '$';
    } else if (currency === 'eur') {
        currencySpan.textContent = '€';
    } else if (currency === 'gbp') {
        currencySpan.textContent = '£';
    }
}

// Set default language to Spanish and currency to Euro on page load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('language').value = 'es';
    document.getElementById('country').value = 'es';
    document.getElementById('currency').value = 'eur';
    updateLanguage('es');
    updatePrices('eur');
    updateCurrencySymbol('eur');
});
const languages = {
    en: { abbr: "US", flag: "img/EEUU.png", texts: {
        "site-title": "AlphaStrength",
        "hero-title": "Welcome to AlphaStrength",
        "hero-description": "Your one-stop shop for all your fitness needs.",
        "featured-products-title": "Featured Products",
        "product1-title": "Product 1",
        "product2-title": "Product 2",
        "product3-title": "Product 3",
        "home-link": "Home",
        "productos-link": "Products",
        "about-link": "About Us",
        "contact-link": "Contact",
        "account-text": "Account",
        "cart-text": "Cart"
    }},
    es: { abbr: "ES", flag: "img/españa.jpg", texts: {
        "site-title": "AlphaStrength",
        "hero-title": "Bienvenido a AlphaStrength",
        "hero-description": "Tu tienda única para todas tus necesidades de fitness.",
        "featured-products-title": "Productos Destacados",
        "product1-title": "Producto 1",
        "product2-title": "Producto 2",
        "product3-title": "Producto 3",
        "home-link": "Inicio",
        "productos-link": "Productos",
        "about-link": "Acerca de",
        "contact-link": "Contacto",
        "account-text": "Cuenta",
        "cart-text": "Cesta"
    }},
    fr: { abbr: "FR", flag: "img/francia.png", texts: {
        "site-title": "AlphaStrength",
        "hero-title": "Bienvenue chez AlphaStrength",
        "hero-description": "Votre magasin unique pour tous vos besoins en fitness.",
        "featured-products-title": "Produits en Vedette",
        "product1-title": "Produit 1",
        "product2-title": "Produit 2",
        "product3-title": "Produit 3",
        "home-link": "Accueil",
        "productos-link": "Produits",
        "about-link": "À propos",
        "contact-link": "Contact",
        "account-text": "Compte",
        "cart-text": "Panier"
    }},
};



// Definimos las monedas y sus tasas de conversión
const currencies = {
    usd: { symbol: "$", conversionRate: 1 },
    eur: { symbol: "€", conversionRate: 0.9 },
    gbp: { symbol: "£", conversionRate: 0.75 },
};

function saveSettings() {
    const selectedLanguage = document.getElementById("language").value;
    const selectedCurrency = document.getElementById("currency").value;

    localStorage.setItem("language", selectedLanguage);
    localStorage.setItem("currency", selectedCurrency);

    updateContent(selectedLanguage, selectedCurrency);
    closeModal();
}

// Función para cargar la configuración desde localStorage
function loadSettings() {
    const savedLanguage = localStorage.getItem("language") || "es";
    const savedCurrency = localStorage.getItem("currency") || "eur";

    document.getElementById("language").value = savedLanguage;
    document.getElementById("currency").value = savedCurrency;

    updateContent(savedLanguage, savedCurrency);
}

// Función para actualizar el contenido según el idioma y la moneda seleccionada
function updateContent(language, currency) {
    const selectedLanguage = languages[language];
    const selectedCurrency = currencies[currency];

    // Actualizamos el idioma
    document.getElementById("language-abbr").textContent = selectedLanguage.abbr;
    document.getElementById("flag").src = selectedLanguage.flag;

    // Actualizamos los textos de la navegación
    document.getElementById("home-link").textContent = selectedLanguage.texts["home-link"];
    document.getElementById("productos-link").textContent = selectedLanguage.texts["productos-link"];
    document.getElementById("about-link").textContent = selectedLanguage.texts["about-link"];
    document.getElementById("contact-link").textContent = selectedLanguage.texts["contact-link"];
    document.getElementById("account-text").textContent = selectedLanguage.texts["account-text"];
    document.getElementById("cart-text").textContent = selectedLanguage.texts["cart-text"];

    // Actualizamos la moneda y los precios
    updateProductPrices(selectedCurrency.conversionRate, selectedCurrency.symbol);
}


// Función para actualizar los precios de los productos
function updateProductPrices(conversionRate, symbol) {
    const products = [
        { element: document.getElementById("product1-price"), basePrice: 29.99 },
        { element: document.getElementById("product2-price"), basePrice: 39.99 },
        { element: document.getElementById("product3-price"), basePrice: 49.99 },
    ];

    products.forEach((product) => {
        const convertedPrice = (product.basePrice * conversionRate).toFixed(2);
        product.element.textContent = `${symbol}${convertedPrice}`;
    });
}

// Función para abrir y cerrar el modal de configuración
function openModal() {
    document.getElementById("settingsModal").style.display = "block";
}

function closeModal() {
    document.getElementById("settingsModal").style.display = "none";
}

// Llamamos a la función loadSettings() cuando la página esté completamente cargada
document.addEventListener("DOMContentLoaded", loadSettings);

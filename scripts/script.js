// Referencias globales
const settingsModal = document.getElementById("settingsModal");
const flag = document.getElementById("flag");
const languageAbbr = document.getElementById("language-abbr");
const currencySpan = document.querySelector(".currency");
const productPrices = document.querySelectorAll("[id$='-price']"); // Selecciona los precios con IDs que terminan en "-price"

// Datos de configuración
const currencies = {
    usd: { symbol: "$", conversionRate: 1.1 }, // Conversión USD a EUR
    eur: { symbol: "€", conversionRate: 1 },   // EUR como base
    gbp: { symbol: "£", conversionRate: 0.85 } // Conversión GBP a EUR
};

const languages = {
    en: { abbr: "EN", flag: "img/usa.jpg" },
    es: { abbr: "ES", flag: "img/españa.jpg" },
    fr: { abbr: "FR", flag: "img/francia.jpg" }
};

// Abrir el modal de configuración
function openModal() {
    settingsModal.style.display = "block";
}

// Cerrar el modal de configuración
function closeModal() {
    settingsModal.style.display = "none";
}

// Guardar configuraciones seleccionadas
function saveSettings() {
    // Obtener valores seleccionados
    const selectedLanguage = document.getElementById("language").value;
    const selectedCurrency = document.getElementById("currency").value;

<<<<<<< HEAD
    // Actualizar idioma y bandera
    if (languages[selectedLanguage]) {
        const { abbr, flag: flagSrc } = languages[selectedLanguage];
        languageAbbr.textContent = abbr;
        flag.src = flagSrc;
=======
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
    } else if (country === 'PE') {
        flag.src = 'img/PERU.png';
        languageAbbr.textContent = 'PE';
>>>>>>> 2575cd3dfbb63094133b20ca325249e61aaa9211
    }

    // Actualizar moneda y precios
    if (currencies[selectedCurrency]) {
        const { symbol, conversionRate } = currencies[selectedCurrency];
        currencySpan.textContent = symbol;
        updateProductPrices(conversionRate, symbol);
    }

    // Cerrar el modal después de guardar
    closeModal();
}

// Actualizar precios de los productos
function updateProductPrices(conversionRate, symbol) {
    // Precios originales en EUR
    const originalPrices = [29.99, 39.99, 49.99]; // Mismos precios que en el HTML

    productPrices.forEach((priceElement, index) => {
        const convertedPrice = (originalPrices[index] * conversionRate).toFixed(2);
        priceElement.textContent = `${symbol}${convertedPrice}`;
    });
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target === settingsModal) {
        closeModal();
    }
};

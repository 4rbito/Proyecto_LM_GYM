const languageAbbr = document.getElementById("language-abbr");
const flag = document.getElementById("flag");
const currencySpan = document.querySelector(".currency");

// Definición de idiomas y monedas disponibles
const languages = {
    en: { abbr: "US", flag: "img/EEUU.png" },
    es: { abbr: "ES", flag: "img/españa.jpg" },
    fr: { abbr: "FR", flag: "img/francia.png" },
};

const currencies = {
    usd: { symbol: "$", conversionRate: 1 },
    eur: { symbol: "€", conversionRate: 0.9 },
    gbp: { symbol: "£", conversionRate: 0.75 },
};

// Guardar configuraciones en localStorage
function saveSettings() {
    const selectedLanguage = document.getElementById("language").value;
    const selectedCurrency = document.getElementById("currency").value;

    // Guardar las configuraciones seleccionadas en localStorage
    localStorage.setItem("language", selectedLanguage);
    localStorage.setItem("currency", selectedCurrency);

    // Actualizar idioma, bandera y moneda
    if (languages[selectedLanguage]) {
        const { abbr, flag: flagSrc } = languages[selectedLanguage];
        languageAbbr.textContent = abbr;
        flag.src = flagSrc;
    }

    if (currencies[selectedCurrency]) {
        const { symbol, conversionRate } = currencies[selectedCurrency];
        currencySpan.textContent = symbol;
        updateProductPrices(conversionRate, symbol);
    }

    // Cerrar modal
    closeModal();
}

// Cargar configuraciones desde localStorage al cargar la página
function loadSettings() {
    const savedLanguage = localStorage.getItem("language") || "es"; // Idioma por defecto: español
    const savedCurrency = localStorage.getItem("currency") || "eur"; // Moneda por defecto: euro

    // Establecer valores en el modal
    document.getElementById("language").value = savedLanguage;
    document.getElementById("currency").value = savedCurrency;

    // Aplicar configuraciones guardadas
    if (languages[savedLanguage]) {
        const { abbr, flag: flagSrc } = languages[savedLanguage];
        languageAbbr.textContent = abbr;
        flag.src = flagSrc;
    }

    if (currencies[savedCurrency]) {
        const { symbol, conversionRate } = currencies[savedCurrency];
        currencySpan.textContent = symbol;
        updateProductPrices(conversionRate, symbol);
    }
}

// Actualizar precios de productos
function updateProductPrices(conversionRate, symbol) {
    const productPrices = document.querySelectorAll(".product-price");
    productPrices.forEach((price) => {
        const basePrice = parseFloat(price.getAttribute("data-base-price"));
        const convertedPrice = (basePrice * conversionRate).toFixed(2);
        price.textContent = `${symbol}${convertedPrice}`;
    });
}

// Abrir y cerrar el modal
function openModal() {
    document.getElementById("settingsModal").style.display = "block";
}

function closeModal() {
    document.getElementById("settingsModal").style.display = "none";
}

// Llamar a loadSettings() al cargar la página
document.addEventListener("DOMContentLoaded", loadSettings);

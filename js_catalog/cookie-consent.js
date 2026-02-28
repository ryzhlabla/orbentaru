document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("dataConsentAccepted") === "true") {
        return;
    }

    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;

        if (!browserLang) return "en";
        if (browserLang.startsWith("de")) return "de";
        if (browserLang.startsWith("ru")) return "ru";
        return "en";
    }

    const savedLang = localStorage.getItem("lang");
    const lang = savedLang ? savedLang : detectBrowserLanguage();

    const texts = {
        de: {
            message: "Diese Website verarbeitet personenbezogene Daten gemäß DSGVO.",
            accept: "Akzeptieren",
            linkText: "Datenschutzerklärung"
        },
        en: {
            message: "This website processes personal data in accordance with the GDPR.",
            accept: "Accept",
            linkText: "Privacy Policy"
        },
        ru: {
            message: "Этот сайт обрабатывает персональные данные в соответствии с GDPR.",
            accept: "Принять",
            linkText: "Политика конфиденциальности"
        }
    };

    // 🔥 Определяем правильный путь
    let policyPath = "";

    if (window.location.pathname.includes("/component/")) {
        policyPath = "policy.html";
    } else {
        policyPath = "component/policy.html";
    }

    const banner = document.createElement("div");
    banner.className = "consent-banner";

    banner.innerHTML = `
        <div class="consent-content">
            <p>
                ${texts[lang].message}
                <a href="${policyPath}" target="_blank">
                    ${texts[lang].linkText}
                </a>
            </p>
            <button id="acceptConsent">${texts[lang].accept}</button>
        </div>
    `;

    document.body.appendChild(banner);

    document.getElementById("acceptConsent").addEventListener("click", function () {
        localStorage.setItem("dataConsentAccepted", "true");
        banner.remove();
    });

});
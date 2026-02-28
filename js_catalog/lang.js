const translations = {
    de: {
        hero_title: "Professionelle IT- und Datenberatung",
        hero_subtitle: "SAP, Oracle, Data Governance & BI Reporting",
        sap_text: "Implementierung und Optimierung von SAP Logistikmodulen, Migration zu serverbasierten Lösungen, Reporting, Fehleranalyse und Qualitätsmanagement.",
        oracle_text: "Audit bestehender Datenbanksysteme sowie Entwicklung effizienter und skalierbarer Datenbankschemata.",
        dg_text: "Analyse und Optimierung von Datenprozessen, Sicherstellung von Datenqualität, Compliance und nachhaltiger Datenstrategie.",
        bi_text: "Entwicklung interaktiver Power BI Reports mit Integration moderner KI-Analysen zur datenbasierten Entscheidungsunterstützung."
    },
    en: {
        hero_title: "Professional IT & Data Consulting",
        hero_subtitle: "SAP, Oracle, Data Governance & BI Reporting",
        sap_text: "Implementation and optimization of SAP logistics modules, server migration, reporting, error monitoring and quality control.",
        oracle_text: "Audit of database systems and design of scalable, high-performance data schemas.",
        dg_text: "Assessment of data transformation processes, ensuring data quality, compliance and long-term governance strategy.",
        bi_text: "Development of interactive Power BI dashboards including AI-driven analytics for data-driven decision making."
    },
    ru: {
        hero_title: "Профессиональный IT и Data консалтинг",
        hero_subtitle: "SAP, Oracle, Data Governance и BI Reporting",
        sap_text: "Настройка и оптимизация логистических модулей SAP, переход на серверные решения, построение отчетности, контроль ошибок и управление качеством.",
        oracle_text: "Аудит существующих баз данных и проектирование масштабируемых схем хранения данных.",
        dg_text: "Аудит процессов трансформации данных, обеспечение качества данных, соответствие требованиям и разработка стратегии управления данными.",
        bi_text: "Создание интерактивных отчетов Power BI с использованием современных AI-инструментов для поддержки управленческих решений."
    }
};

/* ==============================
   AUTO LANGUAGE DETECTION
============================== */

function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;

    if (!browserLang) return "en";

    if (browserLang.startsWith("de")) return "de";
    if (browserLang.startsWith("ru")) return "ru";

    return "en";
}

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyLanguage(lang);
    document.documentElement.lang = lang;
}

function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {

    let lang = localStorage.getItem("lang");

    if (!lang) {
        lang = detectBrowserLanguage();
        localStorage.setItem("lang", lang);
    }

    applyLanguage(lang);
    document.documentElement.lang = lang;
});
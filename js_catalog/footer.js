document.addEventListener("DOMContentLoaded", function () {

    const isInComponent = window.location.pathname.includes("/component/");

    const ofertaPath = isInComponent ? "oferta.html" : "component/oferta.html";
    const policyPath = isInComponent ? "policy.html" : "component/policy.html";

    const footer = `
        <footer>
            <p>ORBENTA UG</p>
            <p>Vossricke 16, 33100 Paderborn, Germany</p>
            <p>
                <a href="${ofertaPath}">Terms</a> |
                <a href="${policyPath}">Privacy</a>
            </p>
        </footer>
    `;

    document.getElementById("footer-container").innerHTML = footer;
});
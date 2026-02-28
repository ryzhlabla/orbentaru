document.addEventListener("DOMContentLoaded", function () {

    const isInComponent = window.location.pathname.includes("/component/");

    const indexPath = isInComponent ? "../index.html" : "index.html";
    const logoPath = isInComponent ? "../img/logo.png" : "img/logo.png";

    const header = `
        <header class="main-header header-animate">

            <div class="header-left"></div>

            <div class="logo-wrapper">
                <a href="${indexPath}">
                    <img src="${logoPath}" alt="ORBENTA Logo" class="logo-img">
                </a>
            </div>

            <div class="header-right">
                <div class="language-switcher">
                    <label>
                        <input type="radio" name="lang" value="de">
                        <span>DE</span>
                    </label>
                    <label>
                        <input type="radio" name="lang" value="en">
                        <span>EN</span>
                    </label>
                    <label>
                        <input type="radio" name="lang" value="ru">
                        <span>RU</span>
                    </label>
                </div>
            </div>

        </header>
    `;

    document.getElementById("header-container").innerHTML = header;

    const savedLang = localStorage.getItem("lang") || "de";

    document.querySelectorAll("input[name='lang']").forEach(radio => {
        if (radio.value === savedLang) {
            radio.checked = true;
        }

        radio.addEventListener("change", function () {
            localStorage.setItem("lang", this.value);
            location.reload();
        });
    });

});
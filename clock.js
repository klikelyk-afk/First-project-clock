let currentTimeZone = "Europe/Kyiv";
let currentCityLabel = "Київ, Україна";
let currentCountry = "Ukraine";
let currentLang = "uk";
let lastSelectedCityKey = "Київ";

const translations = {
    uk: { 
        select_city: "Оберіть місто:", select_country: "Оберіть країну:", select_lang: "Оберіть мову:",
        "Київ": "Київ", "Вінниця": "Вінниця", "Дніпро": "Дніпро", "Донецьк": "Донецьк", "Житомир": "Житомир", "Запоріжжя": "Запоріжжя", "Львів": "Львів", "Одеса": "Одеса", "Полтава": "Полтава", "Харків": "Харків",
        "Варшава": "Варшава", "Білосток": "Білосток", "Бидгощ": "Бидгощ", "Вроцлав": "Вроцлав", "Гданськ": "Гданськ", "Гдиня": "Гдиня", "Катовіце": "Катовіце", "Краків": "Краків", "Лодзь": "Лодзь", "Познань": "Познань",
        "Вашингтон": "Вашингтон", "Бостон": "Бостон", "Даллас": "Даллас", "Лос-Анджелес": "Лос-Анджелес", "Маямі": "Маямі", "Нью-Йорк": "Нью-Йорк", "Сан-Франциско": "Сан-Франциско", "Сіетл": "Сіетл", "Філадельфія": "Філадельфія", "Чикаго": "Чикаго",
        "Лондон": "Лондон", "Белфаст": "Белфаст", "Бірмінгем": "Бірмінгем", "Бристоль": "Бристоль", "Глазго": "Глазго", "Единбург": "Единбург", "Кардіфф": "Кардіфф", "Ліверпуль": "Ліверпуль", "Манчестер": "Манчестер", "Шеффілд": "Шеффілд"
    },
    en: { 
        select_city: "Select City:", select_country: "Select Country:", select_lang: "Select Language:",
        "Київ": "Kyiv", "Вінниця": "Vinnytsia", "Дніпро": "Dnipro", "Донецьк": "Donetsk", "Житомир": "Zhytomyr", "Запоріжжя": "Zaporizhzhia", "Львів": "Lviv", "Одеса": "Odesa", "Полтава": "Poltava", "Харків": "Kharkiv",
        "Варшава": "Warsaw", "Білосток": "Bialystok", "Бидгощ": "Bydgoszcz", "Вроцлав": "Wroclaw", "Гданськ": "Gdansk", "Гдиня": "Gdynia", "Катовіце": "Katowice", "Краків": "Krakow", "Лодзь": "Lodz", "Познань": "Poznan",
        "Вашингтон": "Washington", "Бостон": "Boston", "Даллас": "Dallas", "Лос-Анджелес": "Los Angeles", "Маямі": "Miami", "Нью-Йорк": "New York", "Сан-Франциско": "San Francisco", "Сіетл": "Seattle", "Філадельфія": "Philadelphia", "Чикаго": "Chicago",
        "Лондон": "London", "Белфаст": "Belfast", "Бірмінгем": "Birmingham", "Бристоль": "Bristol", "Глазго": "Glasgow", "Единбург": "Edinburgh", "Кардіфф": "Cardiff", "Ліверпуль": "Liverpool", "Манчестер": "Manchester", "Шеффілд": "Sheffield"
    },
    pl: { 
        select_city: "Wybierz miasto:", select_country: "Wybierz kraj:", select_lang: "Wybierz język:",
        "Київ": "Kijów", "Вінниця": "Winnica", "Дніпро": "Dniepr", "Донецьк": "Donieck", "Житомир": "Żytomierz", "Запоріжжя": "Zaporoże", "Львів": "Lwów", "Одеса": "Odessa", "Полтава": "Poлтава", "Харків": "Charków",
        "Варшава": "Warszawa", "Білосток": "Białystok", "Бидгощ": "Bydgoszcz", "Вроцлав": "Wrocław", "Гданськ": "Gdańsk", "Гдиня": "Gdynia", "Катовіце": "Katowice", "Краків": "Kraków", "Лодзь": "Łódź", "Познань": "Poznań",
        "Вашингтон": "Waszyngton", "Бостон": "Boston", "Даллас": "Dallas", "Лос-Анджелес": "Los Angeles", "Маямі": "Miami", "Нью-Йорк": "Nowy Jork", "Сан-Франциско": "San Francisco", "Сіетл": "Seattle", "Філадельфія": "Filadelfia", "Чикаго": "Chicago",
        "Лондон": "Londyn", "Белфаст": "Belfast", "Бірмінгем": "Birmingham", "Бристоль": "Bristol", "Глазго": "Glasgow", "Единбург": "Edynburg", "Кардіфф": "Cardiff", "Ліверпуль": "Liverpool", "Манчестер": "Manchester", "Шеффілд": "Sheffield"
    }
};

function updateClock() {
    const clockElement = document.getElementById('ukraine-clock');
    const dateElement = document.getElementById('ukraine-date');
    const labelElement = document.querySelector('.clock-label');
    const now = new Date();

    const locales = { uk: "uk-UA", en: "en-US", pl: "pl-PL" };
    const currentLocale = locales[currentLang];

    if (clockElement) clockElement.textContent = now.toLocaleTimeString(currentLocale, { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: currentTimeZone });
    if (dateElement) dateElement.textContent = now.toLocaleDateString(currentLocale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: currentTimeZone });
    if (labelElement) labelElement.textContent = currentCityLabel;
}

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    const activeTzBtn = document.querySelector(`.tz-opt[data-id="${currentCountry}"]`);
    if (activeTzBtn) currentCityLabel = activeTzBtn.getAttribute(`data-city-${lang}`);
    
    const translatedCity = translations[lang][lastSelectedCityKey] || lastSelectedCityKey;
    const cityLabel = document.getElementById('current-city');
    if (cityLabel) cityLabel.textContent = translatedCity + ':';
    
    updateClock();
}

function applyWeather(btn) {
    lastSelectedCityKey = btn.dataset.city;
    const country = btn.dataset.country;
    const urlMap = { "Ukraine": "/ua/", "UK": "/gb/", "Poland": "/pl/", "USA": "/us/" };
    const translatedCity = translations[currentLang][lastSelectedCityKey] || lastSelectedCityKey;
    
    const cityEl = document.getElementById('current-city');
    const tempEl = document.getElementById('current-temp');
    const linkEl = document.getElementById('main-weather-link');

    if (cityEl) cityEl.textContent = translatedCity + ':';
    if (tempEl) tempEl.textContent = btn.dataset.temp;
    if (linkEl) linkEl.href = `https://www.accuweather.com/uk${urlMap[country] || "/ua/"}${btn.dataset.url}/weather-forecast`;
}

function filterCities(countryId, autoSelect = false) {
    const buttons = document.querySelectorAll('.city-opt');
    const title = document.getElementById('weather-menu-title');
    if (title) title.textContent = `${translations[currentLang].select_city} (${countryId})`;
    
    let first = null;
    buttons.forEach(btn => {
        const isMatch = btn.dataset.country === countryId;
        btn.style.display = isMatch ? "block" : "none";
        if (isMatch && !first) first = btn;
    });
    if (autoSelect && first) applyWeather(first);
}

document.addEventListener('DOMContentLoaded', () => {
    const menus = { 
        weather: document.getElementById('weather-menu'), 
        tz: document.getElementById('timezone-menu'), 
        lang: document.getElementById('language-menu') 
    };

    const toggle = (key, e) => {
        e.preventDefault();
        e.stopPropagation();
        Object.keys(menus).forEach(k => {
            if (k === key) {
                menus[k].classList.toggle('active');
            } else {
                menus[k].classList.remove('active');
            }
        });
    };

    // Головні кнопки
    document.getElementById('weather-settings-btn').onclick = (e) => toggle('weather', e);
    document.getElementById('timezone-btn').onclick = (e) => toggle('tz', e);
    document.getElementById('language-btn').onclick = (e) => toggle('lang', e);

    // Кнопки всередині меню (з зупинкою спливання)
    document.querySelectorAll('.lang-opt').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            changeLanguage(btn.dataset.value);
            menus.lang.classList.remove('active');
        };
    });

    document.querySelectorAll('.tz-opt').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            currentTimeZone = btn.dataset.tz; 
            currentCountry = btn.dataset.id;
            changeLanguage(currentLang); 
            filterCities(currentCountry, true);
            menus.tz.classList.remove('active');
        };
    });

    document.querySelectorAll('.city-opt').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            applyWeather(btn); 
            menus.weather.classList.remove('active');
        };
    });

    // Тема
    document.getElementById('theme-toggle').onclick = function(e) {
        e.stopPropagation();
        document.body.classList.toggle('light-mode');
        this.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
    };

    // Закриття при кліку на фон
    window.onclick = () => {
        Object.values(menus).forEach(m => {
            if (m) m.classList.remove('active');
        });
    };

    // Ініціалізація
    filterCities("Ukraine", true); 
    setInterval(updateClock, 1000);
    updateClock();
});

document.getElementById('theme-toggle').onclick = function(e) {
    e.stopPropagation();
    
    // Перемикаємо тему.
    document.body.classList.toggle('light-mode');
    this.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';

    // Додаємо підстрибування для таблички
    const container = document.querySelector('.clock-container');
    container.classList.remove('jump-animation'); // Скидаємо, якщо вже була
    void container.offsetWidth; // Магія для перезапуску анімації
    container.classList.add('jump-animation');

    // Кнопка крутиться за допомогою CSS
};


document.getElementById('theme-toggle').onclick = function(e) {
    e.stopPropagation();
    
    // 1. Перемикаємо тему
    document.body.classList.toggle('light-mode');
    
    // Отримуємо нову іконку залежно від теми
    const newIcon = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
    
    // 2. Анімація смайлика всередині
    this.innerHTML = `<span class="rotate-inner">${newIcon}</span>`;

    // 3. Підстрибування головної таблички
    const container = document.querySelector('.clock-container');
    if (container) {
        container.classList.remove('jump-animation'); 
        void container.offsetWidth; 
        container.classList.add('jump-animation');
    }
};

const settingsBtn = document.getElementById('weather-settings-btn');

if (settingsBtn) {
    settingsBtn.addEventListener('click', function() {
        // Отримуємо іконку всередині кнопки
        const icon = this.innerHTML;
        
        // Щоб анімація спрацьовувала при кожному кліку, перестворюємо елемент
        this.innerHTML = `<span class="gear-rotate">${icon}</span>`;
        

        // щоб код залишався чистим 
        setTimeout(() => {
            this.innerHTML = icon;
        }, 700);
    });
}

async function applyWeather(btn) {
    if (!btn) return;
    
    // Зберігаємо для автооновлення
    window.currentActiveCityBtn = btn;
    
    lastSelectedCityKey = btn.dataset.city;
    const lat = btn.dataset.lat;
    const lon = btn.dataset.lon;
    
    const cityEl = document.getElementById('current-city');
    const tempEl = document.getElementById('current-temp');
    const linkEl = document.getElementById('main-weather-link');

    // 1. Оновлюємо назву міста
    if (cityEl) cityEl.textContent = (translations[currentLang][lastSelectedCityKey] || lastSelectedCityKey) + ':';

    // 2. Отримуємо погоду
    if (lat && lon) {
        try {
            // Запит до безкоштовного API
            const resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            const data = await resp.json();
            
            const realTemp = Math.round(data.current_weather.temperature);
            tempEl.textContent = (realTemp > 0 ? '+' : '') + realTemp + '°C';
        } catch (e) {
            console.error("API Error:", e);
            tempEl.textContent = btn.dataset.temp; // Фолбек на статику
        }
    } else {
        // Якщо в кнопці немає координат — показуємо цифру, що була в HTML
        tempEl.textContent = btn.dataset.temp;
    }

    // 3. Оновлюємо посилання на AccuWeather
    const country = btn.dataset.country;
    const urlMap = { "Ukraine": "/ua/", "UK": "/gb/", "Poland": "/pl/", "USA": "/us/" };
    if (linkEl) linkEl.href = `https://www.accuweather.com/uk${urlMap[country] || "/ua/"}${btn.dataset.url}/weather-forecast`;
}

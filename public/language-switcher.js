// Language switcher functionality
const translations = {
    ru: {
        // Navigation
        'nav-home': 'Главная',
        'nav-courses': 'Курсы',
        'nav-about': 'О нас',
        'nav-contact': 'Контакты',
        'nav-signup': 'Записаться',
        
        // Hero section
        'hero-title': 'Присоединяйтесь к',
        'hero-subtitle': 'будущему технологий',
        'hero-course': 'Робототехника и Программирование для детей',
        'hero-button': 'Изучить курсы >',
        
        // Stats section
        'stats-title': 'Ведущая IT-школа Казахстана для детей',
        'stats-students': 'ДОВОЛЬНЫХ УЧЕНИКОВ',
        'stats-robots': 'СОЗДАННЫХ РОБОТОВ',
        'stats-wins': 'ПОБЕД В СОРЕВНОВАНИЯХ',
        
        // About section
        'about-title': 'О TechLab Digital Solutions',
        'about-text': 'Мы - ведущая IT-школа робототехники и программирования для детей. Наша миссия - подготовить новое поколение к цифровому будущему через практическое обучение и творческий подход к технологиям.',
        'about-learn': 'Изучай',
        'about-learn-text': 'Изучай программирование и робототехнику с лучшими преподавателями и современными методиками обучения.',
        'about-create': 'Создавай',
        'about-create-text': 'Создавай собственных роботов, программы и проекты, которые станут частью твоего портфолио.',
        'about-compete': 'Соревнуйся',
        'about-compete-text': 'Участвуй в соревнованиях по робототехнике и программированию, показывай свои навыки и получай признание.',
        
        // Courses section
        'courses-title': 'Наши Курсы',
        'courses-subtitle': 'Откройте для себя мир технологий с нашими специализированными курсами.',
        
        // Footer
        'footer-tagline': 'Где технологии встречаются с будущим.',
        'footer-links': 'ПОЛЕЗНЫЕ ССЫЛКИ',
        'footer-contact': 'СВЯЗАТЬСЯ С НАМИ',
        'footer-social': 'МЫ В СОЦСЕТЯХ',
        'footer-courses': 'Курсы',
        'footer-privacy': 'Политика конфиденциальности',
        'footer-refund': 'Возврат и отмена',
        'footer-terms': 'Условия использования'
    },
    kz: {
        // Navigation
        'nav-home': 'Басты бет',
        'nav-courses': 'Курстар',
        'nav-about': 'Біз туралы',
        'nav-contact': 'Байланыс',
        'nav-signup': 'Тіркелу',
        
        // Hero section
        'hero-title': 'Технологиялардың болашағына',
        'hero-subtitle': 'қосылыңыз',
        'hero-course': 'Балаларға арналған робототехника және бағдарламалау',
        'hero-button': 'Курстарды зерттеу >',
        
        // Stats section
        'stats-title': 'Қазақстанның жетекші IT-мектебі балаларға арналған',
        'stats-students': 'ҚАНАҒАТТАНҒАН ОҚУШЫЛАР',
        'stats-robots': 'ЖАСАЛҒАН РОБОТТАР',
        'stats-wins': 'ЖАРЫСТАҒЫ ЖЕҢІСТЕР',
        
        // About section
        'about-title': 'TechLab Digital Solutions туралы',
        'about-text': 'Біз - балаларға арналған робототехника мен бағдарламалаудың жетекші IT-мектебіміз. Біздің миссиямыз - практикалық оқыту және технологияларға шығармашылық көзқарас арқылы жаңа ұрпақты цифрлық болашаққа дайындау.',
        'about-learn': 'Үйрен',
        'about-learn-text': 'Үздік мұғалімдер мен заманауи оқыту әдістемелерімен бағдарламалау мен робототехниканы үйреніңіз.',
        'about-create': 'Жаса',
        'about-create-text': 'Өз роботтарыңызды, бағдарламаларыңызды және портфолионыңыздың бөлігі болатын жобаларыңызды жасаңыз.',
        'about-compete': 'Жарыс',
        'about-compete-text': 'Робототехника мен бағдарламалау жарыстарына қатысып, дағдыларыңызды көрсетіп, мойындау алыңыз.',
        
        // Courses section
        'courses-title': 'Біздің Курстар',
        'courses-subtitle': 'Біздің мамандандырылған курстарымызбен технологиялар әлемін ашыңыз.',
        
        // Footer
        'footer-tagline': 'Технологиялар болашақпен кездесетін жер.',
        'footer-links': 'ПАЙДАЛЫ СІЛТЕМЕЛЕР',
        'footer-contact': 'БІЗБЕН БАЙЛАНЫСУ',
        'footer-social': 'ӘЛЕУМЕТТІК ЖЕЛІЛЕРДЕ',
        'footer-courses': 'Курстар',
        'footer-privacy': 'Құпиялылық саясаты',
        'footer-refund': 'Қайтару және бас тарту',
        'footer-terms': 'Пайдалану шарттары'
    }
};

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        // Load saved language preference
        const savedLang = localStorage.getItem('preferred-language') || 'ru';
        languageSelect.value = savedLang;
        
        // Apply saved language
        if (savedLang !== 'ru') {
            switchLanguage(savedLang);
        }
        
        // Add event listener for language change
        languageSelect.addEventListener('change', function() {
            switchLanguage(this.value);
        });
    }
});

// Add translation attributes to elements (this would be added to HTML elements)
function addTranslationAttributes() {
    // This function would be called to add data-translate attributes to HTML elements
    // For now, we'll handle translations through direct text replacement
}
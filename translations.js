// Translations object
const translations = {
    fr: {
        nav: {
            home: "Home",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            certifications: "Certifications",
            contact: "Contact"
        },
        home: {
            available: "Disponible pour opportunités",
            description: "Data Scientist / Machine Learning Engineer avec une solide expérience en analytics de données, systèmes de décision et modélisation prédictive. Expérimenté dans la conception de pipelines de données, la préparation et l'analyse de datasets hétérogènes, l'ingénierie de features, et l'entraînement de modèles ML/DL. Passionné par la création de solutions intelligentes basées sur les données avec Python et les outils IA modernes.",
            status: "Étudiant en Ingénierie Télécommunications & Réseaux (Orientation Data Science) | ENIG | Ouvert aux rôles Data Science, Machine Learning ou AI Engineering. Remote ou hybride.",
            cvFr: "CV (FR)",
            resumeEn: "Resume (EN)"
        },
        experience: {
            title: "Expérience Professionnelle",
            projects: "Projets",
            pfe: "Projet de Fin d'Études : Assistant Virtuel basé sur l'IA",
            internship: "Stage d'Ingénierie",
            introInternship: "Stage d'Introduction"
        },
        education: {
            title: "Formation"
        },
        skills: {
            technical: "Compétences Techniques",
            soft: "Compétences Personnelles"
        },
        certifications: {
            title: "Certifications",
            download: "Télécharger le certificat"
        },
        contact: {
            title: "Contactez-moi",
            subtitle: "Une question ? Un projet ? N'hésitez pas à me contacter",
            email: "Email",
            phone: "Téléphone",
            location: "Localisation",
            name: "Votre nom",
            emailPlaceholder: "Votre email",
            subject: "Sujet",
            message: "Votre message",
            send: "Envoyer le message"
        }
    },
    en: {
        nav: {
            home: "Home",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            certifications: "Certifications",
            contact: "Contact"
        },
        home: {
            available: "Open to opportunities",
            description: "Data Scientist / Machine Learning Engineer with strong background in data analytics, decision-making systems and predictive modeling. Experienced in designing data pipelines, preparing and analyzing heterogeneous datasets, feature engineering, and training ML/DL models. Passionate about building intelligent data-driven solutions with Python and modern AI tools.",
            status: "Engineering Student in Telecommunications & Networks (Data Science Orientation) | ENIG | Open to Data Science, Machine Learning or AI Engineering roles. Remote or hybrid.",
            cvFr: "CV (FR)",
            resumeEn: "Resume (EN)"
        },
        experience: {
            title: "Professional Experience",
            projects: "Projects",
            pfe: "Final Year Project: AI-based Virtual Assistant",
            internship: "Engineering Internship",
            introInternship: "Introductory Internship"
        },
        education: {
            title: "Education"
        },
        skills: {
            technical: "Technical Skills",
            soft: "Soft Skills"
        },
        certifications: {
            title: "Certifications",
            download: "Download certificate"
        },
        contact: {
            title: "Contact Me",
            subtitle: "Have a question? A project? Feel free to contact me",
            email: "Email",
            phone: "Phone",
            location: "Location",
            name: "Your name",
            emailPlaceholder: "Your email",
            subject: "Subject",
            message: "Your message",
            send: "Send message"
        }
    }
};

// Get current language from localStorage or default to French
let currentLang = localStorage.getItem('portfolioLang') || 'fr';

// Function to translate text
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolioLang', lang);
    updatePageContent();
    updateLanguageSelector();
}

// Function to update page content
function updatePageContent() {
    // Update navigation
    document.querySelectorAll('[data-translate-nav]').forEach(el => {
        const key = el.getAttribute('data-translate-nav');
        el.textContent = t(`nav.${key}`);
    });

    // Update page-specific content
    const page = window.location.pathname.split('/').pop() || 'index.html';
    
    if (page === 'index.html' || page === '') {
        updateHomePage();
    } else if (page === 'experience.html') {
        updateExperiencePage();
    } else if (page === 'education.html') {
        updateEducationPage();
    } else if (page === 'skills.html') {
        updateSkillsPage();
    } else if (page === 'certifications.html') {
        updateCertificationsPage();
    } else if (page === 'contact.html') {
        updateContactPage();
    }
}

function updateHomePage() {
    const elements = {
        '[data-translate="home.available"]': t('home.available'),
        '[data-translate="home.description"]': t('home.description'),
        '[data-translate="home.status"]': t('home.status'),
        '[data-translate="home.cvFr"]': t('home.cvFr'),
        '[data-translate="home.resumeEn"]': t('home.resumeEn')
    };
    
    Object.entries(elements).forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    });
}

function updateExperiencePage() {
    const elements = {
        '[data-translate="experience.title"]': t('experience.title'),
        '[data-translate="experience.projects"]': t('experience.projects')
    };
    
    Object.entries(elements).forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    });
}

function updateEducationPage() {
    const el = document.querySelector('[data-translate="education.title"]');
    if (el) el.textContent = t('education.title');
}

function updateSkillsPage() {
    const elements = {
        '[data-translate="skills.technical"]': t('skills.technical'),
        '[data-translate="skills.soft"]': t('skills.soft')
    };
    
    Object.entries(elements).forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    });
}

function updateCertificationsPage() {
    const elements = {
        '[data-translate="certifications.title"]': t('certifications.title'),
        '[data-translate="certifications.download"]': t('certifications.download')
    };
    
    Object.entries(elements).forEach(([selector, text]) => {
        document.querySelectorAll(selector).forEach(el => {
            el.textContent = text;
        });
    });
}

function updateContactPage() {
    const elements = {
        '[data-translate="contact.title"]': t('contact.title'),
        '[data-translate="contact.subtitle"]': t('contact.subtitle'),
        '[data-translate="contact.email"]': t('contact.email'),
        '[data-translate="contact.phone"]': t('contact.phone'),
        '[data-translate="contact.location"]': t('contact.location'),
        '[data-translate="contact.name"]': t('contact.name'),
        '[data-translate="contact.emailPlaceholder"]': t('contact.emailPlaceholder'),
        '[data-translate="contact.subject"]': t('contact.subject'),
        '[data-translate="contact.message"]': t('contact.message'),
        '[data-translate="contact.send"]': t('contact.send')
    };
    
    Object.entries(elements).forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });
}

function updateLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = currentLang;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    updateLanguageSelector();
});

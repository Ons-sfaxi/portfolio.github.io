// Configuration du Portfolio
// Modifiez ces valeurs pour personnaliser votre portfolio

const portfolioConfig = {
    // Informations personnelles
    personal: {
        firstName: "Ons",
        lastName: "Sfaxi",
        title: "Développeur Full Stack & Créatif Digital",
        tagline: "Passionné par la création de solutions web innovantes et performantes. Je transforme les idées en expériences numériques exceptionnelles.",
        email: "contact@onssfaxi.com",
        phone: "+33 1 23 45 67 89",
        location: "Paris, France",
        profileImage: "ons.jpg"
    },

    // Liens sociaux
    social: {
        linkedin: "#",      // Remplacez par votre URL LinkedIn
        github: "#",        // Remplacez par votre URL GitHub
        twitter: "#",       // Remplacez par votre URL Twitter
        instagram: "#",     // Remplacez par votre URL Instagram
        email: "mailto:contact@onssfaxi.com"
    },

    // Section À propos
    about: {
        lead: "Je suis un professionnel passionné par le développement web et les technologies innovantes. Avec une approche méthodique et créative, je conçois et développe des applications web modernes qui répondent aux besoins spécifiques de chaque projet.",
        description: "Mon parcours m'a permis d'acquérir une solide expertise dans le développement full-stack, alliant compétences techniques et sens du design. Je suis constamment à l'affût des dernières tendances technologiques pour offrir des solutions à la pointe de l'innovation.",
        highlights: [
            {
                icon: "fas fa-code",
                title: "Développement",
                description: "Création d'applications web robustes et scalables"
            },
            {
                icon: "fas fa-palette",
                title: "Design",
                description: "Conception d'interfaces utilisateur intuitives et modernes"
            },
            {
                icon: "fas fa-rocket",
                title: "Innovation",
                description: "Recherche et intégration des meilleures pratiques"
            }
        ]
    },

    // Compétences
    skills: {
        frontend: [
            { name: "HTML5 / CSS3", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "React", level: 80 },
            { name: "Vue.js", level: 75 }
        ],
        backend: [
            { name: "Node.js", level: 85 },
            { name: "Python", level: 80 },
            { name: "PHP", level: 75 },
            { name: "Base de données", level: 80 }
        ],
        tools: ["Git", "Docker", "AWS", "Figma", "Agile", "Scrum", "CI/CD", "REST API"]
    },

    // Projets
    projects: [
        {
            title: "Application E-Commerce",
            description: "Plateforme e-commerce complète avec gestion de panier, paiement sécurisé et tableau de bord administrateur.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "#",
            githubUrl: "#",
            image: "" // Chemin vers l'image du projet
        },
        {
            title: "Dashboard Analytics",
            description: "Tableau de bord interactif pour visualiser et analyser des données en temps réel avec graphiques dynamiques.",
            technologies: ["Vue.js", "Python", "D3.js", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#",
            image: ""
        },
        {
            title: "Application Mobile",
            description: "Application mobile cross-platform avec synchronisation cloud et notifications push en temps réel.",
            technologies: ["React Native", "Firebase", "Redux", "API REST"],
            liveUrl: "#",
            githubUrl: "#",
            image: ""
        },
        {
            title: "Plateforme SaaS",
            description: "Solution SaaS complète avec authentification multi-tenant, facturation automatique et API robuste.",
            technologies: ["Next.js", "TypeScript", "Prisma", "AWS"],
            liveUrl: "#",
            githubUrl: "#",
            image: ""
        }
    ],

    // Expériences professionnelles
    experience: [
        {
            period: "2022 - Présent",
            title: "Développeur Full Stack Senior",
            company: "Nom de l'entreprise",
            description: [
                "Développement et maintenance d'applications web complexes",
                "Architecture et conception de solutions scalables",
                "Encadrement d'une équipe de développeurs juniors",
                "Optimisation des performances et amélioration de l'expérience utilisateur"
            ]
        },
        {
            period: "2020 - 2022",
            title: "Développeur Frontend",
            company: "Nom de l'entreprise",
            description: [
                "Développement d'interfaces utilisateur modernes et responsives",
                "Intégration d'APIs REST et GraphQL",
                "Collaboration avec les équipes design et backend",
                "Mise en place de tests unitaires et d'intégration"
            ]
        },
        {
            period: "2018 - 2020",
            title: "Développeur Web Junior",
            company: "Nom de l'entreprise",
            description: [
                "Développement de sites web et applications web",
                "Maintenance et débogage de code existant",
                "Apprentissage des meilleures pratiques de développement",
                "Participation aux réunions d'équipe et revues de code"
            ]
        }
    ],

    // Formations et certifications
    education: [
        {
            type: "degree", // "degree" ou "certification"
            period: "2016 - 2018",
            title: "Master en Informatique",
            institution: "Nom de l'université",
            description: "Spécialisation en développement web et technologies émergentes"
        },
        {
            type: "degree",
            period: "2014 - 2016",
            title: "Licence en Informatique",
            institution: "Nom de l'université",
            description: "Fondamentaux en programmation, algorithmes et structures de données"
        },
        {
            type: "certification",
            period: "2021",
            title: "AWS Certified Developer",
            institution: "Amazon Web Services",
            description: "Certification en développement d'applications cloud sur AWS"
        },
        {
            type: "certification",
            period: "2020",
            title: "React Developer Certification",
            institution: "Meta (Facebook)",
            description: "Certification officielle en développement React et écosystème moderne"
        }
    ]
};

// Export pour utilisation dans d'autres fichiers si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

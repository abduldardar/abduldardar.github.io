// Gestion du thème clair/sombre
const themeSwitcher = document.getElementById('theme-switcher');
const currentTheme = localStorage.getItem('theme') || 'light';

// Appliquer le thème sauvegardé
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

// Changer de thème au clic
themeSwitcher.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    themeSwitcher.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Affichage de la date et heure
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateTimeString = now.toLocaleDateString('fr-FR', options);
    document.getElementById('current-datetime').textContent = dateTimeString;
}

// Mettre à jour la date/heure immédiatement et toutes les minutes
updateDateTime();
setInterval(updateDateTime, 60000);

// Chargement des articles
async function loadArticles() {
    try {
        const response = await fetch('./data/articles.json');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des articles');
        }
        
        const data = await response.json();
        displayArticles(data.articles);
    } catch (error) {
        console.error('Erreur:', error);
        displayError('Impossible de charger les articles. Veuillez réessayer plus tard.');
    }
}

// Affichage des articles sur la page d'accueil
function displayArticles(articles) {
    const container = document.getElementById('articles-container');
    
    if (!articles || articles.length === 0) {
        container.innerHTML = '<p>Aucun article disponible pour le moment.</p>';
        return;
    }
    
    // Trier les articles par date (du plus récent au plus ancien)
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Prendre les 10 articles les plus récents pour l'accueil
    const recentArticles = articles.slice(0, 10);
    
    let html = '';
    
    recentArticles.forEach(article => {
        // Vérifier si l'image existe, sinon utiliser une image par défaut
        const imageUrl = article.url_image || './images/default-tech.jpg';
        
        html += `
            <article class="article-card">
                <div class="article-image-container">
                    <img src="${imageUrl}" alt="${article.titre}" class="article-image" onerror="this.src='./images/default-tech.jpg'">
                </div>
                <div class="article-content">
                    <div class="article-meta">
                        <span class="article-date">${formatDate(article.date)}</span>
                        <span class="article-source">${getSourceName(article.lien_source)}</span>
                    </div>
                    <h3 class="article-title">${article.titre}</h3>
                    <p class="article-summary">${article.resume}</p>
                    <a href="${article.lien_source}" target="_blank" class="article-link">Lire la source</a>
                </div>
            </article>
        `;
    });
    
    container.innerHTML = html;
}

// Formatage de la date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Extraction du nom de la source à partir de l'URL
function getSourceName(url) {
    try {
        const domain = new URL(url).hostname;
        return domain.replace('www.', '').split('.')[0];
    } catch (e) {
        return 'Source';
    }
}

// Affichage d'un message d'erreur
function displayError(message) {
    const container = document.getElementById('articles-container');
    container.innerHTML = `<p class="error-message">${message}</p>`;
}

// Charger les articles au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Ne charger les articles que sur la page d'accueil
    if (document.getElementById('articles-container')) {
        loadArticles();
    }
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validation basique
            if (!name || !email || !message) {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }
            
            // Simulation d'envoi (à remplacer par un véritable envoi)
            alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
            this.reset();
        });
    }
});
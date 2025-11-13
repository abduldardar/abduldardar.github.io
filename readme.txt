ZENYOTECH - SITE WEB "ON REGARDE DE PLUS PRÈS : L'IA GÉNÉRATIVE"

DESCRIPTION:
Site web vitrine présentant l'actualité et les innovations dans le domaine de 
l'intelligence artificielle générative et des modèles de langage (LLM).

STRUCTURE:
- index.html : Page d'accueil avec les 10 articles les plus récents
- archives.html : Liste de tous les articles précédents
- about.html : Présentation de l'association et de sa mission
- contact.html : Formulaire de contact
- style.css : Feuille de style principale
- script.js : Scripts JavaScript pour la fonctionnalité
- logo.svg : Logo de l'association
- favicon.ico : Icône du site
- data/articles.json : Fichier de données des articles

FONCTIONNALITÉS:
- Design responsive avec thème clair/sombre
- Affichage de la date et heure en temps réel
- Navigation fixe avec menu
- Articles affichés par ordre chronologique décroissant
- Images par défaut si chargement échoue
- Formulaire de contact fonctionnel

HÉBERGEMENT RECOMMANDÉ:

1. NETLIFY (Recommandé)
   - Déployez simplement en drag-droppant le dossier sur netlify.com
   - Domaine personnalisable
   - HTTPS automatique
   - Déploiements continus depuis GitHub

2. GITHUB PAGES
   - Créez un repository GitHub
   - Uploader tous les fichiers
   - Activer GitHub Pages dans les settings
   - Site accessible à l'adresse : username.github.io/repository-name

3. VERCEL
   - Similaire à Netlify
   - Importez depuis GitHub pour déploiement automatique

MISE À JOUR HEBDOMADAIRE:

Pour mettre à jour le contenu du site chaque semaine:

1. Exécutez le prompt IA suivant:
   "Analyse les sites d'information sur l'IA générative et technologies (OpenAI, Anthropic, 
   Mistral, DeepMind, Meta, Hugging Face, Mistral, Deepseek,...) associées résume en français 
   dans 7 articles 7 concept ou progrès de moins de six mois (~350 mots chacun, ton journalistique 
   neutre et clair, mise en page aérée), avec titre, date, résumé, source vérifiée, image libre 
   de droit (Unsplash/Pexels). Retourne la sortie en JSON au format prévu."

2. Récupérez le JSON généré et remplacez le contenu du fichier data/articles.json

3. Les 10 articles les plus récents s'afficheront automatiquement sur la page d'accueil
4. Tous les articles précédents resteront accessibles dans les archives

NOTES:
- Les images par défaut sont fournies pour le cas où les images distantes ne se chargent pas
- Le site est entièrement responsive et s'adapte aux mobiles et tablettes
- Le thème clair/sombre est sauvegardé localement dans le navigateur
- Tous les liens externes s'ouvrent dans un nouvel onglet

CONTACT:
Pour toute question ou problème technique, contactez: contact@zenyotech.org
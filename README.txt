On_regarde_de_plus_pres_IA_Generative - README

Contenu:
- index.html, archives.html, about.html, contact.html
- style.css, script.js
- logo.svg, favicon.ico
- /data/articles.json (format JSON prêt à l'import)
- /images (placeholder)

Hébergement:
- GitHub Pages: déposer le dossier sur une branche 'gh-pages' ou root, activer Pages.
- Netlify / Vercel: glisser-déposer ou connecter au repository, config par défaut.
- Assurez-vous que le serveur sert les fichiers statiques (fichiers .json et .svg).

Mise à jour IA:
- Le site charge /data/articles.json. Pour ajouter de nouveaux articles programatiquement:
  1) Générer un JSON respectant le schéma:
     {
      "articles": [
        {
          "titre":"...",
          "date":"YYYY-MM-DD",
          "resume":"...",
          "lien_source":"https://...",
          "url_image":"https://..."
        }
      ]
     }
  2) Remplacer /data/articles.json puis re-déployer (ou pousser via API).
  3) Le script script.js ajoutera automatiquement les articles sur la page d'accueil.

Prompt hebdomadaire (exécuter avec votre assistant IA favori):
-----
Donne les 5 actualités majeures de la semaine dans le domaine de l’IA générative et des modèles de langage (LLM).
Rédige un résumé clair et neutre (~300 mots par article) avec titre, date, résumé, source vérifiée (lien), et une image libre de droit (Unsplash/Pexels).
Retourne la sortie en JSON au format prévu.
-----

SEO & accessibilité:
- Balises meta: description, keywords, author incluses.
- Chaque article peut intégrer un JSON-LD NewsArticle (à ajouter si nécessaire).
- Images en lazy-loading pour performance.

Remarques:
- Vérifie toujours la réalité des informations: ce site référence des annonces officielles (OpenAI, Anthropic, Mistral, DeepMind, Hugging Face).
- Pour production, configurez CSP, HTTPS et un backend pour le formulaire de contact.

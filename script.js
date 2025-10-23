/* script.js - affiche date/heure et charge /data/articles.json pour construire la page */
function updateClock(){
  const el = document.getElementById('clock');
  if(!el) return;
  const now = new Date();
  el.textContent = now.toLocaleString();
}
setInterval(updateClock,1000);
updateClock();

async function loadArticles(selector='#articles-list'){
  try {
    const resp = await fetch('/data/articles.json', {cache:'no-store'});
    if(!resp.ok) throw new Error('Impossible de charger les articles');
    const data = await resp.json();
    const container = document.querySelector(selector);
    data.articles.forEach(a=>{
      const article = document.createElement('article');
      article.className='article';
      article.innerHTML = `
        <div class="aside-date"><div>${new Date(a.date).toLocaleDateString()}</div></div>
        <div style="flex:1">
          <div class="meta">Publié le ${a.date} — Source: <a href="${a.lien_source}" target="_blank" rel="noopener noreferrer">${a.lien_source}</a></div>
          <h2>${a.titre}</h2>
          <p>${a.resume}</p>
        </div>
        <img loading="lazy" src="${a.url_image}" alt="${a.titre}">
      `;
      container.appendChild(article);
    });
  } catch(e){
    console.error(e);
  }
}

document.addEventListener('DOMContentLoaded', ()=> loadArticles('#articles-list'));


function injectJSONLD(articles){
  try{
    const ld = {
      "@context":"https://schema.org",
      "@graph": articles.map(a => ({
        "@type":"NewsArticle",
        "headline": a.titre,
        "datePublished": a.date,
        "image": a.url_image,
        "author": {"@type":"Organization","name":"On regarde de plus près"},
        "publisher": {"@type":"Organization","name":"On regarde de plus près","logo":{"@type":"ImageObject","url":"/logo.svg"}},
        "mainEntityOfPage": {"@type":"WebPage","@id": window.location.href.split('#')[0]},
        "description": a.resume
      }))
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(ld, null, 2);
    document.head.appendChild(s);
  }catch(e){
    console.error('Erreur JSON-LD', e);
  }
}


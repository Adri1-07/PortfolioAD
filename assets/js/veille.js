const produits = [
    { titre: "29 septembre 2025", url: "https://www.lemondeinformatique.fr/actualites/lire-avec-granite-40-ibm-livre-des-llm-moins-gourmands-en-ressources-98086.html", imag: "https://images.itnewsinfo.com/lmi/articles/grande/000000104071.png" , description: "Avec Granite 4.0, IBM livre des LLM moins gourmands en ressources", resume: "IBM annonce Granite 4.0, une nouvelle génération de modèles de langage optimisés pour réduire considérablement la consommation de ressources. Ces modèles offrent des performances comparables aux LLM traditionnels tout en nécessitant moins de puissance de calcul et de mémoire, rendant l'IA plus accessible et durable pour les entreprises." },
    { titre: "19 septempbre 2025", url: "https://www.lemondeinformatique.fr/actualites/lire-plus-de-codage-assiste-par-l-ia-dans-visual-studio-2026-97913.html", imag: "https://images.itnewsinfo.com/lmi/articles/moyen/000000103833.png" , description: "Plus de codage assisté par l'IA dans Visual Studio 2026", resume: "Microsoft enrichit Visual Studio 2026 avec des fonctionnalités avancées de codage assisté par IA. Les développeurs bénéficient de suggestions de code plus pertinentes, d'une meilleure détection d'erreurs et d'une génération automatique de documentation. Ces améliorations visent à augmenter la productivité et la qualité du code produit." },
    { titre: "27 aout 2025", url: "https://www.lemondeinformatique.fr/actualites/lire-les-methodes-pour-duper-les-llm-se-multiplient-97692.html", imag: "https://images.itnewsinfo.com/lmi/articles/moyen/000000103502.png" , description: "Les méthodes pour duper les LLM se multiplient", resume: "Les chercheurs identifient de nouvelles techniques de manipulation des LLM, soulignant les vulnérabilités de ces systèmes. Les attaques par prompt injection et les techniques d'empoisonnement de données deviennent plus sophistiquées. Cette situation pousse les développeurs à renforcer les mécanismes de sécurité et de détection d'anomalies dans les modèles." },
    { titre: "08 aout 2025", url: "https://www.lemondeinformatique.fr/actualites/lire-avec-le-projet-ire-microsoft-cree-un-agent-ia-d-analyse-des-malwares-97613.html", imag: "https://images.itnewsinfo.com/lmi/articles/moyen/000000103386.png" , description: "Avec le projet Ire, Microsoft crée un agent IA d'analyse des malwares", resume: "Microsoft dévoile le projet Ire, un agent IA spécialisé dans l'analyse et la détection de malwares. Cet outil utilise des techniques d'apprentissage profond pour identifier les menaces zero-day et les comportements suspects. Il s'intègre aux solutions de sécurité existantes pour offrir une protection plus proactive contre les cyberattaques." },
  ];

  console.log(produits)

  // Sélectionne l'élément avec l'ID "listedupanier" pour insérer les produits
const listedupanier = document.getElementById("listedupanier");

// Parcourt le tableau de produits et génère des cartes Bootstrap pour chaque produit
produits.forEach(produit => {
  // Extrait le domaine de l'URL
  const urlObj = new URL(produit.url);
  const source = urlObj.hostname.replace('www.', '');
  
  // Crée une div de type "card" pour chaque produit
  const cardHTML = `
            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <a href="${produit.url}" class="portfolio-content h-100 d-block text-decoration-none">
                <img src="${produit.imag}" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>${produit.titre}</h4>
                  <p>${produit.description}</p>
                  <div class="resume-section">
                    <p class="resume-text">${produit.resume}</p>
                    <p class="source-text"><small>Source: ${source}</small></p>
                  </div>
                </div>
              </a>
            </div>
  `;
  
  // Ajoute la carte dans le conteneur "listedupanier"
  listedupanier.insertAdjacentHTML("beforeend", cardHTML);
});
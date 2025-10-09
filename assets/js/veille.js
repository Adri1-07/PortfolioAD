const produits = [
    { titre: "29 septembre 2025", url: "https://www.lemondeinformatique.fr/actualites/lire-avec-granite-40-ibm-livre-des-llm-moins-gourmands-en-ressources-98086.html", imag: "https://images.itnewsinfo.com/lmi/articles/grande/000000104071.png" , description: "Avec Granite 4.0, IBM livre des LLM moins gourmands en ressources"},
    { titre: "19 septempbre 2025", url: "https://www.lemondeinformatique.fr/actualites/lire-plus-de-codage-assiste-par-l-ia-dans-visual-studio-2026-97913.html", imag: "https://images.itnewsinfo.com/lmi/articles/moyen/000000103833.png" , description: "Plus de codage assisté par l'IA dans Visual Studio 2026" },
    { titre: "27 aout 2025", url: "https://www.lemondeinformatique.fr/actualites/lire-les-methodes-pour-duper-les-llm-se-multiplient-97692.html", imag: "https://images.itnewsinfo.com/lmi/articles/moyen/000000103502.png" , description: "Les méthodes pour duper les LLM se multiplient" },
    { titre: "08 aout 2025", url: "https://www.lemondeinformatique.fr/actualites/lire-avec-le-projet-ire-microsoft-cree-un-agent-ia-d-analyse-des-malwares-97613.html", imag: "https://images.itnewsinfo.com/lmi/articles/moyen/000000103386.png" , description: "Avec le projet Ire, Microsoft crée un agent IA d'analyse des malwares" },
  ];

  console.log(produits)

  // Sélectionne l'élément avec l'ID "listedupanier" pour insérer les produits
const listedupanier = document.getElementById("listedupanier");

// Parcourt le tableau de produits et génère des cartes Bootstrap pour chaque produit
produits.forEach(produit => {
  // Crée une div de type "card" pour chaque produit
  const cardHTML = `
            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <a href="${produit.url}" class="portfolio-content h-100 d-block text-decoration-none">
                <img src="${produit.imag}" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>${produit.titre}</h4>
                  <p>${produit.description}</p>
                </div>
              </a>
            </div>
  `;
  
  // Ajoute la carte dans le conteneur "listedupanier"
  listedupanier.insertAdjacentHTML("beforeend", cardHTML);
});
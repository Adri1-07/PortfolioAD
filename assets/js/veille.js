const produits = [
    { titre: "IA Grok", url: "https://x.ai/", imag: "https://www.ecranmobile.fr/photo/art/default/84187367-60150707.jpg?v=1731426672" , description: "Site officiel de Grok" },
    { titre: "IA GROK", url: "https://metricool.com/fr/ia-grok/", imag: "https://pic.clubic.com/579348482250053/1200x799/smart/x-sur-smartphone.webp" , description: "Comment stopper l’utilisation de vos données sur X ?" },
    { titre: "Grok 2", url: "https://www.sitew.com/intelligence-artificielle/grok2", imag: "https://siecledigital.fr/wp-content/uploads/2023/10/x-logo.jpg" , description: "Vous saurez tout sur le nouveau modèle d’xAI" },
    { titre: "Youtube", url: "https://www.youtube.com/watch?v=yGL916TIFZw", imag: "https://static.latribune.fr/full_width/2426970/elon-musk-et-mickey-mouse-trinquent.jpg" , description: "La nouvelle IA d’ Elon Musk qui brise les codes !." },
    { titre: "Le Twitter de Grok", url: "https://x.com/grok?lang=fr", imag: "https://pbs.twimg.com/profile_banners/1720665183188922368/1710702527/600x200" , description: "Le Twitter de Grok" }
  ];

  console.log(produits)

  // Sélectionne l'élément avec l'ID "listedupanier" pour insérer les produits
const listedupanier = document.getElementById("listedupanier");

// Parcourt le tableau de produits et génère des cartes Bootstrap pour chaque produit
produits.forEach(produit => {
  // Crée une div de type "card" pour chaque produit
  const cardHTML = `
            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img src="${produit.imag}" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>${produit.titre}</h4>
                  <p>${produit.description}</p>
                  <a href="${produit.url}" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
  `;
  
  // Ajoute la carte dans le conteneur "listedupanier"
  listedupanier.insertAdjacentHTML("beforeend", cardHTML);
});
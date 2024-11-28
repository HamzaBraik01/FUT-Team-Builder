/*document.addEventListener("DOMContentLoaded", () => {
    const allPlayersContainer = document.querySelector(".all-players");
  
    
    fetch("players.json")
    .then((response) => response.json())
    .then((data) => {
      const players = data.players; 
      displayAllPlayers(players);
    })
    .catch((error) => console.error("Erreur lors du chargement des joueurs :", error));
  
    
    function displayAllPlayers(players) {
      allPlayersContainer.innerHTML = "";
  
      
      const categories = groupByCategory(players);
  
      
      for (const category in categories) {
        
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");
  
        categoryContainer.innerHTML = `<h2 class="category-title">${category}</h2>`;
  
        
        const playerGrid = document.createElement("div");
        playerGrid.classList.add("player-grid");
  
        categories[category].forEach((player) => {
          const playerBadge = createPlayerBadge(player);
          playerGrid.appendChild(playerBadge);
        });
  
        categoryContainer.appendChild(playerGrid);
        allPlayersContainer.appendChild(categoryContainer);
      }
    }
  
    
    function groupByCategory(players) {
      return players.reduce((acc, player) => {
        if (!acc[player.position]) {
          acc[player.position] = [];
        }
        acc[player.position].push(player);
        return acc;
      }, {});
    }
  
    
function createPlayerBadge(player) {
    const playerBadge = document.createElement("div");
      playerBadge.classList.add("player-badge-gold");
  
      playerBadge.innerHTML = `
      <div class="badge">
          <img src="./img/badge_gold.webp" alt="Badge" class="badge-bg">
          <div class="player-info">
            <img src="${player.photo}" alt="${player.name}" class="player-photo">
            <h3 class="player-name">${player.name}</h3>
            <p class="player-position">${player.position}</p>
            <p class="player-club">
              <img src="${player.logo}" alt="${player.club}" class="club-logo">
              ${player.club}
            </p>
          </div>
        </div>
    
      `;
  
      return playerBadge;
    }
  });
*/

/*
// Récupération des éléments du DOM
const addPlayerBtn = document.getElementById('addPlayerBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const playerForm = document.getElementById('playerForm');

// Afficher le modal au clic du bouton
addPlayerBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fermer le modal au clic sur la croix
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Gestion du formulaire
playerForm.addEventListener('submit', (event) => {
  event.preventDefault();
    const newPlayer = {
        name: document.getElementById('name').value,
        photo: document.getElementById('photo').value,
        position: document.getElementById('position').value,
        rating: document.getElementById('rating').value,
    };

    console.log('Nouveau joueur ajouté:', newPlayer);

  // Réinitialise le formulaire
    playerForm.reset();
    modal.style.display = 'none';
});
*/

const addPlayerBtn = document.getElementById('addPlayerBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const positionSelect = document.getElementById('position');
const dynamicFields = document.getElementById('dynamicFields');

addPlayerBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

positionSelect.addEventListener('change', () => {
    const position = positionSelect.value;
    dynamicFields.innerHTML = ''; // Réinitialise les champs

    if (position === 'GK') {
    dynamicFields.innerHTML = `
        <div class="form-group">
            <label for="diving">Diving :</label>
            <input type="number" id="diving" name="diving" placeholder="Entrez la note de plonger" required>

            <label for="handling">Handling :</label>
            <input type="number" id="handling" name="handling" placeholder="Entrez la note de maniement" required>
        </div>
        <div class="form-group">
            <label for="kicking">Kicking :</label>
            <input type="number" id="kicking" name="kicking" placeholder="Entrez la note de dégagement" required>

            <label for="reflexes">Reflexes :</label>
            <input type="number" id="reflexes" name="reflexes" placeholder="Entrez la note des réflexes" required>
        </div>
        <div class="form-group">
            <label for="speed">Speed :</label>
            <input type="number" id="speed" name="speed" placeholder="Entrez la note de vitesse" required>

            <label for="positioning">Positioning :</label>
            <input type="number" id="positioning" name="positioning" placeholder="Entrez la note de positionnement" required>
        </div>
    `;
} else {
    dynamicFields.innerHTML = `
        <div class="form-group">
            <label for="pace">Pace :</label>
            <input type="number" id="pace" name="pace" placeholder="Entrez la note de vitesse" required>

            <label for="shooting">Shooting :</label>
            <input type="number" id="shooting" name="shooting" placeholder="Entrez la note de tir" required>
        </div>
        <div class="form-group">
            <label for="passing">Passing :</label>
            <input type="number" id="passing" name="passing" placeholder="Entrez la note de passe" required>

            <label for="dribbling">Dribbling :</label>
            <input type="number" id="dribbling" name="dribbling" placeholder="Entrez la note de dribble" required>
        </div>
        <div class="form-group">
            <label for="defending">Defending :</label>
            <input type="number" id="defending" name="defending" placeholder="Entrez la note de défense" required>

            <label for="physical">Physical :</label>
            <input type="number" id="physical" name="physical" placeholder="Entrez la note de physique" required>
        </div>
    `;
}

});


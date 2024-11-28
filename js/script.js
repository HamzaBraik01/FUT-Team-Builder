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

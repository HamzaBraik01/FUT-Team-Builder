const modal = document.getElementById('modal');
const editModal = document.getElementById('editModal');
const addPlayerBtn = document.getElementById('addPlayerBtn');
const closeModalBtn = document.getElementById('closeModal');
const closeModalBtn2 = document.getElementById('closeEditModal');
const playerForm = document.getElementById('playerForm');
const playerForm2 = document.getElementById('editPlayerForm');
const positionSelect = document.getElementById('position');
const editPosition = document.getElementById('editPosition');
const dynamicFields = document.getElementById('dynamicFields');
const dynamicFieldsEdit = document.getElementById('dynamicFieldsEdit');
let players = []; 
let playerId = 1; 
let selectedCard ;
let playerIdCounter = 1;
const editPlayerForm = document.getElementById('editPlayerForm');
document.getElementById('menuToggle').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});
addPlayerBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.getElementById('addButtonmodel').style.display = 'block'; 
});
closeModalBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    modal.style.display = 'none';
    playerForm.reset();
});
closeModalBtn2.addEventListener('click', (event) => {
    event.preventDefault(); 
    editModal.style.display = 'none';
    playerForm2.reset();
});
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

positionSelect.addEventListener('change', () => {
    const selectedPosition = positionSelect.value;
    
    if (selectedPosition === 'GK') {
        dynamicFields.innerHTML = `
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="diving" class="block text-sm font-medium text-gray-700">Diving :</label>
                    <input type="number" id="diving" name="diving" placeholder="Entrez la note de plonger"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="handling" class="block text-sm font-medium text-gray-700">Handling :</label>
                    <input type="number" id="handling" name="handling" placeholder="Entrez la note de maniement"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="kicking" class="block text-sm font-medium text-gray-700">Kicking :</label>
                    <input type="number" id="kicking" name="kicking" placeholder="Entrez la note de dégagement"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="reflexes" class="block text-sm font-medium text-gray-700">Reflexes :</label>
                    <input type="number" id="reflexes" name="reflexes" placeholder="Entrez la note des réflexes"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="speed" class="block text-sm font-medium text-gray-700">Speed :</label>
                    <input type="number" id="speed" name="speed" placeholder="Entrez la note de vitesse"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="positioning" class="block text-sm font-medium text-gray-700">Positioning :</label>
                    <input type="number" id="positioning" name="positioning" placeholder="Entrez la note de positionnement"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
        `;
    } else if (selectedPosition === 'PO') {
        dynamicFields.innerHTML = ``;
    } else {
        dynamicFields.innerHTML = `
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="pace" class="block text-sm font-medium text-gray-700">Pace :</label>
                    <input type="number" id="pace" name="pace" placeholder="Entrez la note de vitesse"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="shooting" class="block text-sm font-medium text-gray-700">Shooting :</label>
                    <input type="number" id="shooting" name="shooting" placeholder="Entrez la note de tir"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="passing" class="block text-sm font-medium text-gray-700">Passing :</label>
                    <input type="number" id="passing" name="passing" placeholder="Entrez la note de passe"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="dribbling" class="block text-sm font-medium text-gray-700">Dribbling :</label>
                    <input type="number" id="dribbling" name="dribbling" placeholder="Entrez la note de dribble"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="defending" class="block text-sm font-medium text-gray-700">Defending :</label>
                    <input type="number" id="defending" name="defending" placeholder="Entrez la note de défense"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="physical" class="block text-sm font-medium text-gray-700">Physical :</label>
                    <input type="number" id="physical" name="physical" placeholder="Entrez la note de physique"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
        `;
    }
});


editPosition.addEventListener('change', () => {
    const selectedPosition = editPosition.value;
    
    if (selectedPosition === 'GK') {
        dynamicFieldsEdit.innerHTML = `
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="diving" class="block text-sm font-medium text-gray-700">Diving :</label>
                    <input type="number" id="divingE" name="diving" placeholder="Entrez la note de plonger"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="handling" class="block text-sm font-medium text-gray-700">Handling :</label>
                    <input type="number" id="handlingE" name="handling" placeholder="Entrez la note de maniement"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="kicking" class="block text-sm font-medium text-gray-700">Kicking :</label>
                    <input type="number" id="kickingE" name="kicking" placeholder="Entrez la note de dégagement"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="reflexes" class="block text-sm font-medium text-gray-700">Reflexes :</label>
                    <input type="number" id="reflexesE" name="reflexes" placeholder="Entrez la note des réflexes"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="speed" class="block text-sm font-medium text-gray-700">Speed :</label>
                    <input type="number" id="speedE" name="speed" placeholder="Entrez la note de vitesse"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="positioning" class="block text-sm font-medium text-gray-700">Positioning :</label>
                    <input type="number" id="positioningE" name="positioning" placeholder="Entrez la note de positionnement"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
        `;
    } else if (selectedPosition === 'PO') {
        dynamicFieldsEdit.innerHTML = ``;
    } else {
        dynamicFieldsEdit.innerHTML = `
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="pace" class="block text-sm font-medium text-gray-700">Pace :</label>
                    <input type="number" id="paceE" name="pace" placeholder="Entrez la note de vitesse"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="shooting" class="block text-sm font-medium text-gray-700">Shooting :</label>
                    <input type="number" id="shootingE" name="shooting" placeholder="Entrez la note de tir"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="passing" class="block text-sm font-medium text-gray-700">Passing :</label>
                    <input type="number" id="passingE" name="passing" placeholder="Entrez la note de passe"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="dribbling" class="block text-sm font-medium text-gray-700">Dribbling :</label>
                    <input type="number" id="dribblingE" name="dribbling" placeholder="Entrez la note de dribble"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
            <div class="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="defending" class="block text-sm font-medium text-gray-700">Defending :</label>
                    <input type="number" id="defendingE" name="defending" placeholder="Entrez la note de défense"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
                <div>
                    <label for="physical" class="block text-sm font-medium text-gray-700">Physical :</label>
                    <input type="number" id="physicalE" name="physical" placeholder="Entrez la note de physique"
                        class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300">
                </div>
            </div>
        `;
    }
});

playerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedPosition = positionSelect.value;
    const playerName = document.getElementById('name').value; 
    const playerPhoto = document.getElementById('photo').value; 
    const playerNationality = document.getElementById('nationality').value; 
    const playerFlag = document.getElementById('flag').value; 
    const playerClub = document.getElementById('club').value; 
    const playerLogo = document.getElementById('logo').value; 
    const playerRating = document.getElementById('rating').value; 
    let newPlayer = {
        id: playerId++, 
        name: playerName,
        photo: playerPhoto,
        position: selectedPosition,
        nationality: playerNationality,
        flag: playerFlag,
        club: playerClub,
        logo: playerLogo,
        rating: playerRating,
    };
    if (selectedPosition === 'GK') {
        newPlayer.diving = document.getElementById('diving').value;
        newPlayer.handling = document.getElementById('handling').value;
        newPlayer.kicking = document.getElementById('kicking').value;
        newPlayer.reflexes = document.getElementById('reflexes').value;
        newPlayer.speed = document.getElementById('speed').value;
        newPlayer.positioning = document.getElementById('positioning').value;
    } else {
        newPlayer.pace = document.getElementById('pace').value;
        newPlayer.shooting = document.getElementById('shooting').value;
        newPlayer.passing = document.getElementById('passing').value;
        newPlayer.dribbling = document.getElementById('dribbling').value;
        newPlayer.defending = document.getElementById('defending').value;
        newPlayer.physical = document.getElementById('physical').value;
    }
    players.push(newPlayer); 
    console.log(players); 
    createPlayerCard(newPlayer);
    playerForm.reset(); 
    modal.style.display = 'none'; 
});
const container = document.querySelector('.Conteneur-card');

function createPlayerCard(player) {
    const playerId = `player-${playerIdCounter++}`;
    const playerCard = document.createElement('div');
    playerCard.classList.add('relative', 'bg-gradient-to-r' , 'from-sky-500' , 'to-indigo-500', 
        'rounded-lg', 'shadow-lg', 'overflow-hidden', 'p-4', 
        'flex', 'flex-col', 'items-center', 'group', 'w-60', 
        'hover:shadow-xl', 'transition-transform', 'duration-300', 'transform', 
        'hover:-translate-y-2', 'm-4');
    playerCard.id = playerId;
    playerCard.innerHTML = `
        <div class="flex justify-between w-full">
            <span class="text-lg font-bold text-stone-50">${player.position}</span>
            <span class="text-lg font-bold text-yellow-500">${player.rating}</span>
        </div>
        <img src="${player.photo}" alt="${player.name}" class="w-26 h-26 rounded-full border-2 border-gray-300 my-4">
        <h2 class="text-xl font-semibold text-center text-gray-900">${player.name}</h2>
        <div class="flex items-center my-2">
            <img src="${player.flag}" alt="Flag" class="w-6 h-4 mr-2">
            <img src="${player.logo}" alt="Club" class="w-8 h-8">
        </div>
        ${
            player.position === 'GK'
            ? `
            <div class="grid grid-cols-2 gap-2 mt-4">
                <div class="text-sm font-medium text-gray-700">DIV: <span class="font-bold text-stone-50">${player.diving}</span></div>
                <div class="text-sm font-medium text-gray-700">HAN: <span class="font-bold text-stone-50">${player.handling}</span></div>
                <div class="text-sm font-medium text-gray-700">KIC: <span class="font-bold text-stone-50">${player.kicking}</span></div>
                <div class="text-sm font-medium text-gray-700">REF: <span class="font-bold text-stone-50">${player.reflexes}</span></div>
                <div class="text-sm font-medium text-gray-700">SPE: <span class="font-bold text-stone-50">${player.speed}</span></div>
                <div class="text-sm font-medium text-gray-700">POS: <span class="font-bold text-stone-50">${player.positioning}</span></div>
            </div>
            `
            : `
            <div class="grid grid-cols-2 gap-2 mt-4">
                <div class="text-sm font-medium text-gray-700">PAC: <span class="font-bold text-stone-50">${player.pace}</span></div>
                <div class="text-sm font-medium text-gray-700">SHO: <span class="font-bold text-stone-50">${player.shooting}</span></div>
                <div class="text-sm font-medium text-gray-700">PAS: <span class="font-bold text-stone-50">${player.passing}</span></div>
                <div class="text-sm font-medium text-gray-700">DRI: <span class="font-bold text-stone-50">${player.dribbling}</span></div>
                <div class="text-sm font-medium text-gray-700">DEF: <span class="font-bold text-stone-50">${player.defending}</span></div>
                <div class="text-sm font-medium text-gray-700">PHY: <span class="font-bold text-stone-50">${player.physical}</span></div>
            </div>
            `
        }
        <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2 group-hover:bg-gray-800 transition duration-300">
            <button 
                class="bg-green-500 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 add-player"
            >
                + Ajouter
            </button>
            <button 
                class="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 edit-player"
            >
                Modifier
            </button>
        </div>

    `;
    const editbutton =playerCard.querySelector('.edit-player');
    editbutton.addEventListener('click', () => {
        showEditModal(player);
    });
    const addButton = playerCard.querySelector('.add-player');
    addButton.addEventListener('click', () => {
        const playerBadge = document.querySelector(`.player-badge.${player.position}`);

    
        if (playerBadge) {
            playerBadge.innerHTML = `
                <div class="relative bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow-md overflow-hidden p-2 w-full h-full flex flex-col items-center">
                    <!-- Close Button -->
                    <button class="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 remove-player">
                        &times;
                    </button>
                    <!-- Header: Position and Rating -->
                    <div class="flex justify-between w-full text-xs">
                        <span class="font-bold text-stone-50">${player.position}</span>
                        <span class="font-bold text-yellow-400">${player.rating}</span>
                    </div>
    
                    <!-- Player Photo -->
                    <img src="${player.photo}" alt="${player.name}" class="w-12 h-12 rounded-full border border-gray-300 my-2">
    
                    <!-- Player Name -->
                    <h2 class="text-xs font-semibold text-center text-gray-900">${player.name}</h2>
    
                    <!-- Flag and Club Logo -->
                    <div class="flex items-center my-1">
                        <img src="${player.flag}" alt="Flag" class="w-4 h-3 mr-1">
                        <img src="${player.logo}" alt="Club" class="w-6 h-6">
                    </div>
    
                    <!-- Stats -->
                    ${
                        player.position === 'GK'
                        ? `
                        <div class="grid grid-cols-2 gap-1 mt-2 text-[10px]">
                            <div class="font-medium text-gray-700">DIV: <span class="font-bold text-stone-50">${player.diving}</span></div>
                            <div class="font-medium text-gray-700">HAN: <span class="font-bold text-stone-50">${player.handling}</span></div>
                            <div class="font-medium text-gray-700">KIC: <span class="font-bold text-stone-50">${player.kicking}</span></div>
                            <div class="font-medium text-gray-700">REF: <span class="font-bold text-stone-50">${player.reflexes}</span></div>
                            <div class="font-medium text-gray-700">SPE: <span class="font-bold text-stone-50">${player.speed}</span></div>
                            <div class="font-medium text-gray-700">POS: <span class="font-bold text-stone-50">${player.positioning}</span></div>
                        </div>
                        `
                        : `
                        <div class="grid grid-cols-2 gap-1 mt-2 text-[10px]">
                            <div class="font-medium text-gray-700">PAC: <span class="font-bold text-stone-50">${player.pace}</span></div>
                            <div class="font-medium text-gray-700">SHO: <span class="font-bold text-stone-50">${player.shooting}</span></div>
                            <div class="font-medium text-gray-700">PAS: <span class="font-bold text-stone-50">${player.passing}</span></div>
                            <div class="font-medium text-gray-700">DRI: <span class="font-bold text-stone-50">${player.dribbling}</span></div>
                            <div class="font-medium text-gray-700">DEF: <span class="font-bold text-stone-50">${player.defending}</span></div>
                            <div class="font-medium text-gray-700">PHY: <span class="font-bold text-stone-50">${player.physical}</span></div>
                        </div>
                        `
                    }
                </div>
            `;
            const badgeContainer = playerBadge.querySelector('.relative');
            badgeContainer.addEventListener('mouseover', () => {
                const removeButton = badgeContainer.querySelector('.remove-player');
                removeButton.style.opacity = '1';
            });
            badgeContainer.addEventListener('mouseout', () => {
                const removeButton = badgeContainer.querySelector('.remove-player');
                removeButton.style.opacity = '0';
            });
    
            // Remove player on "X" click
            const removeButton = playerBadge.querySelector('.remove-player');
            removeButton.addEventListener('click', () => {
                playerBadge.innerHTML = `
                    <button class="player-button">
                        <img src="./img/iconplus.png" alt="Add Player" class="add-icon">
                    </button>
                `;
                addButton.disabled = false;
                addButton.textContent = '+ Ajouter';
                const addIcon = playerBadge.querySelector('.player-button');
                addIcon.addEventListener('click', () => {
                    addButton.click(); 
                });
            });
            addButton.disabled = true;
            addButton.textContent = 'Ajouté';
        }
    });
    container.appendChild(playerCard); 
}

function showEditModal(player) {
    editModal.style.display = 'block';
    document.getElementById('editName').value = player.name;
    document.getElementById('editPhoto').value = player.photo;
    document.getElementById('editNationality').value = player.nationality;
    document.getElementById('editFlag').value = player.flag;
    document.getElementById('editClub').value = player.club;
    document.getElementById('editLogo').value = player.logo;
    document.getElementById('editRating').value = player.rating;

    const editPositionElement = document.getElementById('editPosition');
    editPositionElement.value = player.position;
    editPositionElement.dispatchEvent(new Event('change'));
    if (player.position === 'GK') {
        document.getElementById('divingE').value = player.diving;
        document.getElementById('handlingE').value = player.handling;
        document.getElementById('kickingE').value = player.kicking;
        document.getElementById('reflexesE').value = player.reflexes;
        document.getElementById('peedE').value = player.speed;
        document.getElementById('positioningE').value = player.positioning;
        
    } else {
        document.getElementById('paceE').value = player.pace;
        document.getElementById('shootingE').value = player.shooting;
        document.getElementById('passingE').value = player.passing;
        document.getElementById('dribblingE').value = player.dribbling;
        document.getElementById('defendingE').value = player.defending;
        document.getElementById('physicalE').value = player.physical;
        
    }
}



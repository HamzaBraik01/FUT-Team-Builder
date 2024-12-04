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
let playerIdCounter = 0;
const nameRegex = /^[a-zA-Z\s]+$/; 
const urlRegex =  /^https:\/\//;
const numberRangeRegex = /^(0|[1-9][0-9]?)$/;
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

    
    if (!validateInput(playerName, nameRegex)) {
        alert("Le nom doit contenir uniquement des lettres et espaces.");
        return;
    }
    if (!validateInput(playerPhoto, urlRegex)) {
        alert("La photo doit être une URL commençant par 'https://'.");
        return;
    }
    if (!validateInput(playerFlag, urlRegex)) {
        alert("Le drapeau doit être une URL commençant par 'https://'.");
        return;
    }
    if (!validateInput(playerLogo, urlRegex)) {
        alert("Le logo du club doit être une URL commençant par 'https://'.");
        return;
    }
    if (!validateInput(playerRating, numberRangeRegex)) {
        alert("La note doit être un nombre entre 0 et 99.");
        return;
    }

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
        const diving = document.getElementById('diving').value;
        const handling = document.getElementById('handling').value;
        const kicking = document.getElementById('kicking').value;
        const reflexes = document.getElementById('reflexes').value;
        const speed = document.getElementById('speed').value;
        const positioning = document.getElementById('positioning').value;

        if (
            ![diving, handling, kicking, reflexes, speed, positioning].every((value) =>
                validateInput(value, numberRangeRegex)
            )
        ) {
            alert("Les attributs du gardien doivent être entre 0 et 99.");
            return;
        }

        newPlayer.diving = diving;
        newPlayer.handling = handling;
        newPlayer.kicking = kicking;
        newPlayer.reflexes = reflexes;
        newPlayer.speed = speed;
        newPlayer.positioning = positioning;
    } else {
        const pace = document.getElementById('pace').value;
        const shooting = document.getElementById('shooting').value;
        const passing = document.getElementById('passing').value;
        const dribbling = document.getElementById('dribbling').value;
        const defending = document.getElementById('defending').value;
        const physical = document.getElementById('physical').value;

        if (
            ![pace, shooting, passing, dribbling, defending, physical].every((value) =>
                validateInput(value, numberRangeRegex)
            )
        ) {
            alert("Les attributs du joueur doivent être entre 0 et 99.");
            return;
        }

        newPlayer.pace = pace;
        newPlayer.shooting = shooting;
        newPlayer.passing = passing;
        newPlayer.dribbling = dribbling;
        newPlayer.defending = defending;
        newPlayer.physical = physical;
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
    playerCard.classList.add(
        'relative', 
        'bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 
        'rounded-lg', 'shadow-lg', 'overflow-hidden', 
        'p-3', 'flex', 'flex-col', 'items-center', 'group', 
        'w-36', 
        'sm:w-40', 'md:w-48', 'lg:w-56', 
        'hover:shadow-xl', 'transition-transform', 'duration-300', 
        'transform', 'hover:-translate-y-1', 'm-3' 
    );
    playerCard.id = playerId;

    playerCard.innerHTML = `
        <div class="flex justify-between w-full">
            <span class="text-xs sm:text-sm md:text-base font-bold text-stone-50">${player.position}</span>
            <span class="text-xs sm:text-sm md:text-base font-bold text-yellow-500">${player.rating}</span>
        </div>
        <img 
            src="${player.photo}" 
            alt="${player.name}" 
            class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-300 my-3" 
        >
        <h2 class="text-xs sm:text-sm md:text-lg font-semibold text-center text-gray-900">${player.name}</h2>
        <div class="flex items-center my-1">
            <img src="${player.flag}" alt="Flag" class="w-4 h-3 sm:w-5 sm:h-4 mr-1">
            <img src="${player.logo}" alt="Club" class="w-5 h-5 sm:w-6 sm:h-6">
        </div>
        <div class="grid grid-cols-2 gap-1 mt-2 text-[10px]">
            ${player.position === 'GK' ? `
                <div class="font-medium text-gray-700">DIV: <span class="font-bold text-stone-50">${player.diving}</span></div>
                <div class="font-medium text-gray-700">HAN: <span class="font-bold text-stone-50">${player.handling}</span></div>
                <div class="font-medium text-gray-700">KIC: <span class="font-bold text-stone-50">${player.kicking}</span></div>
                <div class="font-medium text-gray-700">REF: <span class="font-bold text-stone-50">${player.reflexes}</span></div>
                <div class="font-medium text-gray-700">SPE: <span class="font-bold text-stone-50">${player.speed}</span></div>
                <div class="font-medium text-gray-700">POS: <span class="font-bold text-stone-50">${player.positioning}</span></div>
            ` : `
                <div class="font-medium text-gray-700">PAC: <span class="font-bold text-stone-50">${player.pace}</span></div>
                <div class="font-medium text-gray-700">SHO: <span class="font-bold text-stone-50">${player.shooting}</span></div>
                <div class="font-medium text-gray-700">PAS: <span class="font-bold text-stone-50">${player.passing}</span></div>
                <div class="font-medium text-gray-700">DRI: <span class="font-bold text-stone-50">${player.dribbling}</span></div>
                <div class="font-medium text-gray-700">DEF: <span class="font-bold text-stone-50">${player.defending}</span></div>
                <div class="font-medium text-gray-700">PHY: <span class="font-bold text-stone-50">${player.physical}</span></div>
            `}
        </div>
        <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-1 group-hover:bg-gray-800 transition duration-300">
            <button 
                class="bg-green-500 text-white text-xs md:text-sm font-semibold py-1 px-1 md:py-2 md:px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 add-player"
            >
                + Ajouter
            </button>
            <button 
                class="bg-blue-500 text-white text-xs md:text-sm font-semibold py-1 px-1 md:py-2 md:px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 edit-player" 
                
            >
                Modifier
            </button>
        </div>
    `;
    const editbutton = playerCard.querySelector('.edit-player');
    editbutton.addEventListener('click', () => {
        showEditModal(player, playerCard, playerId);
    });
    const addButton = playerCard.querySelector('.add-player');
    addButton.addEventListener('click', () => {
        const playerBadge = document.querySelector(`.player-badge.${player.position}`);

    
        if (playerBadge) {
            playerBadge.innerHTML = `
            <div class="relative bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow-md overflow-hidden p-1 w-full h-full flex flex-col items-center">
                <!-- Close Button -->
                <button class="absolute top-1 right-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 remove-player">
                    &times;
                </button>
                <!-- Header: Position and Rating -->
                <div class="flex justify-between w-full text-xs sm:text-sm">
                    <span class="font-bold text-stone-50">${player.position}</span>
                    <span class="font-bold text-yellow-400">${player.rating}</span>
                </div>

                <!-- Player Photo -->
                <img src="${player.photo}" alt="${player.name}" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 my-1">

                <!-- Player Name -->
                <h2 class="text-xs sm:text-sm font-semibold text-center text-gray-900">${player.name}</h2>

                <!-- Flag and Club Logo -->
                <div class="flex items-center my-1">
                    <img src="${player.flag}" alt="Flag" class="w-4 h-3 mr-1">
                    <img src="${player.logo}" alt="Club" class="w-5 h-5">
                </div>

                <!-- Stats -->
                ${
                    player.position === 'GK'
                    ? `
                    <div class="grid grid-cols-2 gap-1 mt-1 text-[9px] sm:text-xs">
                        <div class="font-medium text-gray-700">DIV: <span class="font-bold text-stone-50">${player.diving}</span></div>
                        <div class="font-medium text-gray-700">HAN: <span class="font-bold text-stone-50">${player.handling}</span></div>
                        <div class="font-medium text-gray-700">KIC: <span class="font-bold text-stone-50">${player.kicking}</span></div>
                        <div class="font-medium text-gray-700">REF: <span class="font-bold text-stone-50">${player.reflexes}</span></div>
                        <div class="font-medium text-gray-700">SPE: <span class="font-bold text-stone-50">${player.speed}</span></div>
                        <div class="font-medium text-gray-700">POS: <span class="font-bold text-stone-50">${player.positioning}</span></div>
                    </div>
                    `
                    : `
                    <div class="grid grid-cols-2 gap-1 mt-1 text-[9px] sm:text-xs">
                        <div class="font-medium text-gray-700">PAC: <span class="font-bold text-stone-50">${player.pace}</span></div>
                        <div class="font-medium text-gray-700">SHO: <span class="font-bold text-stone-50">${player.shooting}</span></div>
                        <div class="font-medium text-gray-700">PAS: <span class="font-bold text-stone-50">${player.passing}</span></div>
                        <div class="font-medium text-gray-700">DRI: <span class="font-bold text-stone-50">${player.dribbling}</span></div>
                        <div class="font-medium text-gray-700">DEF: <span class="font-bold text-stone-50">${player.defending}</span></div>
                        <div class="font-medium text-gray-700">PHY: <span class="font-bold text-stone-50">${player.physical}</span></div>
                    </div>
                    `
                }
            </div>`;
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

function showEditModal(player, playerCard, playerIndex) {
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
    let donebtn = editModal.querySelector('#editButton');
    donebtn.addEventListener('click',function(event){
            event.preventDefault();


    const selectedPosition = editPositionElement.value; 
    const playerName = document.getElementById('editName').value; 
    const playerPhoto = document.getElementById('editPhoto').value; 
    const playerNationality = document.getElementById('editNationality').value; 
    const playerFlag = document.getElementById('editFlag').value; 
    const playerClub = document.getElementById('editClub').value; 
    const playerLogo = document.getElementById('editLogo').value; 
    const playerRating = document.getElementById('editRating').value; 
    let updatedPlayer = {
        id: player.id, 
        name: playerName,
        photo: playerPhoto,
        position: selectedPosition,
        nationality: playerNationality,
        flag: playerFlag,
        club: playerClub,
        logo: playerLogo,
        rating: playerRating,
    };

    // Add the stats based on position
    if (selectedPosition === 'GK') {
        updatedPlayer.diving = document.getElementById('divingE').value;
        updatedPlayer.handling = document.getElementById('handlingE').value;
        updatedPlayer.kicking = document.getElementById('kickingE').value;
        updatedPlayer.reflexes = document.getElementById('reflexesE').value;
        updatedPlayer.speed = document.getElementById('speedE').value;
        updatedPlayer.positioning = document.getElementById('positioningE').value;
    } else {
        updatedPlayer.pace = document.getElementById('paceE').value;
        updatedPlayer.shooting = document.getElementById('shootingE').value;
        updatedPlayer.passing = document.getElementById('passingE').value;
        updatedPlayer.dribbling = document.getElementById('dribblingE').value;
        updatedPlayer.defending = document.getElementById('defendingE').value;
        updatedPlayer.physical = document.getElementById('physicalE').value;
    }
    players[playerIndex - 1] = updatedPlayer; 
    players = players.map(p => p.id === playerId ? updatedPlayer : p);
    console.log(players); 
    playerCard.innerHTML = generatePlayerCardHTML(updatedPlayer)
    editModal.style.display = 'none'; 


    })
}

function generatePlayerCardHTML(player) {
    return `
        <div class="flex justify-between w-full">
            <span class="text-xs sm:text-sm md:text-base font-bold text-stone-50">${player.position}</span>
            <span class="text-xs sm:text-sm md:text-base font-bold text-yellow-500">${player.rating}</span>
        </div>
        <img 
            src="${player.photo}" 
            alt="${player.name}" 
            class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-300 my-3" 
        >
        <h2 class="text-xs sm:text-sm md:text-lg font-semibold text-center text-gray-900">${player.name}</h2>
        <div class="flex items-center my-1">
            <img src="${player.flag}" alt="Flag" class="w-4 h-3 sm:w-5 sm:h-4 mr-1">
            <img src="${player.logo}" alt="Club" class="w-5 h-5 sm:w-6 sm:h-6">
        </div>
        <div class="grid grid-cols-2 gap-1 mt-2 text-[10px]">
            ${player.position === 'GK' ? `
                <div class="font-medium text-gray-700">DIV: <span class="font-bold text-stone-50">${player.diving}</span></div>
                <div class="font-medium text-gray-700">HAN: <span class="font-bold text-stone-50">${player.handling}</span></div>
                <div class="font-medium text-gray-700">KIC: <span class="font-bold text-stone-50">${player.kicking}</span></div>
                <div class="font-medium text-gray-700">REF: <span class="font-bold text-stone-50">${player.reflexes}</span></div>
                <div class="font-medium text-gray-700">SPE: <span class="font-bold text-stone-50">${player.speed}</span></div>
                <div class="font-medium text-gray-700">POS: <span class="font-bold text-stone-50">${player.positioning}</span></div>
            ` : `
                <div class="font-medium text-gray-700">PAC: <span class="font-bold text-stone-50">${player.pace}</span></div>
                <div class="font-medium text-gray-700">SHO: <span class="font-bold text-stone-50">${player.shooting}</span></div>
                <div class="font-medium text-gray-700">PAS: <span class="font-bold text-stone-50">${player.passing}</span></div>
                <div class="font-medium text-gray-700">DRI: <span class="font-bold text-stone-50">${player.dribbling}</span></div>
                <div class="font-medium text-gray-700">DEF: <span class="font-bold text-stone-50">${player.defending}</span></div>
                <div class="font-medium text-gray-700">PHY: <span class="font-bold text-stone-50">${player.physical}</span></div>
            `}
        </div>
        <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-1 group-hover:bg-gray-800 transition duration-300">
            <button 
                class="bg-green-500 text-white text-xs md:text-sm font-semibold py-1 px-1 md:py-2 md:px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 add-player"
            >
                + Ajouter
            </button>
            <button 
                class="bg-blue-500 text-white text-xs md:text-sm font-semibold py-1 px-1 md:py-2 md:px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 edit-player" 
                
            >
                Modifier
            </button>
        </div>
    `;
}




// Selecting all player buttons
const playerButtons = document.querySelectorAll('.player-button');
const playerBadgeElements = document.querySelectorAll('.player-badge');

playerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const positionClassName = playerBadgeElements[index].classList[1]; 
        showPlayersByPosition(positionClassName);
    });
});


function showPlayersByPosition(position) {
    const selectedPlayers = players.filter(player => player.position === position);
    
    const playerList = document.getElementById('ulChoixPlayers');
    playerList.innerHTML = ''; 

    selectedPlayers.forEach(player => {
        const playerItem = document.createElement('li');
        playerItem.className = 'flex flex-wrap gap-4 ';
        playerItem.innerHTML = `
            <div class="relative bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow-md overflow-hidden p-1 w-full h-full flex flex-col items-center">
                <!-- Header: Position and Rating -->
                <div class="flex justify-between w-full text-xs sm:text-sm">
                    <span class="font-bold text-stone-50">${player.position}</span>
                    <span class="font-bold text-yellow-400">${player.rating}</span>
                </div>

                <!-- Player Photo -->
                <img src="${player.photo}" alt="${player.name}" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 my-1">

                <!-- Player Name -->
                <h2 class="text-xs sm:text-sm font-semibold text-center text-gray-900">${player.name}</h2>

                <!-- Flag and Club Logo -->
                <div class="flex items-center my-1">
                    <img src="${player.flag}" alt="Flag" class="w-4 h-3 mr-1">
                    <img src="${player.logo}" alt="Club" class="w-5 h-5">
                </div>

                <!-- Stats -->
                ${
                    player.position === 'GK'
                    ? `
                    <div class="grid grid-cols-2 gap-1 mt-1 text-[9px] sm:text-xs">
                        <div class="font-medium text-gray-700">DIV: <span class="font-bold text-stone-50">${player.diving}</span></div>
                        <div class="font-medium text-gray-700">HAN: <span class="font-bold text-stone-50">${player.handling}</span></div>
                        <div class="font-medium text-gray-700">KIC: <span class="font-bold text-stone-50">${player.kicking}</span></div>
                        <div class="font-medium text-gray-700">REF: <span class="font-bold text-stone-50">${player.reflexes}</span></div>
                        <div class="font-medium text-gray-700">SPE: <span class="font-bold text-stone-50">${player.speed}</span></div>
                        <div class="font-medium text-gray-700">POS: <span class="font-bold text-stone-50">${player.positioning}</span></div>
                    </div>
                    `
                    : `
                    <div class="grid grid-cols-2 gap-1 mt-1 text-[9px] sm:text-xs">
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
        playerList.appendChild(playerItem);
    });

    // Display the modal
    document.getElementById('modalChoixPlayer').classList.remove('hidden');
}

// Closing functionality for the modal
document.getElementById('closeChoixPlayer').addEventListener('click', () => {
    document.getElementById('modalChoixPlayer').classList.add('hidden');
});

function validateInput(input, regex) {
    return regex.test(input);
}
const addPlayerBtn = document.getElementById('addPlayerBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const positionSelect = document.getElementById('position');
const dynamicFields = document.getElementById('dynamicFields');
const playerDataArray = [];

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
    dynamicFields.innerHTML = ''; 

    if (position === 'GK') {
    dynamicFields.innerHTML = `
        <div class="form-group">
            <label for="diving">Diving :</label>
            <input type="number" id="diving" name="diving" placeholder="Entrez la note de plonger" >

            <label for="handling">Handling :</label>
            <input type="number" id="handling" name="handling" placeholder="Entrez la note de maniement" >
        </div>
        <div class="form-group">
            <label for="kicking">Kicking :</label>
            <input type="number" id="kicking" name="kicking" placeholder="Entrez la note de dégagement" >

            <label for="reflexes">Reflexes :</label>
            <input type="number" id="reflexes" name="reflexes" placeholder="Entrez la note des réflexes" >
        </div>
        <div class="form-group">
            <label for="speed">Speed :</label>
            <input type="number" id="speed" name="speed" placeholder="Entrez la note de vitesse" >

            <label for="positioning">Positioning :</label>
            <input type="number" id="positioning" name="positioning" placeholder="Entrez la note de positionnement" >
        </div>
    `;
} else {
    dynamicFields.innerHTML = `
        <div class="form-group">
            <label for="pace">Pace :</label>
            <input type="number" id="pace" name="pace" placeholder="Entrez la note de vitesse" >

            <label for="shooting">Shooting :</label>
            <input type="number" id="shooting" name="shooting" placeholder="Entrez la note de tir" >
        </div>
        <div class="form-group">
            <label for="passing">Passing :</label>
            <input type="number" id="passing" name="passing" placeholder="Entrez la note de passe" >

            <label for="dribbling">Dribbling :</label>
            <input type="number" id="dribbling" name="dribbling" placeholder="Entrez la note de dribble" >
        </div>
        <div class="form-group">
            <label for="defending">Defending :</label>
            <input type="number" id="defending" name="defending" placeholder="Entrez la note de défense" >

            <label for="physical">Physical :</label>
            <input type="number" id="physical" name="physical" placeholder="Entrez la note de physique" >
        </div>
    `;
}

});
const playerForm = document.getElementById('playerForm');
playerForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const photo = document.getElementById('photo').value.trim();
    const nationality = document.getElementById('nationality').value.trim();
    const position = document.getElementById('position').value.trim();
    const club = document.getElementById('club').value.trim();
    const logo = document.getElementById('logo').value.trim();
    const rating = document.getElementById('rating').value.trim();

    
    const nameRegex = /^[a-zA-Z\s-]+$/; 
    const urlRegex = /^(https?:\/\/[^\s]+)$/; 
    const ratingRegex = /^([1-9][0-9]?|100)$/; 

    
    if (!nameRegex.test(name)) {
        alert('Le nom doit contenir uniquement des lettres, espaces ou tirets.');
        return;
    }
    if (!urlRegex.test(photo)) {
        alert('La photo doit être une URL valide.');
        return;
    }
    if (!nameRegex.test(nationality)) {
        alert('La nationalité doit contenir uniquement des lettres, espaces ou tirets.');
        return;
    }
    if (!nameRegex.test(club)) {
        alert('Le nom du club doit contenir uniquement des lettres, espaces ou tirets.');
        return;
    }
    if (!urlRegex.test(logo)) {
        alert('Le logo doit être une URL valide.');
        return;
    }
    if (!ratingRegex.test(rating)) {
        alert('La note générale doit être un nombre entre 1 et 100.');
        return;
    }


    const dynamicInputs = document.querySelectorAll('#dynamicFields input[type="number"]');
    const attributes = {};
    for (let input of dynamicInputs) {
        const value = input.value.trim();
        if (!ratingRegex.test(value)) {
            alert(`${input.name} doit être une note valide entre 1 et 100.`);
            return;
        }
        attributes[input.name] = input.value.trim();
    }
    const playerData = {
        name,
        photo,
        nationality,
        position,
        club,
        logo,
        rating,
        attributes
    }
    playerDataArray.push(playerData);
    localStorage.setItem('players', JSON.stringify(playerDataArray));
    console.log(playerDataArray); 
    alert('Joueur ajouté avec succès !');
    playerForm.reset();
    modal.style.display = 'none';
});
const storedPlayers = localStorage.getItem('players');

/*----------------------------------------------------------------------*/
const conteneurCard = document.querySelector('.Conteneur-card');
// Function to display player cards inside the .Conteneur-card container
function afficherCartesJoueurs() {
    conteneurCard.innerHTML = ''; // Clear the container before rendering new cards

    // Retrieve players from localStorage
    const joueurs = JSON.parse(localStorage.getItem('players')) || [];

    
    joueurs.forEach(joueur => {
        const cardHTML = `
            <div class="card-fifa">
                <div class="card-image">
                    <img src="${joueur.photo}" alt="${joueur.name}">
                </div>
                <div class="card-name">${joueur.name}</div>
                <div class="card-stats">
                    ${
                        joueur.position === 'GK'
                            ? `
                            <div><span>DIG</span> ${joueur.attributes.diving}</div>
                            <div><span>HAN</span> ${joueur.attributes.handling}</div>
                            <div><span>KIC</span> ${joueur.attributes.kicking}</div>
                            <div><span>REF</span> ${joueur.attributes.reflexes}</div>
                            <div><span>SPE</span> ${joueur.attributes.speed}</div>
                            <div><span>POS</span> ${joueur.attributes.positioning}</div>
                            `
                            : `
                            <div><span>PAC</span> ${joueur.attributes.pace}</div>
                            <div><span>SHO</span> ${joueur.attributes.shooting}</div>
                            <div><span>PAS</span> ${joueur.attributes.passing}</div>
                            <div><span>DRI</span> ${joueur.attributes.dribbling}</div>
                            <div><span>DEF</span> ${joueur.attributes.defending}</div>
                            <div><span>PHY</span> ${joueur.attributes.physical}</div>
                            `
                    }
                </div>
                <div class="card-flags">
                    <div class="info">
                        <span class="position">${joueur.position}</span>
                        <span class="rating">${joueur.rating}</span>
                    </div>
                    <div class="flags">
                        <img src="${joueur.logo}" alt="$">
                        <img src="${joueur.club}" alt="">
                    </div>
                </div>
            </div>
        `;
        conteneurCard.innerHTML += cardHTML; 
    });
}


playerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const newPlayer = {
        name: document.querySelector('#name').value,  
        photo: document.querySelector('#photo').value,  
        position: document.querySelector('#position').value,  
        rating: document.querySelector('#rating').value,  
        nationality: document.querySelector('#nationality').value,  
        club: document.querySelector('#club').value,  
        logo: document.querySelector('#logo').value,  
        attributes: {
            pace: document.querySelector('#pace').value,  
            shooting: document.querySelector('#shooting').value,
            passing: document.querySelector('#passing').value,
            dribbling: document.querySelector('#dribbling').value,
            defending: document.querySelector('#defending').value,
            physical: document.querySelector('#physical').value,
            diving: document.querySelector('#diving').value,
            handling: document.querySelector('#handling').value,
            kicking: document.querySelector('#kicking').value,
            reflexes: document.querySelector('#reflexes').value,
            speed: document.querySelector('#speed').value,
            positioning: document.querySelector('#positioning').value,
        }
    };

    
    const joueurs = JSON.parse(localStorage.getItem('players')) || [];

    
    joueurs.push(newPlayer);

    
    localStorage.setItem('players', JSON.stringify(joueurs));

    
    afficherCartesJoueurs();

    
    alert('Joueur ajouté avec succès !');
    playerForm.reset();
    modal.style.display = 'none';
});

// Load the player cards when the page is loaded
document.addEventListener('DOMContentLoaded', afficherCartesJoueurs);


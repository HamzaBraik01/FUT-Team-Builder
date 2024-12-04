# FUT Builder - Builder d'Équipe de Joueurs

## Vue d'Ensemble du Projet
**FUT Builder** est une application web interactive permettant aux utilisateurs de créer et gérer leurs propres équipes de football. Cette application intuitive offre la possibilité de :  
- Créer une composition d’équipe.  
- Gérer les remplacements.  
- Personnaliser la composition de l’équipe.  

Idéale pour les passionnés de football, les entraîneurs, ou toute personne souhaitant visualiser son équipe idéale.

---

## Objectifs
Les principaux objectifs de ce projet sont :  
1. Offrir une plateforme intuitive et interactive pour créer des compositions d'équipes de football.  
2. Permettre une gestion dynamique des joueurs avec des règles concernant les positions.  
3. Fournir une expérience utilisateur fluide et responsive sur tous les appareils.  

---

## Fonctionnalités

### Gestion Dynamique des Joueurs
- Ajouter, modifier et supprimer des joueurs facilement.  
- Respecter une limite stricte de **11 joueurs sur le terrain**.  
- Gestion séparée pour les remplaçants.  

### Positionnement des Joueurs
- Ajustement automatique des positions des joueurs basé sur une disposition en grille.  
- Visualisation de la formation sur une interface dynamique en forme de "terrain".  

### Fenêtre Modale Interactive
- Utilisation d'une fenêtre modale pour l'ajout de joueurs avec validation pour éviter les doublons.  
- Affichage des erreurs et messages en temps réel.  

### Design Réactif
- Adaptation de l’interface pour tous les types d’écrans (desktop, tablette, et mobile).  

---

## Technologies Utilisées
- **HTML5** : Structuration de l’application.  
- **CSS3** : Stylisation avec **Tailwind CSS** pour un développement rapide.  
- **JavaScript (Vanilla)** : Gestion dynamique de l’interface utilisateur via le DOM.

---

## User Stories

### Créer une Équipe
- En tant qu'utilisateur, je souhaite ajouter des joueurs à une liste dynamique de joueurs "sur le terrain" et une liste de remplaçants.  

### Gérer les Joueurs
- En tant qu'utilisateur, je souhaite pouvoir modifier ou supprimer des joueurs tout en respectant la limite de 11 joueurs.  

### Sauvegarder et Charger
- En tant qu'utilisateur, je souhaite sauvegarder la configuration de mon équipe et la recharger lors des visites suivantes.  

---

## Design Réactif
Le projet utilise **Tailwind CSS** pour garantir la compatibilité sur tous les appareils.  

---

## Installation et Lancement

### Étape 1 : Cloner le Repository
```bash
git clone https://github.com/HamzaBraik01/FUT-Team-Builder

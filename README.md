# Simulateur de combat

## Introduction

Cette SPA est un simulateur de combat réalisé à l'aide de Javascript et React, et qui utilise également la bibliothéèque TailwindCSS. Il s'agit d'un projet personnel que j'ai développé pour apprendre et mieux comprendre l'utilisation de React.

## Fonctionnement général

L'utilisateur commence par choisir un pseudo pour son personnage. Il doit ensuite choisir sa classe parmi les trois proposées (Guerrier, Mage et Archer), chaque classe comprenant des caractéristiques qui leur sont propres. Après validation, il a le choix entre 3 adversaires possible (Slime, Loup-Garou et Dragon) qui ont chacun une difficulté différente. Le combat peut ensuite débuter. A tout moment, l'utilisateur peut revenir en arrière et choisir un nouvel adversaire, une nouvelle classe ou alors changer son pseudo.

## Fonctionnement du combat:

Le combat se déroule en plusieurs tours, chaque tour regroupant l'action du joueur et l'action du monstre. Il y a 4 types d'action disponibles.

- Attaquer: le personnage attaque son adversaire et diminue sa santé selon sa statistique d'attaque. Fait gagner un point de magie.
- Lancer une attaque spéciale: Lancer une attaque puissante qui inflige l'équivalent de 4x son attaque à son adversaire, et qui nécessite et utilise 5 point de magie
- Se soigner: Rend au personnage 25% de sa santé maximum
- Attendre: Donne 3 points de magie au personnage.

Les points de vie et de magie sont visibles sur l'écran et évoluent dynamiquement au fur et à mesure du combat. L'action du monstre est déterminée aléatoirement, mais celui-ci ne se soigne pas si ses points de vie sont déjà au maximum.

Lorsqu'un des personnages a ses points de vie qui tombent à zéro, une modale apparait afin de désigner le vainqueur et annoncer la victoire ou la défaite au joueur. L'utilisateur a la possibilité de recommencer un combat en cliquant sur le bouton dédié.

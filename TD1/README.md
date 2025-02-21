# Exercice 1 : Conversion de Température

Ce exercice permet de convertir une température de Fahrenheit en Celsius, aussi bien sur une page web qu'en ligne de commande avec Node.js. L'interface utilisateur en HTML permet d'entrer une température et d'obtenir la conversion immédiatement, tandis que la version Node.js fonctionne en ligne de commande en demandant une entrée et en affichant le résultat.

Le fichier `script.js` contient la logique de conversion via la fonction `degreC()`, qui effectue le calcul en appliquant la formule `(5/9) * (tempF - 32)`. La version web met à jour dynamiquement l'affichage, tandis que la version Node.js fonctionne en boucle, demandant une nouvelle entrée après chaque conversion.

# Exercice 2 : Conversion de Durée

Ce exercice propose une solution en JavaScript qui convertit une durée exprimée en secondes en jours, heures, minutes et secondes. Il comprend un fichier HTML pour l’interface utilisateur, permettant à l’utilisateur de saisir une durée et de visualiser le résultat directement sur la page. La page affiche un champ de saisie et un bouton qui, lorsqu’il est cliqué, déclenche la fonction de conversion et affiche le résultat dans un paragraphe.

La logique de conversion est réalisée par la fonction `convertToHjms` qui effectue les calculs nécessaires pour transformer le nombre de secondes en une durée formatée. De plus, le script offre la possibilité d’interagir via la ligne de commande (dans un environnement Node.js), en lisant les entrées de l’utilisateur et en affichant le résultat dans le terminal. Ce exercice démontre ainsi une approche modulaire et réutilisable pour gérer la conversion de durées en JavaScript.



# Exercice 2 bis : Conversion de Durée avec Affichage Conditionnel

Ce exercice propose une solution en JavaScript pour convertir une durée en secondes en jours, heures, minutes et secondes, en adaptant dynamiquement l'affichage : les unités dont la valeur est nulle ne sont pas affichées, et lorsque la valeur vaut 1, l'unité est affichée au singulier. Le exercice inclut un fichier HTML pour une interface utilisateur interactive et un script JavaScript qui gère la conversion et le formatage du résultat, permettant ainsi une utilisation à la fois en mode web et en ligne de commande via Node.js.

La fonction principale `convertToHjms` effectue les calculs nécessaires et construit une chaîne de caractères formatée en omettant les parties inutiles, afin d'afficher par exemple "1 heure 21 secondes" pour 3621 secondes. Cette approche modulaire et conditionnelle assure un affichage clair et précis, répondant aux exigences d'un rendu dynamique des unités en fonction de leur valeur.


# Exercice 3 : Classer 3 Nombres

Ce exercice propose une solution en JavaScript pour trier trois nombres saisis par l’utilisateur et les afficher dans l’ordre croissant. L’interface web, définie dans le fichier HTML, permet à l’utilisateur d’entrer trois valeurs dans des champs dédiés et d’obtenir le résultat directement sur la page après avoir cliqué sur le bouton « Classer ». Le script récupère les entrées, valide les données et utilise une fonction de tri pour afficher le résultat de manière claire.

Le même code est également conçu pour interagir en ligne de commande lorsqu’il est exécuté dans un environnement Node.js. En utilisant les fonctions standard d’entrée et de sortie, le programme sollicite successivement les trois nombres via le terminal et affiche ensuite l’ordre croissant obtenu. Cette approche montre la flexibilité du code, qui peut être exploité à la fois dans une application web et en mode console.


# Exercice 4 : Affichage de motifs - Escaliers

Ce exercice propose une solution en JavaScript pour afficher un motif triangulaire sous forme d'escalier dont la taille est déterminée par l'utilisateur. L'interface web permet de saisir la taille du motif et d'afficher le résultat en utilisant soit une boucle `while`, soit une boucle `for` en fonction du choix de l'utilisateur. Le motif est affiché dans une zone préformatée pour maintenir l'alignement des étoiles.

Le script est également conçu pour interagir avec l'utilisateur en ligne de commande, en utilisant Node.js. Après avoir saisi la taille du motif, l'utilisateur choisit la méthode pour générer le motif (avec `while` ou `for`). Le motif correspondant est ensuite affiché dans le terminal, offrant ainsi une expérience similaire à celle de l'interface web.


# Exercice 4-bis : Affichage de motifs - Pyramides

Ce projet consiste à afficher une pyramide dans laquelle chaque ligne contient un nombre d'étoiles qui augmente à mesure que l'on descend, et ce nombre est centré pour donner l'apparence d'une pyramide. La taille de la pyramide est déterminée par l'utilisateur, et le script peut être exécuté soit sur une page web avec une interface interactive, soit en ligne de commande avec Node.js.

## Fonctionnement du projet

### Interface Web
Le fichier `index.html` permet à l'utilisateur d'interagir avec le programme via un formulaire. L'utilisateur entre la taille du motif (en nombre de lignes), puis clique sur le bouton pour afficher la pyramide. Le motif est généré dynamiquement par le fichier `script.js` et s'affiche dans une zone dédiée de la page.

### Interaction en Ligne de Commande (Node.js)
Le fichier `script.js` peut également être exécuté dans un terminal en utilisant Node.js. Lorsque l'utilisateur entre la taille de la pyramide dans le terminal, le script génère le motif et l'affiche directement dans la console. Après l'affichage, le programme demande à nouveau la taille du motif, permettant ainsi une nouvelle génération du motif sans redémarrer le script.

## Fonctionnalités

1. **Interface Web** : Saisie de la taille du motif et affichage de la pyramide dans le navigateur.
2. **Interaction en Ligne de Commande** : Saisie de la taille du motif dans le terminal avec un affichage direct du motif dans la console.
3. **Affichage Dynamique** : Le motif est centré et utilise des étoiles `*` pour créer la pyramide, dont la largeur augmente au fur et à mesure que l'on descend.

## Utilisation

### 1. Interface Web
1. Ouvrez le fichier `index.html` dans un navigateur web.
2. Entrez la taille du motif (en nombre de lignes) dans le champ prévu.
3. Cliquez sur le bouton pour afficher la pyramide.

### 2. Interaction en Ligne de Commande
1. Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.
2. Exécutez le fichier `script.js` via Node.js en ligne de commande :
   ```bash
   node script.js
   ```
3. Entrez la taille du motif lorsque vous êtes invité, et le script générera et affichera la pyramide.

## Exemple d'Exécution

Si l'utilisateur entre la taille `7`, le motif de la pyramide sera :

```
      *
     ***
    *****
   *******
  *********
 ***********
*************
```

## Remarque
Le motif est centré automatiquement en fonction de la taille de la pyramide. Le nombre d'étoiles dans chaque ligne suit un modèle de progression impair (1, 3, 5, 7, etc.), créant ainsi l'apparence d'une pyramide.



# Exercice 5 : Tester si un nombre est premier

Ce programme permet de tester si un nombre introduit par l'utilisateur est premier. Un nombre est premier si ses seuls diviseurs sont 1 et lui-même. L'utilisateur peut entrer un entier positif via une interface web ou en ligne de commande (Node.js). Le programme retourne si le nombre est premier ou non, et si ce n'est pas le cas, il affiche également un diviseur du nombre.

Dans cette solution, deux fichiers sont fournis : `index.html` pour l'interaction avec l'utilisateur sur une page web et `script.js` pour la logique du programme, utilisée à la fois sur la page web et en ligne de commande. L'utilisateur peut tester un nombre dans un navigateur ou dans un terminal, et le programme fournira une réponse détaillée sur la primalité du nombre.


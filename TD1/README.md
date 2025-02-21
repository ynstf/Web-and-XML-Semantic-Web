# Exercice 1 : Conversion de Température

Ce projet permet de convertir une température de Fahrenheit en Celsius, aussi bien sur une page web qu'en ligne de commande avec Node.js. L'interface utilisateur en HTML permet d'entrer une température et d'obtenir la conversion immédiatement, tandis que la version Node.js fonctionne en ligne de commande en demandant une entrée et en affichant le résultat.

Le fichier `script.js` contient la logique de conversion via la fonction `degreC()`, qui effectue le calcul en appliquant la formule `(5/9) * (tempF - 32)`. La version web met à jour dynamiquement l'affichage, tandis que la version Node.js fonctionne en boucle, demandant une nouvelle entrée après chaque conversion.

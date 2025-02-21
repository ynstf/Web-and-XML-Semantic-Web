# Exercice 1 : Conversion de Température

Ce exercice permet de convertir une température de Fahrenheit en Celsius, aussi bien sur une page web qu'en ligne de commande avec Node.js. L'interface utilisateur en HTML permet d'entrer une température et d'obtenir la conversion immédiatement, tandis que la version Node.js fonctionne en ligne de commande en demandant une entrée et en affichant le résultat.

Le fichier `script.js` contient la logique de conversion via la fonction `degreC()`, qui effectue le calcul en appliquant la formule `(5/9) * (tempF - 32)`. La version web met à jour dynamiquement l'affichage, tandis que la version Node.js fonctionne en boucle, demandant une nouvelle entrée après chaque conversion.

# Exercice 2: Conversion de Durée

Ce exercice propose une solution en JavaScript qui convertit une durée exprimée en secondes en jours, heures, minutes et secondes. Il comprend un fichier HTML pour l’interface utilisateur, permettant à l’utilisateur de saisir une durée et de visualiser le résultat directement sur la page. La page affiche un champ de saisie et un bouton qui, lorsqu’il est cliqué, déclenche la fonction de conversion et affiche le résultat dans un paragraphe.

La logique de conversion est réalisée par la fonction `convertToHjms` qui effectue les calculs nécessaires pour transformer le nombre de secondes en une durée formatée. De plus, le script offre la possibilité d’interagir via la ligne de commande (dans un environnement Node.js), en lisant les entrées de l’utilisateur et en affichant le résultat dans le terminal. Ce exercice démontre ainsi une approche modulaire et réutilisable pour gérer la conversion de durées en JavaScript.



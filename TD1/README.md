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


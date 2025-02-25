## Exercice 1 : Permutation

**Objectif :**  
Réaliser un programme qui échange la valeur de deux champs de saisie.

**Description :**  
Dans cet exercice, l'utilisateur saisit deux nombres dans deux champs de texte. En cliquant sur le bouton "Permutation", une fonction JavaScript récupère les valeurs, les échange et met à jour les champs. Cela permet de démontrer la manipulation du DOM ainsi que l'utilisation de variables en JavaScript.

**Fonctionnalité principale :**  
- Récupération des valeurs des deux champs de saisie.
- Échange des valeurs entre les deux champs.

---

## Exercice 2 : Calculatrice Simple

**Objectif :**  
Créer une calculatrice simple permettant d'effectuer les quatre opérations de base (addition, soustraction, multiplication et division).

**Description :**  
Cet exercice permet à l'utilisateur de saisir deux nombres dans des champs de texte et d'effectuer une opération arithmétique en cliquant sur l'un des boutons correspondant aux opérations (+, -, *, /). Le résultat est ensuite affiché dans un champ de texte dédié.  
Chaque opération est gérée par une fonction JavaScript distincte qui convertit les valeurs saisies en nombres, effectue le calcul et affiche le résultat.

**Fonctionnalités principales :**  
- Saisie de deux nombres.
- Réalisation des opérations de base (addition, soustraction, multiplication, division).
- Affichage du résultat dans un champ dédié.

---

## Exercice 3 : Calculateur d'IMC

**Objectif :**  
Développer un calculateur d'Indice de Masse Corporelle (IMC) permettant à l'utilisateur de connaître son état corporel.

**Description :**  
L'utilisateur entre son poids en kilogrammes et sa taille en mètres. À l'aide de la fonction JavaScript "imc", l'IMC est calculé en divisant le poids par le carré de la taille. En fonction de la valeur obtenue, un message explicatif est affiché indiquant si l'utilisateur est en insuffisance pondérale, a une corpulence normale, est en surpoids ou présente une forme d'obésité (modérée, sévère ou morbide).  
Cet exercice met en pratique le calcul numérique et l'utilisation de conditions pour afficher différents messages.

**Fonctionnalités principales :**  
- Saisie du poids et de la taille.
- Calcul de l'IMC.
- Affichage d'un message décrivant l'état corporel de l'utilisateur selon la classification de l'IMC.

---

## Exercice 4 : Calculatrice Scientifique

**Objectif :**  
Concevoir une calculatrice scientifique en utilisant HTML, CSS (Grid) et JavaScript pur.

**Description :**  
Cette application est divisée en deux parties distinctes :  
- **Panneau scientifique (gauche) :**  
  Propose des fonctions mathématiques avancées telles que sin, cos, tan, racine carrée, ln, log, ainsi que des constantes (π et e), et d'autres opérations (EXP, x², x^, Inv). Chaque bouton du panneau scientifique insère dans l'expression des appels aux fonctions JavaScript correspondantes (par exemple, `Math.sin(` pour le bouton sin).

- **Panneau de calcul basique (droite) :**  
  Contient les chiffres, les opérateurs de base (addition, soustraction, multiplication, division) et une zone d'affichage. L'expression mathématique saisie est évaluée à l'aide de la fonction `eval()` lors du clic sur le bouton "=".

**Fonctionnalités principales :**  
- Interface utilisateur divisée en deux panneaux (scientifique et basique) grâce à CSS Grid.
- Gestion des fonctions scientifiques et des opérations de base.
- Évaluation de l'expression mathématique complète en intégrant à la fois des fonctions avancées et des opérations arithmétiques simples.

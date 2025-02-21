// Fonction de calcul de la racine carrée approchée
function approximateSquareRoot(A) {
  let x = A / 2; // Initial guess
  let epsilon = 1e-6; // Error threshold

  // Continue updating the guess until the error is less than the threshold
  while (Math.abs(x * x - A) > epsilon) {
    x = (x + A / x) / 2; // Update guess using the recurrence relation
  }
  return x;
}

// Fonction pour l'interaction sur la page web
function calculateSquareRoot() {
  const inputNumber = parseFloat(document.getElementById("inputNumber").value);

  if (inputNumber >= 1 && inputNumber <= 100) {
    const result = approximateSquareRoot(inputNumber);
    document.getElementById(
      "result"
    ).textContent = `Valeur approchée de la racine carrée = ${result}`;
  } else {
    document.getElementById("result").textContent =
      "Veuillez entrer un nombre valide entre 1 et 100.";
  }
}

// Command line interaction (if run with Node.js)
// Demander une saisie utilisateur
if (typeof process !== "undefined" && process.stdin && process.stdout) {
  process.stdout.write("Entrez un nombre réel positif entre 1 et 100: ");
  process.stdin.on("data", function (input) {
    let A = parseFloat(input.toString().trim());

    if (A >= 1 && A <= 100) {
      const result = approximateSquareRoot(A);
      process.stdout.write(
        `Valeur approchée de la racine carrée = ${result}\n`
      );
    } else {
      process.stdout.write(
        "Veuillez entrer un nombre valide entre 1 et 100.\n"
      );
    }

    process.stdout.write("Entrez un nombre réel positif entre 1 et 100: ");
  });
}

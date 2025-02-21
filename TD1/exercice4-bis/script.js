// Fonction pyramid - Utilise une boucle for
function generatePyramid() {
  const size = parseInt(document.getElementById("sizeInput").value);
  if (isNaN(size) || size <= 0) {
    document.getElementById("result").textContent =
      "Veuillez entrer une taille valide.";
    return;
  }

  let result = "";
  for (let i = 1; i <= size; i++) {
    // Affiche des espaces pour centrer le motif
    result += " ".repeat(size - i);
    // Affiche les étoiles
    result += "*".repeat(2 * i - 1);
    result += "\n";
  }

  document.getElementById("result").textContent = result;
}

// Interaction en ligne de commande (Node.js)
if (typeof process !== "undefined" && process.stdin && process.stdout) {
  process.stdout.write("Entrez la taille du motif : ");
  process.stdin.on("data", function (input) {
    let size = parseInt(input.toString().trim());
    if (isNaN(size) || size <= 0) {
      process.stdout.write("Veuillez entrer une taille valide.\n");
      process.stdout.write("Entrez la taille du motif : ");
      return;
    }

    let result = "";
    for (let i = 1; i <= size; i++) {
      // Affiche des espaces pour centrer le motif
      result += " ".repeat(size - i);
      // Affiche les étoiles
      result += "*".repeat(2 * i - 1);
      result += "\n";
    }
    process.stdout.write(result);
    process.stdout.write("Entrez la taille du motif : ");
  });
}

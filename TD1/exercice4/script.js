// Fonction triangle1 - Utilise une boucle while
function triangle1() {
  const size = parseInt(document.getElementById("sizeInput").value);
  if (isNaN(size) || size <= 0) {
    document.getElementById("result").textContent =
      "Veuillez entrer une taille valide.";
    return;
  }

  let i = 1;
  let result = "";
  while (i <= size) {
    result += "*".repeat(i) + "\n";
    i++;
  }
  document.getElementById("result").textContent = result;
}

// Fonction triangle2 - Utilise une boucle for
function triangle2() {
  const size = parseInt(document.getElementById("sizeInput").value);
  if (isNaN(size) || size <= 0) {
    document.getElementById("result").textContent =
      "Veuillez entrer une taille valide.";
    return;
  }

  let result = "";
  for (let i = 1; i <= size; i++) {
    result += "*".repeat(i) + "\n";
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

    process.stdout.write("Choisissez la méthode : 1 pour while, 2 pour for\n");
    process.stdin.on("data", function (inputMethod) {
      let method = inputMethod.toString().trim();

      if (method === "1") {
        let result = "";
        let i = 1;
        while (i <= size) {
          result += "*".repeat(i) + "\n";
          i++;
        }
        process.stdout.write(result);
      } else if (method === "2") {
        let result = "";
        for (let i = 1; i <= size; i++) {
          result += "*".repeat(i) + "\n";
        }
        process.stdout.write(result);
      } else {
        process.stdout.write("Méthode non reconnue. Essayez à nouveau.\n");
      }
      process.stdout.write("Entrez la taille du motif : ");
    });
  });
}

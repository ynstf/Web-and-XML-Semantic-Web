// Fonction Fibo1 - Calculer le nième terme de Fibonacci
function fibo1(n) {
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return n === 0 ? a : b;
}

// Fonction Fibo2 - Trouver le premier terme supérieur à une valeur donnée
function fibo2(threshold) {
  let a = 0,
    b = 1,
    index = 1;
  while (b <= threshold) {
    let temp = a + b;
    a = b;
    b = temp;
    index++;
  }
  return { value: b, index: index };
}

// Fonction pour l'interaction sur la page Web (Fibo1)
function calculateFibo1() {
  const n = parseInt(document.getElementById("nValue").value);
  if (isNaN(n) || n < 0) {
    document.getElementById("resultFibo1").textContent =
      "Veuillez entrer un nombre valide.";
    return;
  }
  const result = fibo1(n);
  document.getElementById(
    "resultFibo1"
  ).textContent = `Le ${n}ème terme de Fibonacci est : ${result}`;
}

// Fonction pour l'interaction sur la page Web (Fibo2)
function calculateFibo2() {
  const threshold = parseInt(document.getElementById("threshold").value);
  if (isNaN(threshold) || threshold < 0) {
    document.getElementById("resultFibo2").textContent =
      "Veuillez entrer une valeur valide.";
    return;
  }
  const { value, index } = fibo2(threshold);
  document.getElementById(
    "resultFibo2"
  ).textContent = `Le premier terme supérieur à ${threshold} est : ${value} à la position ${index}.`;
}

// Command-line interaction for Node.js (if using Node.js)
if (typeof process !== "undefined" && process.stdin && process.stdout) {
  const prompts = [
    "Entrez la valeur de n pour Fibo1 : ",
    "Entrez une valeur pour Fibo2 : ",
  ];

  // Fonction de test Fibo1 en ligne de commande
  process.stdout.write(prompts[0]);
  process.stdin.on("data", function (input) {
    let n = parseInt(input.toString().trim());
    if (isNaN(n) || n < 0) {
      process.stdout.write("Veuillez entrer un nombre valide.\n");
      process.stdout.write(prompts[0]);
    } else {
      const result = fibo1(n);
      process.stdout.write(`Le ${n}ème terme de Fibonacci est : ${result}\n`);
      process.stdout.write(prompts[1]);
    }
  });

  // Fonction de test Fibo2 en ligne de commande
  process.stdin.on("data", function (input) {
    let threshold = parseInt(input.toString().trim());
    if (isNaN(threshold) || threshold < 0) {
      process.stdout.write("Veuillez entrer une valeur valide.\n");
      process.stdout.write(prompts[1]);
    } else {
      const { value, index } = fibo2(threshold);
      process.stdout.write(
        `Le premier terme supérieur à ${threshold} est : ${value} à la position ${index}.\n`
      );
      process.stdin.end();
    }
  });
}

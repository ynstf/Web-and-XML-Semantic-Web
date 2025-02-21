// Fonction pour tester si un nombre est premier
function isPrime(n) {
  if (n <= 1) return false; // Les nombres inférieurs ou égaux à 1 ne sont pas premiers
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return { isPrime: false, divisor: i };
    }
  }
  return { isPrime: true };
}

// Fonction pour interagir avec l'interface Web
function checkPrime() {
  const number = parseInt(document.getElementById("numberInput").value);

  if (isNaN(number) || number <= 0) {
    document.getElementById("result").textContent =
      "Veuillez entrer un entier positif valide.";
    return;
  }

  const result = isPrime(number);

  if (result.isPrime) {
    document.getElementById(
      "result"
    ).textContent = `${number} est un nombre premier`;
  } else {
    document.getElementById(
      "result"
    ).textContent = `${number} n'est pas un nombre premier, il est divisible par ${result.divisor}`;
  }
}

// Interaction en ligne de commande (Node.js)
if (typeof process !== "undefined" && process.stdin && process.stdout) {
  process.stdout.write("Donnez un entier positif : ");

  process.stdin.on("data", function (input) {
    let number = parseInt(input.toString().trim());

    if (isNaN(number) || number <= 0) {
      process.stdout.write("Veuillez entrer un entier positif valide.\n");
      process.stdout.write("Donnez un entier positif : ");
      return;
    }

    const result = isPrime(number);

    if (result.isPrime) {
      process.stdout.write(`${number} est un nombre premier\n`);
    } else {
      process.stdout.write(
        `${number} n'est pas un nombre premier, il est divisible par ${result.divisor}\n`
      );
    }

    process.stdout.write("Donnez un entier positif : ");
  });
}

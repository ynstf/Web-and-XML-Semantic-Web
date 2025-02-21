// Fonction qui trie trois nombres dans l'ordre croissant
function sortThreeNumbers(a, b, c) {
  let arr = [a, b, c];
  arr.sort((x, y) => x - y);
  return arr.join(" ");
}

// Fonction pour l'interaction sur la page web
function sortNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.getElementById("result").textContent =
      "Veuillez entrer trois nombres valides.";
    return;
  }

  const sorted = sortThreeNumbers(num1, num2, num3);
  document.getElementById("result").textContent =
    "Les nombres dans l'ordre croissant : " + sorted;
}

// Interaction en ligne de commande (Node.js)
if (typeof process !== "undefined" && process.stdin && process.stdout) {
  let numbers = [];
  const prompts = ["1er nombre : ", "2ème nombre : ", "3ème nombre : "];

  process.stdout.write(prompts[0]);
  process.stdin.on("data", function (input) {
    let value = input.toString().trim();
    let num = parseFloat(value);
    if (isNaN(num)) {
      process.stdout.write("Veuillez entrer un nombre valide.\n");
    } else {
      numbers.push(num);
    }

    if (numbers.length < 3) {
      process.stdout.write(prompts[numbers.length]);
    } else if (numbers.length === 3) {
      let sorted = sortThreeNumbers(numbers[0], numbers[1], numbers[2]);
      process.stdout.write(
        "Les nombres dans l'ordre croissant : " + sorted + "\n"
      );
      // Reset pour permettre une nouvelle saisie
      numbers = [];
      process.stdout.write(prompts[0]);
    }
  });
}

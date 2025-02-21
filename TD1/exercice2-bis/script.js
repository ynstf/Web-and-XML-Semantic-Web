// Fonction de conversion
function convertDuration() {
  const secondsInput = document.getElementById("secondsInput").value;
  if (secondsInput && !isNaN(secondsInput) && secondsInput > 0) {
    const result = convertToHjms(secondsInput);
    document.getElementById(
      "result"
    ).textContent = `Cette durée équivaut à ${result}`;
  } else {
    document.getElementById("result").textContent =
      "Veuillez entrer un nombre valide de secondes.";
  }
}

// Fonction de calcul de la durée en jours, heures, minutes, secondes
function convertToHjms(seconds) {
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  let result = [];

  if (days > 0) {
    result.push(days + " " + (days === 1 ? "jour" : "jours"));
  }
  if (hours > 0) {
    result.push(hours + " " + (hours === 1 ? "heure" : "heures"));
  }
  if (minutes > 0) {
    result.push(minutes + " " + (minutes === 1 ? "minute" : "minutes"));
  }
  if (seconds > 0) {
    result.push(seconds + " " + (seconds === 1 ? "seconde" : "secondes"));
  }

  // Retourne "0 secondes" si toutes les valeurs sont nulles
  if (result.length === 0) {
    result.push("0 secondes");
  }

  return result.join(" ");
}

// Command line interaction (if run with Node.js)
// Demander une saisie utilisateur
process.stdout.write("Une durée en secondes : ");
process.stdin.on("data", function (input) {
  let seconds = parseInt(input.toString().trim());
  if (!isNaN(seconds)) {
    process.stdout.write(`cette durée équivaut à ${convertToHjms(seconds)}\n`);
  } else {
    process.stdout.write("Veuillez entrer un nombre valide de secondes.\n");
  }
  process.stdout.write("Une durée en secondes : ");
});

function degreC(tempF) {
  let tempC = (5 / 9) * (tempF - 32);
  console.log(
    `Cette température équivaut à ${tempC.toFixed(1)} degrés Celsius`
  );
  return tempC.toFixed(1);
}
// Demander une saisie utilisateur
process.stdout.write("Une température en Fahrenheit : ");
process.stdin.on("data", function (input) {
  let tempF = parseFloat(input.toString().trim());
  degreC(tempF);
  process.stdin.end();
  process.stdout.write("Une température en Fahrenheit : ");
});

function convertTemperature() {
  let tempF = parseFloat(document.getElementById("tempF").value);
  if (!isNaN(tempF)) {
    document.getElementById(
      "result"
    ).textContent = `Cette température équivaut à ${degreC(
      tempF
    )} degrés Celsius`;
  } else {
    document.getElementById("result").textContent =
      "Veuillez entrer une valeur valide.";
  }
}

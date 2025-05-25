function numberToFrench(n) {
  const units = ["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize"];
  if (n <= 16) return units[n];
  if (n < 20) return "dix-" + units[n - 10];
  if (n < 70) {
    const tens = Math.floor(n / 10), unit = n % 10;
    const tensWords = ["","dix","vingt","trente","quarante","cinquante","soixante"];
    const tenWord = tensWords[tens];
    if (unit === 1) return tenWord + " et un";
    return unit ? tenWord + "-" + units[unit] : tenWord;
  }
  if (n < 80) {
    if (n === 71) return "soixante et onze";
    return "soixante-" + numberToFrench(n - 60);
  }
  if (n < 100) {
    const unit = n - 80;
    if (unit === 0) return "quatre-vingts";
    if (unit === 1) return "quatre-vingt-un";
    return "quatre-vingt-" + numberToFrench(unit);
  }
  if (n === 100) return "cent";
}

for (let i = 1; i <= 100; i++) {
  console.log(numberToFrench(i));
}

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
  if (n < 1000) {
    const hundreds = Math.floor(n / 100), rest = n % 100;
    let prefix = hundreds > 1 ? units[hundreds] + " cent" : "cent";
    if (!rest) return hundreds > 1 ? prefix + "s" : prefix;
    return prefix + " " + numberToFrench(rest);
  }
  if (n < 1000000) {
    const thousands = Math.floor(n / 1000), rest = n % 1000;
    let prefix = thousands > 1 ? numberToFrench(thousands) + " mille" : "mille";
    if (!rest) return prefix;
    return prefix + " " + numberToFrench(rest);
  }
  if (n < 1000000000) {
    const millions = Math.floor(n / 1000000), rest = n % 1000000;
    let prefix = numberToFrench(millions) + " million" + (millions > 1 ? "s" : "");
    if (!rest) return prefix;
    return prefix + " " + numberToFrench(rest);
  }
  if (n < 1000000000000) {
    const milliards = Math.floor(n / 1000000000), rest = n % 1000000000;
    let prefix = numberToFrench(milliards) + " milliard" + (milliards > 1 ? "s" : "");
    if (!rest) return prefix;
    return prefix + " " + numberToFrench(rest);
  }
  if (n === 1000000000000) return "un billion";
  return "";
}

for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
  console.log(numberToFrench(i));
}

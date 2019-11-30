function getRandInt (maxExcl) {
  return Math.floor(Math.random() * maxExcl);
}

function *giveUniqueMapping (array) {
  const seen = new Set,
        arrayLength = array.length;

  for (const x of array) {
    let to;

    do
      to = array[getRandInt(arrayLength)];
    while (x === to || seen.has(to));

    seen.add(to);

    const code = String(getRandInt(1E8)).padStart(8, "0");

    yield [x, [code, to]];
  }
}

(function main () {

const party = [
  "Alexis",
  "Bruno",
  "Clemence",
  "Melanie",
  "Nathan",
  "Romane",
  "Solene",
],
      map = Array.from(giveUniqueMapping(party)),
      frag = document.createDocumentFragment(),
      body = document.body;

const finalMap = [];

for (const [ sender, [ codeLink, recipient] ] of map) {
  finalMap.push([codeLink, recipient]);

  const p = document.createElement("p");
  const a = document.createElement("a");
  a.href = `${window.location.href}#${codeLink}`;
  a.textContent = a.href;

  p.append(sender, " offre à ", a);

  frag.appendChild(p);
}

console.log(btoa(JSON.stringify(finalMap)));

body.appendChild(frag);

})();

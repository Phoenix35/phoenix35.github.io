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
      mapStr = btoa(JSON.stringify(map)),
      frag = document.createDocumentFragment(),
      body = document.body;

alert(mapStr);
alert(atob(mapStr));

for (const [ sender, recipient ] of map) {
  const p = document.createElement("p");
  p.textContent = `${sender} donne à ${recipient}.`;
  
  frag.appendChild(p);
}

body.appendChild(frag);

})();

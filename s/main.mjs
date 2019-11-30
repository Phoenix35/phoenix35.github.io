(function main (base64Str) {

const o = JSON.parse(atob(base64Str));

const { hash } = window.location;

alert(
  o.hasOwnProperty(hash)
    ? `Tu offres à ${obj[hash]}`
    : "Petit malin"
);

})("eyIxMDA0OTYzOSI6Ik1lbGFuaWUiLCIxNTg1NDIzOCI6IlJvbWFuZSIsIjIzNzUyMDczIjoiQWxleGlzIiwiNDg2NTgwNzQiOiJCcnVubyIsIjY0MTY4ODQ0IjoiU29sZW5lIiwiOTQzMjA4MDEiOiJDbGVtZW5jZSIsIjA4NTg0Mzk5IjoiTmF0aGFuIn0=");

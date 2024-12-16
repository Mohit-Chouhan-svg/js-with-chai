const marval_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marval_heros.push(dc_heros)
console.log(marval_heros);

const all_heros = marval_heros.concat(dc_heros)
console.log(all_heros);

const arr1 = [...marval_heros, ...dc_heros]
console.log(arr1);

console.log(Array.isArray("Mohit"));
console.log(Array.from("Mohit"));
console.log(Array.from({name: "mohit"}));//interesting

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));


const perkalian = (x, y) => x * y;

const akar = (x) => perkalian(x, x);

const pytagoras = (a, b, c) => {
  return akar(a) + akar(b) === akar(c);
};

console.log(pytagoras(3, 4, 5));


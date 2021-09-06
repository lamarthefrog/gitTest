//p0 is starting pop, percent is growth per year, aug is additional moves, p is target pop
function nbYear(p0, percent, aug, p) {
  var n = 0;  //note: n is number of years in this case
  var totalPopulation = p0;
  var decimal = percent / 100;
  
  for (n = 0; totalPopulation < p; n++) {
    totalPopulation += (totalPopulation * decimal) + aug;
  }
  return n;
}
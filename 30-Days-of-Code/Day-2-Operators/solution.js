// from now on im using prettier so my code is more prettier hehe.
// 30 days of javascript day 2 operators solution :):):)

function solve(meal_cost, tip_percent, tax_percent) {
  const total_cost =
    meal_cost +
    (meal_cost * tip_percent) / 100 +
    (meal_cost * tax_percent) / 100;
  console.log(Math.round(total_cost));
}

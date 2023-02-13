var mealCost = Number(prompt("Cost of meal (ex. 25.99)"));

var tip = Number(prompt("Tip percentage (ex. 0.15 for 15%"));

var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;

var numOfPeople = Number(prompt("Please enter a minimum of 1 person"));

console.log(
  `Your meal cost $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);

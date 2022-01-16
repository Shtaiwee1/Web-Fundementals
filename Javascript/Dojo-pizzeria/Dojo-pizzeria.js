function pizzaoven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var pizza1 = pizzaoven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log(pizza1);

var pizza2 = pizzaoven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(pizza2);

var pizza3 = pizzaoven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["chilli", "tomato", "brocolli"]
);
console.log(pizza3);

var pizza4 = pizzaoven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["pineapples", "olives", "onionrings"]
);
console.log(pizza4);

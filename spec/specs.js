describe('Pizza', function() {
  it('creates a Pizza object with the correct properties', function() {
    var testPizza = new Pizza("medium", "regular",[],[]);
    expect(testPizza.pizzaSize).to.equal("medium");
    expect(testPizza.cheese).to.equal("regular");
    expect(testPizza.meatToppings).to.eql([]);
    expect(testPizza.vegToppings).to.eql([]);
  });
  it('has a method for adding a meat topping', function() {
    var testPizza = new Pizza("medium", "regular",[],[]);
    testPizza.addMeat("pepperoni");
    testPizza.addMeat("sausage");
    expect(testPizza.meatToppings[0]).to.equal("pepperoni");
    expect(testPizza.meatToppings[1]).to.equal("sausage");
  });
  it('has a method for adding a veggie topping', function() {
    var testPizza = new Pizza("medium", "regular",[],[]);
    testPizza.addVeg("green peppers");
    testPizza.addVeg("onions");
    expect(testPizza.vegToppings[0]).to.equal("green peppers");
    expect(testPizza.vegToppings[1]).to.equal("onions");
  });
  it('has a method for determining the cost of the Pizza', function() {
    var testPizza = new Pizza("medium", "regular",[],[]);
    testPizza.addVeg("green peppers");
    testPizza.addVeg("onions");
    testPizza.addMeat("pepperoni");
    testPizza.addMeat("sausage");
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(13);
    testPizza.cheese = "extra";
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(14);
    testPizza.pizzaSize = "large";
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(16);
    testPizza.pizzaSize = "extra large";
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(18);
    testPizza.pizzaSize = "small";
    testPizza.refreshCost();
    expect(testPizza.cost).to.equal(12);
  });
});

describe('Order', function() {
  it('creates an Order object with the correct properties', function() {
    var testOrder = new Order("Joe", "123 Main Street, Portland, 97214", "720-555-5555", "cash");
    expect(testOrder.customerName).to.equal("Joe");
    expect(testOrder.customerAddress).to.equal("123 Main Street, Portland, 97214");
    expect(testOrder.customerPhone).to.equal("720-555-5555");
    expect(testOrder.customerCashCredit).to.equal("cash");
    expect(testOrder.pizzas).to.eql([]);
  });
  it('has a method that adds a pizza to the Order.pizzas array', function() {
    var testOrder = new Order("Joe", "123 Main Street, Portland, 97214", "720-555-5555", "cash");
    var testPizza = new Pizza("medium", "regular",[],[]);
    testPizza.addVeg("green peppers");
    testPizza.addVeg("onions");
    testOrder.addPizza(testPizza);
    expect(testOrder.pizzas[0]).to.equal(testPizza);
    var testPizza2 = new Pizza("medium", "regular",[],[]);
    testPizza.addMeat("pepperoni");
    testPizza.addMeat("sausage");
    testOrder.addPizza(testPizza2);
    expect(testOrder.pizzas[1]).to.equal(testPizza2);
  });
  it('has a method for removing a pizza from Order.pizzas array', function() {
    var testOrder = new Order("Joe", "123 Main Street, Portland, 97214", "720-555-5555", "cash");
    var testPizza = new Pizza("medium", "regular",[],[]);
    testPizza.addVeg("green peppers");
    testPizza.addVeg("onions");
    testOrder.addPizza(testPizza);
    var testPizza2 = new Pizza("medium", "regular",[],[]);
    testPizza2.addMeat("pepperoni");
    testPizza2.addMeat("sausage");
    testOrder.addPizza(testPizza2);
    testOrder.removePizza(1);
    expect(testOrder.pizzas[0]).to.equal(testPizza2);
    expect(testOrder.pizzas[1]).to.equal(undefined);
  });
  it('has a method that determines the total cost of the order', function() {
    var testOrder = new Order("Joe", "123 Main Street, Portland, 97214", "720-555-5555", "cash");
    var testPizza = new Pizza("medium", "regular",[],[]);
    testPizza.addVeg("green peppers");
    testPizza.addVeg("onions");
    testOrder.addPizza(testPizza);
    var testPizza2 = new Pizza("large", "regular",[],[]);
    testPizza2.addMeat("pepperoni");
    testPizza2.addMeat("sausage");
    testOrder.addPizza(testPizza2);
    testOrder.determineTotalCost();
    expect(testOrder.totalCost).to.equal(24);
  });
});

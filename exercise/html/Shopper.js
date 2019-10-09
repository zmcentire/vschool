var shopper = {
    store: "Harmons",
    money: 100,
    groceryCart: ["chicken","eggs", "cheese","chips"],
    stillNeed: ["dip", "salsa"],
    saleIsRunning: true,
    groceryList: function() {
        return this.groceryCart + "" + this.stillNeed
    },

}

console.log(shopper.groceryList())
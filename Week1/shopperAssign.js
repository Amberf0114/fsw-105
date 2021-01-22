var shopper = {
    controlNumber: " 00928 ",
    shopperAge: 42,
    awareOfTarget: true,
    groceryCart: ["Orange Juice", "tangerines", "Tennessee team hat"],
    stimuliArrangement: function () {
        return this.controlNumber + "" + this.groceryCart;
    }
}

console.log ("Trial one obstacle: " + "Age " + shopper.shopperAge + " Control Number" + shopper.stimuliArrangement());
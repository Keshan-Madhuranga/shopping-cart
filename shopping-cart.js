const CartItem = require('./cart-item');

module.exports = class ShoppingCart {
    
    constructor(){
        this.items = [];
    }

    addProduct(product, quantity){
        let cartItem = new CartItem(product, quantity);
        this.items.push(cartItem);
    }
       
    getTotalPrice(){
        let totalPrice = 0;        
        for(let item of this.getCartItems()){
            totalPrice = totalPrice + item.getItemPrice();
        }
        return this.roundOff(totalPrice);
    }
    
    getTaxAmount(taxRate = 12.5){
        let tax = this.getTotalPrice() * (taxRate / 100);
        return this.roundOff(tax);
    }
    
    getTotalPriceWithTax(){
        return this.getTotalPrice() + this.getTaxAmount();
    }

    roundOff(value){
        let roundedOffAmount = +(Math.round(value + "e+2")  + "e-2");
        return roundedOffAmount; 
    }

    getCartItems(){
        return this.items;
    }
}
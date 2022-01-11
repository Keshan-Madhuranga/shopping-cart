module.exports = class CartItem {
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }
    
    getItemPrice(){
        return this.product.price * this.quantity;
    }
}
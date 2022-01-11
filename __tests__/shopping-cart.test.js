const { test, expect } = require('@jest/globals');
const ShoppingCart = require('../shopping-cart');
const Product = require('../product');
const CartItem = require('../cart-item');

test('unit test for addProduct', () => {
    const showerGel = new Product("Shower Gel", 49.99);
    const deodrant = new Product("Deodrant", 99.99);
    const shoppingCart = new ShoppingCart();

    shoppingCart.addProduct(showerGel, 1);
    shoppingCart.addProduct(deodrant, 1);

    expect(shoppingCart.getCartItems().length).toBe(2);
    expect(shoppingCart.getCartItems()[0].product.name).toBe("Shower Gel");
    expect(shoppingCart.getCartItems()[1].product.name).toBe("Deodrant");
    expect(shoppingCart.getCartItems()[0].product.price).toBe(49.99);
    expect(shoppingCart.getCartItems()[1].product.price).toBe(99.99);
})

test("unit test for getTotalPrice", () => {
    const shoppingCart = new ShoppingCart();    
    
    shoppingCart.getCartItems = jest.fn().mockReturnValue(
        [
            new CartItem(new Product("shower Gel", 49.99),2),
            new CartItem(new Product("Deodrant", 99.99),2)
        ]
    );
        
    const roundOff = jest.spyOn(shoppingCart, 'roundOff');
    const totalPrice = shoppingCart.getTotalPrice();
        
    expect(roundOff).toHaveBeenCalledWith(299.96);
    expect(totalPrice).toBe(299.96);
})
    
test('unit test for getTaxAmount (when default tax value given as 12.5)', () => {
    const shoppingCart = new ShoppingCart();
        
    shoppingCart.getTotalPrice = jest.fn().mockReturnValue(299.96);
    const roundOff = jest.spyOn(shoppingCart, 'roundOff');
        
    const taxAmount = shoppingCart.getTaxAmount();
        
    expect(roundOff).toHaveBeenCalledWith(37.495);
    expect(taxAmount).toBe(37.50);
})
    
test('unit test for getTotalPriceWithTax', () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.getTotalPrice = jest.fn().mockReturnValue(10.05);
    shoppingCart.getTaxAmount = jest.fn().mockReturnValue(2.01);
    
    expect(shoppingCart.getTotalPriceWithTax()).toBe(12.06);
})

test('unit test for roundOff', () => {
    const shoppingCart = new ShoppingCart();

    expect(shoppingCart.roundOff(22.568)).toBe(22.57);
    expect(shoppingCart.roundOff(20.113)).toBe(20.11);
    expect(shoppingCart.roundOff(20.205)).toBe(20.21);
    expect(shoppingCart.roundOff(20)).toBe(20.00);
})

test("unit test for getCartItems", () => {
    const shoppingCart = new ShoppingCart();

    const product = new Product("Shower Gel", 49.99);
    shoppingCart.addProduct(product, 1);
    const cartItem = new CartItem(product, 1);

    expect(shoppingCart.getCartItems()[0]).toMatchObject(cartItem);
})
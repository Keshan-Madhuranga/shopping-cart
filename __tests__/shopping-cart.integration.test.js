const { test, expect } = require('@jest/globals');
const ShoppingCart = require('../shopping-cart');
const Product = require('../product');

test('when 5 shower gels added then total price should be 249.95', () => {
    const showerGel = new Product("Shower Gel", 49.99);
    const shoppingCart = new ShoppingCart();
    
    shoppingCart.addProduct(showerGel, 5);

    expect(shoppingCart.getTotalPrice()).toBe(249.95);
})

test('when 5 and 3 shower gels added seperately then total price should be 399.92', () => {
    const showerGel = new Product("Shower Gel", 49.99);
    const shoppingCart = new ShoppingCart();

    shoppingCart.addProduct(showerGel, 5);
    shoppingCart.addProduct(showerGel, 3);

    expect(shoppingCart.getTotalPrice()).toBe(399.92);
})

test('when 2 shower gels and 2 deodrants added then tax amount should be 37.50 and total price should be 337.46', () => {
    const showerGel = new Product("Shower Gel", 49.99);
    const deodrant = new Product("Deodrant", 99.99);
    const shoppingCart = new ShoppingCart();

    shoppingCart.addProduct(showerGel, 2);
    shoppingCart.addProduct(deodrant, 2);

    expect(shoppingCart.getTaxAmount()).toBe(37.50);
    expect(shoppingCart.getTotalPriceWithTax()).toBe(337.46);
})
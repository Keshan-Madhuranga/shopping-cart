const { test, expect } = require('@jest/globals');
const CartItem = require('../cart-item');
const Product = require('../product');

test('unit test for getItemPrice', () => {
    let cartItem = new CartItem(new Product("Shower Gel", 49.99), 2);

    expect(cartItem.getItemPrice()).toBe(49.99*2);
})
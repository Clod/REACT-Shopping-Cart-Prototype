import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const SuperCoin = () => {

    // Define state variable for super coins
    const [superCoins, setSuperCoins] = useState(0);
    // Retrieve cart items from Redux store
    const cartItems = useSelector((state) => state.cart.cartItems);
    // Calculate the total number of super coins based on cart items
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    // Update the superCoins state based on the totalAmount: setting it 
    // to 10, 20, or 30 coins for different ranges of the total amount, 
    // and to 0 if the amount is below 100. 
    // This effect runs whenever the totalAmount changes.
    // as it invokes the setSuperCoins function to update the state variable,
    // which triggers a re-render of the component.
    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(20);
        } else if (totalAmount >= 300) {
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);

    return (
        <div className="super-coins" style={{ textAlign: 'center' }}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
        </div>
    );
};

export default SuperCoin;
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto px-4 py-8">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cart.map((item, index) => (
            <CartItem key={item.id} item={item} itemIndex={index} />
          ))}
          <div className="col-span-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Total Items:</p>
              <p>{cart.length}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Total Amount:</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <Link to="/checkout" className="block w-full mt-8 bg-blue-500 text-white py-3 rounded-md text-center hover:bg-blue-600 transition duration-300">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <Link to="/" className="text-blue-500 hover:underline">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

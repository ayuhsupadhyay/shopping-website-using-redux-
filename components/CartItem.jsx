import React from 'react';
import { useDispatch } from 'react-redux';
import { FcDeleteDatabase } from 'react-icons/fc';
import { remove } from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    console.log("Item Removed");
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-16 h-16 rounded-md mr-4" src={item.image} alt={item.title} />
          <div>
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <h2 className="text-sm text-gray-600 mb-2">{item.description.split(' ').slice(0, 10).join(' ') + (item.description.split(' ').length > 10 ? '...' : '')}</h2>
            <p className="text-sm font-semibold">${item.price}</p>
          </div>
        </div>
        <button onClick={removeFromCart} className="text-red-600 hover:text-red-800">
          <FcDeleteDatabase className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

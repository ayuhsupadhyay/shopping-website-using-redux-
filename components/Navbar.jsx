import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img className="h-8 w-8" src="https://via.placeholder.com/20" alt="Logo" />
        </NavLink>
        <div className="flex items-center">
          <NavLink to="/" className="mr-4">
            Home
          </NavLink>
          <NavLink to="/Cart" className="relative">
            <FaShoppingCart className="mr-2" />
            {cart.length > 0 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bouncy">

                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

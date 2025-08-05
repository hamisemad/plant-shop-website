import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import logo2 from '../assets/images/logo-2.png';
import SearchIcon from '../assets/images/search-alt-1-svgrepo-com.svg';
import FarmerIcon from '../assets/images/farmer-svgrepo-com.svg';
import CartIcon from '../assets/images/wheelbarrow-cart-garden-svgrepo-com.svg';
import allProducts from './allProducts';
import { getUser, logoutUser } from './auth';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStickyLogo, setShowStickyLogo] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { items } = useCart();
  const location = useLocation();

  
  useEffect(() => {
    setUser(getUser());
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyLogo(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (query.trim() === '') {
        setResults([]);
        return;
      }
      const lowerQuery = query.toLowerCase();
      const filtered = allProducts.filter(item =>
        item.name.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
    }, 300);
  }, [query]);

  const handleResultClick = (item) => {
    const encodedName = encodeURIComponent(item.name);
    navigate(`/product/${item.category}/${encodedName}`);
    setQuery('');
    setSearchOpen(false);
  };

const handleLogout = () => {
  logoutUser();
  setUser(null);
  setDropdownOpen(false);
  toast.info('Logged out');
  navigate('/');
};
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="z-40 relative bg-[#F7F6F2]">
        <nav className="px-8 py-4 flex items-center justify-center relative ">
          <div className="pr-[9em] sm:pr-0">
            <Link to="/">
              <img
                src={Logo}
                alt="Botanica Logo"
                className="w-[12em] sm:w-[16em] md:w-[18em] lg:w-[20em] mx-auto"
              />
            </Link>
          </div>

          <div className="hidden lg:flex absolute right-3 space-x-6 items-center p-4">
            <img
              src={SearchIcon}
              alt="search"
              title="search"
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 cursor-pointer"
            />

            <div className="relative z-[1000]" ref={menuRef}>
              {user ? (
                <>
                  <img
                    src={FarmerIcon}
                    alt="user"
                    title={user.username}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 cursor-pointer rounded-full border"
                  />
{dropdownOpen && (
  <div className="absolute top-0 right-12 w-36 bg-white border rounded-md shadow-md z-[9999]">
    <p className="px-4 py-2 text-sm text-gray-700">👋 {user.username}</p>
    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 text-sm"
    >
      Logout
    </button>
  </div>
)}  
 </>
              ) : (
                <Link to="/AuthPage">
                  <img
                    src={FarmerIcon}
                    alt="login"
                    title="Login / Sign up"
                    className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 cursor-pointer"
                  />
                </Link>
              )}
            </div>

            <Link to="/CartPage" className="relative">
              <img
                src={CartIcon}
                alt="cart"
                title="cart"
                className="w-8 h-8 sm:w-10 sm:h-10 hover:opacity-80 cursor-pointer"
              />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </Link>
          </div>

          <div className="lg:hidden absolute right-3 flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl focus:outline-none border-none rounded-md text-green-950"
            >
              ☰
            </button>

            <Link to="/CartPage" className="relative">
              <img
                src={CartIcon}
                alt="cart"
                title="cart"
                className="w-7 h-7 hover:opacity-80"
              />
              {items.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </header>

      <nav className="sticky top-0 z-50 bg-[#5D755E] py-5 lg:py-4 px-4 sm:px-8 shadow-md hidden lg:flex items-center justify-between">
        <div className={`transition-opacity duration-300 ${showStickyLogo ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <img src={logo2} alt="Botanica Logo" className="w-[8em] lg:w-[10em]" />
        </div>

        <ul className="flex justify-center flex-1 gap-7 sm:gap-10 text-[#F7F6F2] font-medium text-xl lg:text-2xl">
          <li><Link to="/plants" className="hover:text-orange-200 transition-all text-white">Plants</Link></li>
          <li><Link to="/pots" className="hover:text-orange-200 transition-all text-white">Pots & Planters</Link></li>
          <li><Link to="/gardenSupplies" className="hover:text-orange-200 transition-all text-white">Garden Supplies</Link></li>
          <li><Link to="/guides" className="hover:text-orange-200 transition-all text-white">Guides</Link></li>
        </ul>

        <div className="w-[8em] lg:w-[10em]"></div>
      </nav>

      {searchOpen && (
        <div className="bg-white z-40 flex flex-col items-center shadow-md px-8 py-6 border-t border-gray-300">
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="lg:w-[40em] w-full p-3 border bg-[#ECE8C2] text-green-950 border-gray-300 rounded mb-6"
          />
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto scrollbar-hide w-[25em] lg:w-[40em] cursor-pointer">
              {results.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleResultClick(item)}
                  className="flex items-center gap-4 border p-3 rounded hover:bg-gray-100"
                >
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="font-medium text-green-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>
              ))}
              {results.length === 0 && query && (
                <p className="text-gray-500 col-span-full text-center">No results found.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="lg:hidden bg-[#768068] text-[#F7F6F2] px-6 py-4 space-y-4 shadow-md">
          <ul className="space-y-3 text-lg font-medium">
            <li><Link to="/plants" className="hover:text-orange-200 text-white">Plants</Link></li>
            <li><Link to="/pots" className="hover:text-orange-200 text-white">Pots & Planters</Link></li>
            <li><Link to="/gardenSupplies" className="hover:text-orange-200 text-white">Garden Supplies</Link></li>
            <li><Link to="/guides" className="hover:text-orange-200 text-white">Guides</Link></li>
          </ul>
          <hr className="border-gray-300 my-2" />
          <ul className="space-y-3 text-lg font-medium">
            <li className="hover:text-orange-200 cursor-pointer" onClick={() => setSearchOpen(!searchOpen)}>Search</li>
            {user ? (
              <li onClick={handleLogout} className="hover:text-orange-200 text-white cursor-pointer">Logout</li>
            ) : (
              <Link to="/AuthPage"><li className="hover:text-orange-200 cursor-pointer text-white">Login / Sign Up</li></Link>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;

import React, { useState } from 'react';
import gardenSuppliesData from './gardenSuppliesData';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  { key: 'tools', name: 'Tools' },
  { key: 'soilAndFertilizer', name: 'Soil & Fertilizer' },
  { key: 'accessories', name: 'Accessories' },
  { key: 'irrigation', name: 'Irrigation' },
  { key: 'pestControl', name: 'Pest Control' },
  { key: 'giftBoxes', name: 'Gift Boxes' },
];

const ProductCard = ({ product, index, activeCategory }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#5D755E] transition duration-200 flex flex-col items-center w-full max-w-[250px]"
    >
      <Link to={`/product/${activeCategory}/${encodeURIComponent(product.name)}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[3/4] sm:h-72 object-cover rounded"
        />
      </Link>
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-lg text-green-950">{product.name}</h3>
        <p className="text-green-700 font-medium mt-1 text-lg">{product.price}</p>
      </div>
    </motion.div>
  );
};

function GardenSupplies() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category');

  const defaultCategory = categories.some(c => c.key === initialCategory)
    ? initialCategory
    : 'tools';

  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const products = gardenSuppliesData[activeCategory];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-6 bg-[#DBE7CD] text-green-950 lg:sticky lg:top-0 lg:h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-center lg:text-left">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                navigate(`?category=${cat.key}`);
              }}
              className={`cursor-pointer px-3 py-2 rounded transition ${
                activeCategory === cat.key
                  ? 'bg-[#F7F6F2] font-semibold'
                  : 'hover:bg-[#F7F6F2]'
              }`}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-6 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-green-800">Garden Supplies</h1>
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          {categories.find((c) => c.key === activeCategory)?.name}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {products.map((product, index) => (
            <ProductCard
              key={product.name + index}
              product={product}
              index={index}
              activeCategory={activeCategory}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default GardenSupplies;

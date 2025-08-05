import React, { useRef } from 'react';
import plantsData from './plantsData';
import potProducts from './potsData';
import gardenSuppliesData from './gardenSuppliesData';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

function Featured() {
  const bestSellers = [
    plantsData.indoor[1],
    plantsData.outdoor[0],
    potProducts.ceramic[1],
    potProducts.selfWatering[0],
    potProducts.selfWatering[6],
    gardenSuppliesData.giftBoxes[0],
    plantsData.herbs[0],
    potProducts.decorative[1],
    potProducts.plastic?.find(p => p.name.includes("Terracotta-Colored Pots")),
    plantsData.fruit?.find(p => p.name === "Guava"),
    plantsData.fruit?.find(p => p.name === "Mullberries"),
    plantsData.flowering?.find(p => p.name === "Gazania"),
    gardenSuppliesData.giftBoxes?.find(p => p.name === "Garden Tools Starter Set"),
    plantsData.air?.find(p => p.name === "Devil's Ivy"),
  ];

  const newArrivals = [
    plantsData.succulents[1],
    plantsData.air[0],
    potProducts.selfWatering[2],
    potProducts.hanging[0],
    potProducts.ceramic[9],
    gardenSuppliesData.accessories[2],
    gardenSuppliesData.accessories[7],
    gardenSuppliesData.pestControl[0],
    plantsData.herbs?.find(p => p.name === "Cat Mint"),
    plantsData.flowering?.find(p => p.name === "Zinnia"),
    plantsData.herbs?.find(p => p.name === "Lemon Balm"),
    plantsData.herbs?.find(p => p.name === "Nigella"),
  ];

  const botanicaSpecials = [
    plantsData.flowering[11],
    plantsData.flowering[9],
    potProducts.decorative[0],
    potProducts.selfWatering[8],
    gardenSuppliesData.giftBoxes[3],
    gardenSuppliesData.soilAndFertilizer[2],
    plantsData.fruit[1],
    gardenSuppliesData.giftBoxes?.[5],
  ];

  const renderSection = (title, items) => (
    <section className="mb-12 p-12 text-center">
      <h2 className="text-3xl font-extrabold text-green-800 bg-clip-text tracking-wider uppercase border-b-4 border-green-500 inline-block mx-auto mb-6 ">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:p-20">
        {items.filter(Boolean).map((item, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false });
          const encodedName = encodeURIComponent(item.name);

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link
                to={`/product/${item.category}/${encodedName}`}
                className="bg-white rounded-lg py-4 shadow-md hover:shadow-lg hover:shadow-[#5D755E] transition duration-200 flex flex-col items-center w-full max-w-[300px]"
              >
<img
  src={item.image || 'https://via.placeholder.com/250'}
  alt={item.name}
  loading="lazy"
  className="aspect-[3/4] sm:h-72 object-cover rounded w-full"
/>
<div className="mt-4 text-center flex-1 flex flex-col justify-between w-full">
  <h3 className="font-semibold text-sm sm:text-lg text-green-950 line-clamp-2 h-12">
    {item.name}
  </h3>
  <p className="text-green-700 text-sm sm:text-lg mt-1">{item.price}</p>
</div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl sm:text-5xl font-bold mb-10 text-center text-green-900">Shop Botanica</h1>
      {renderSection('Best Sellers', bestSellers)}
      {renderSection('New Arrivals', newArrivals)}
      {renderSection('Botanica Specials', botanicaSpecials)}
    </div>
  );
}

export default Featured;

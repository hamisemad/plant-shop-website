import HeroVideo from '../assets/videos/HeroVideo.mp4';
import fruitTree from '../assets/images/fruit tree.png';
import cactus from '../assets/images/cactus.png';
import airPurifyingPlant from '../assets/images/air purifying plant.png';
import pot from '../assets/images/pot.png';
import gardeningTools from '../assets/images/gardening tools.png';
import herbs from '../assets/images/Herbs.png';
import catMint from '../assets/images/catmint.jpeg';
import guava from '../assets/images/guava.jpeg';
import nigella from '../assets/images/nigella.jpeg';
import mullberries from '../assets/images/mullberries.jpeg';
import zinnia from '../assets/images/zinnia.jpeg';
import lemonBalm from '../assets/images/lemonBalm.jpeg';
import vasePlant from '../assets/images/vase-plant-with-outdoor-patio.jpg';
import holdingPlants from '../assets/images/holding-plants.jpg';
import growingFlowers from '../assets/images/growing-flowers.jpg';
import wallpaper from '../assets/images/wallpaper.jpeg';
import rightArrow from '../assets/images/right-arrow-svgrepo-com (1).svg';
import illustration from '../assets/images/plants-shop.png';
import terracotaPots from '../assets/images/terracota-pots.webp';
import devilsIvy from '../assets/images/DevilsIvy.jpeg';
import giftBox from '../assets/images/Gift Box - Gardener.jpeg';
import gazania from '../assets/images/gazania.png';
import sectionBg from '../assets/images/image.png';


import catMintHover from '../assets/images/catmint-hover.jpeg';
import guavaHover from '../assets/images/guava-hover.jpeg';
import nigellaHover from '../assets/images/nigella-hover.jpeg';
import mullberriesHover from '../assets/images/mullberries-hover.jpeg';
import zinniaHover from '../assets/images/zinnia-hover.jpeg';
import lemonBalmHover from '../assets/images/lemon-balm-hover.jpeg';

import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


function Home() {
  return (
    
 <>
      <Helmet>
        <title>Botanica | Home</title>
        <meta name="description" content="Explore a wide variety of beautiful plants at Botanica." />
        <meta name="keywords" content="plants, botanica, houseplants, plant shop" />
      </Helmet>

    <section>
      <div className="relative w-full max-h-[35em] overflow-hidden">
        <video
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
          alt="herovideo"
          className="w-full object-cover" 
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40 px-4">
          <h1 className="text-2xl md:text-5xl lg:text-7xl mt-5 font-bold mb-7">Flourish Every Season</h1>
          <p className="text-xs sm:text-2xl font-semibold">Your source for beautiful, thriving plants</p>
        <Link to="/featured"> <button className="bg-[#F7F6F2] text-green-950 font-bold border-0 rounded-full transition duration-300
  px-6 py-3 text-base
  sm:py-4 sm:text-lg
  md:px-12 md:py-5 md:text-xl
  lg:px-16 lg:text-2xl
  hover:bg-[#5D755E] hover:text-white
  mt-6 mb-4">
            Shop Now
          </button>
        </Link>
        </div>
      </div>

 <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 py-14 px-5 bg-white text-center cursor-pointer"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Link to="/plants?category=fruit">
        <motion.div variants={cardVariants}>
          <div className="relative group w-44 mx-auto mb-4">
            <img
              src={fruitTree}
              className="w-full h-44 object-contain"
              alt="Fruit Trees"
            />
            <div className="absolute inset-0 bg-white bg-opacity-30 group-hover:bg-opacity-0 transition duration-300 rounded-md"></div>
          </div>
          <h3 className="font-semibold text-lg text-green-950 mb-3">
            FRUIT TREES
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Sweetness from your own garden.
          </p>
        </motion.div>
      </Link>

      <Link to="/plants?category=succulents">
        <motion.div variants={cardVariants}>
          <div className="relative group w-44 mx-auto mb-4">
            <img
              src={cactus}
              className="w-full h-44 object-contain"
              alt="Cacti & Succulents"
            />
            <div className="absolute inset-0 bg-white bg-opacity-30 group-hover:bg-opacity-0 transition duration-300 rounded-md"></div>
          </div>
          <h3 className="font-semibold text-lg text-green-950 mb-3">
            CACTI & SUCCULENTS
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Bold. Tough. Beautiful.
          </p>
        </motion.div>
      </Link>

      <Link to="/plants?category=air">
        <motion.div variants={cardVariants}>
          <div className="relative group w-44 mx-auto mb-4">
            <img
              src={airPurifyingPlant}
              className="w-full h-44 object-contain"
              alt="Air Purifying Plants"
            />
            <div className="absolute inset-0 bg-white bg-opacity-30 group-hover:bg-opacity-0 transition duration-300 rounded-md"></div>
          </div>
          <h3 className="font-semibold text-lg text-green-950 mb-3">
            AIR PURIFYING PLANTS
          </h3>
          <p className="text-sm text-gray-600 mb-6">Fresh air, naturally.</p>
        </motion.div>
      </Link>

      <Link to="/pots">
        <motion.div variants={cardVariants}>
          <div className="relative group w-44 mx-auto mb-4">
            <img
              src={pot}
              className="w-full h-44 object-contain"
              alt="Pots & Planters"
            />
            <div className="absolute inset-0 bg-white bg-opacity-30 group-hover:bg-opacity-0 transition duration-300 rounded-md"></div>
          </div>
          <h3 className="font-semibold text-lg text-green-950 mb-3">
            POTS & PLANTERS
          </h3>
          <p className="text-sm text-gray-600 mb-6">Style your roots.</p>
        </motion.div>
      </Link>

      <Link to="/gardenSupplies?category=tools">
        <motion.div variants={cardVariants}>
          <div className="relative group w-44 mx-auto mb-4">
            <img
              src={gardeningTools}
              className="w-full h-44 object-contain"
              alt="Gardening Tools"
            />
            <div className="absolute inset-0 bg-white bg-opacity-30 group-hover:bg-opacity-0 transition duration-300 rounded-md"></div>
          </div>
          <h3 className="font-semibold text-lg text-green-950 mb-3">
            GARDENING TOOLS
          </h3>
          <p className="text-sm text-gray-600 mb-6">Grow hands-on.</p>
        </motion.div>
      </Link>

      <Link to="/plants?category=herbs">
        <motion.div variants={cardVariants}>
          <div className="relative group w-44 mx-auto mb-4">
            <img
              src={herbs}
              className="w-full h-44 object-contain"
              alt="Kitchen Herbs"
            />
            <div className="absolute inset-0 bg-white bg-opacity-30 group-hover:bg-opacity-0 transition duration-300 rounded-md"></div>
          </div>
          <h3 className="font-semibold text-lg text-green-950 mb-3">
            KITCHEN HERBS
          </h3>
          <p className="text-sm text-gray-600 mb-6">Fresh flavor, always.</p>
        </motion.div>
      </Link>
    </motion.div>
      
      <motion.div
  variants={containerVariants}
   initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
  className="bg-[#F7F6F2] py-10 px-10"
>
      <h2 className='text-green-950 text-2xl mb-4 underline underline-offset-8 '>NEWEST ARRIVALS</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 py-10 px-4 text-center mt-7 cursor-pointer'>

        <Link to={`/product/herbs/${encodeURIComponent("Cat Mint")}`}>
        <div className="group text-center">
       <motion.div variants={cardVariants}>
          <div className="relative mx-auto">
            <img src={catMint} alt="Cat Mint" className="w-full h-full object-cover rounded-md group-hover:opacity-0 transition-opacity duration-300"  loading="lazy"/>
            <img src={catMintHover} alt="Cat Mint Hover" className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"  loading="lazy" />
          </div>
       </motion.div>

          <h3 className="text-green-950 font-semibold mt-2 text-2xl">Cat Mint</h3>
          <p className="text-gray-600">EGP 75</p>
        </div>
        </Link>

       <Link to={`/product/fruit/${encodeURIComponent("Guava Tree")}`}>
        <div className="group text-center">
        <motion.div variants={cardVariants}>
          <div className="relative mx-auto">
            <img src={guava} alt="Guava"  loading="lazy"
            className="w-full h-full object-cover rounded-md group-hover:opacity-0 transition-opacity duration-300" />
            <img src={guavaHover} alt="Guava Hover" 
             loading="lazy" 
             className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
          </div>
        </motion.div>
          <h3 className="text-green-950 font-semibold mt-2 text-2xl">Guava</h3>
          <p className="text-gray-600">EGP 90</p>
        </div>
        </Link>

      <Link to={`/product/herbs/${encodeURIComponent("Nigella")}`}>
        <div className="group text-center">
        <motion.div variants={cardVariants}>
          <div className="relative mx-auto">
            <img src={nigella} alt="Nigella"  loading="lazy"
            className="w-full h-full object-cover rounded-md group-hover:opacity-0 transition-opacity duration-300" />
            <img src={nigellaHover} alt="Nigella Hover"  loading="lazy"
             className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
          </div>
        </motion.div>
          <h3 className="text-green-950 font-semibold mt-2 text-2xl">Nigella</h3>
          <p className="text-gray-600">EGP 60</p>
        </div>
        </Link>

      <Link to={`/product/fruit/${encodeURIComponent("Mulberry Tree")}`}>
        <div className="group text-center">
        <motion.div variants={cardVariants}>
          <div className="relative  mx-auto">
            <img src={mullberries} alt="Mullberries"  loading="lazy"
             className="w-full h-full object-cover rounded-md group-hover:opacity-0 transition-opacity duration-300" />
            <img src={mullberriesHover} alt="Mullberries Hover"  loading="lazy"
             className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
          </div>
        </motion.div>
          <h3 className="text-green-950 font-semibold mt-2 text-2xl">Mullberries</h3>
          <p className="text-gray-600">EGP 80</p>
        </div>
        </Link>

      <Link to={`/product/flowering/${encodeURIComponent("Zinnia")}`}>
        <div className="group text-center">
      <motion.div variants={cardVariants}>
          <div className="relative mx-auto">
            <img src={zinnia} alt="Zinnia"  loading="lazy"
            className="w-full h-full object-cover rounded-md group-hover:opacity-0 transition-opacity duration-300" />
            <img src={zinniaHover} alt="Zinnia Hover"  loading="lazy"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
          </div>
      </motion.div>
          <h3 className="text-green-950 font-semibold mt-2 text-2xl">Zinnia</h3>
          <p className="text-gray-600">EGP 50</p>
        </div>
         </Link>

      <Link to={`/product/herbs/${encodeURIComponent("Lemon Balm")}`}>
        <div className="group text-center">
        <motion.div variants={cardVariants}>
          <div className="relative mx-auto">
            <img src={lemonBalm} alt="Lemon Balm"  loading="lazy"
             className="w-full h-full object-cover rounded-md group-hover:opacity-0 transition-opacity duration-300" />
            <img src={lemonBalmHover} alt="Lemon Balm Hover"  loading="lazy"
             className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
          </div>
        </motion.div>
          <h3 className="text-green-950 font-semibold mt-2 text-2xl">Lemon Balm</h3>
          <p className="text-gray-600">EGP 70</p>
        </div>
        </Link>

      </div>
      </motion.div>

 <motion.div
  variants={containerVariants}
   initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}

  className="p-6 sm:p-10 lg:p-16 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${wallpaper})` }}
>
  <h2 className="text-green-950 text-2xl mb-7 underline underline-offset-8">
    LATEST GUIDES
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
     <Link to={`/guides/choosing-plant`}>
    <div className="relative group max-w-md mx-auto">
     <motion.div variants={cardVariants}>
      <div className="transition-all duration-200 group-hover:brightness-75">
        <img src={vasePlant} className="w-full h-auto" alt="Vase Plant" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={rightArrow}
          alt="arrow"
          className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#5D755E]/80 h-10 flex items-center justify-center">
        <span className="text-white text-center text-md md:text-lg">
          How to Choose the Right Plant for Your Home
        </span>
        
      </div>
          </motion.div>
    </div>
    </Link>
    <Link to={`/guides/indoor-care`}>
    <div className="relative group max-w-md mx-auto">
    <motion.div variants={cardVariants}>
      <div className="transition-all duration-200 group-hover:brightness-75">
        <img src={holdingPlants} className="w-full h-auto" alt="Holding Plants" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={rightArrow}
          alt="arrow"
          className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#5D755E]/80 h-10 flex items-center justify-center">
        <span className="text-white text-center text-lg">Indoor Plant Care Tips</span>
      </div>
    </motion.div>

    </div>
    </Link>

     <Link to={`/guides/growing-flowers`}>
    <div className="relative group sm:col-span-2 lg:col-span-1 max-w-md mx-auto">
    <motion.div variants={cardVariants}>
      <div className="transition-all duration-200 group-hover:brightness-75">
        <img src={growingFlowers} className="w-full h-auto" alt="Growing Flowers" />
      </div>


      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={rightArrow}
          alt="arrow"
          className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#5D755E]/80 h-10 flex items-center justify-center">
        <span className="text-white text-center text-lg">Growing Flowers from Seeds</span>
      </div>
   </motion.div>

    </div>
    </Link>
  </div>
 </motion.div>

<div className="px-6 sm:px-10 lg:px-20 py-12 bg-[#F7F6F2]">
  <h2 className="text-green-950 text-3xl mb-7 underline underline-offset-8">
    BEST SELLERS
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">
      
      <Link to={`/product/plastic/${encodeURIComponent("Terracotta-Colored Pots")}`}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{
        y: -24,
       scale: 1.02,
      transition: { duration: 0.2 }
      }}

          viewport={{ once: false }}
          className="bg-white p-4 mb-7 shadow-md rounded-md text-center "
        >
          <img src={terracotaPots} alt="Product 1" className="w-full h-48 object-cover rounded" />
          <h3 className="text-lg font-semibold text-green-950 mt-3">Terracota Pots</h3>
          <p className="text-gray-600">EGP 80</p>
        </motion.div>
      </Link>

      <Link to={`/product/indoor/${encodeURIComponent("Devil's Ivy")}`}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{
           y: -24,
          scale: 1.02,
          transition: { duration: 0.2 }
         }}

          viewport={{ once: false }}
          className="bg-white p-4 mb-7 shadow-md rounded-md text-center "
        >
          <img src={devilsIvy} alt="Product 2" className="w-full h-48 object-cover rounded" />
          <h3 className="text-lg font-semibold text-green-950 mt-3">Devil's Ivy</h3>
          <p className="text-gray-600">EGP 95</p>
        </motion.div>
      </Link>

      <Link to={`/product/flowering/${encodeURIComponent("Gazania")}`}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{
           y: -24,
            scale: 1.02,
             transition: { duration: 0.2 }
          }}

          viewport={{ once: false }}
          className="bg-white p-4 shadow-md rounded-md text-center "
        >
          <img src={gazania} alt="Product 3" className="w-full h-48 object-cover rounded" />
          <h3 className="text-lg font-semibold text-green-950 mt-3">Gazania</h3>
          <p className="text-gray-600">EGP 70</p>
        </motion.div>
      </Link>

      <Link to={`/product/giftBoxes/${encodeURIComponent("Garden Tools Starter Set")}`}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{
           y: -24,
            scale: 1.02,
             transition: { duration: 0.2 }
          }}

          viewport={{ once: false }}
          className="bg-white p-4 shadow-md rounded-md text-center "
        >
          <img src={giftBox} alt="Product 4" className="w-full h-48 object-cover rounded" />
          <h3 className="text-lg font-semibold text-green-950 mt-3">Garden Tools Starter Set</h3>
          <p className="text-gray-600">EGP 60</p>
        </motion.div>
      </Link>
    </div>

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: false }}
      className="lg:block lg:ml-10"
    >
      <img src={illustration} alt="Plant Illustration" className="w-full h-full object-cover" />
    </motion.div>
  </div>
</div>

<div
  className="bg-center bg-no-repeat bg-cover text-center px-4 sm:px-10 py-20"
  style={{ backgroundImage: `url(${sectionBg})` }}
>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Botanica</h2>

  <p className="text-lg sm:text-2xl font-semibold mb-6 text-white">
    Rooted in Nature. Grown with Love.
  </p>

  <p className="text-sm sm:text-3xl max-w-3xl mx-auto leading-relaxed text-white p-4 rounded-md">
    At Botanica, we believe plants are more than just décor they're a way to slow down,
    connect with nature, and bring life into your everyday spaces. 
  </p>
</div>


<footer className="bg-[#5D755E] text-[#F7F6F2] py-12 px-6 sm:px-10">
  <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm sm:text-base">
    
    <div>
      <h3 className="font-bold mb-4 text-2xl">Get in touch</h3>
      <ul className="space-y-2">
        <li className="hover:text-orange-200 cursor-pointer transition-colors">About us</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Contact us</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">FAQ</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4 text-2xl">Let us help</h3>
      <ul className="space-y-2">
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Botanica Guides</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Payment policy</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Shipping policy</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Returns policy</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Terms of service</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Privacy policy</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4 text-2xl">Sell with us</h3>
      <ul className="space-y-2">
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Sell with us</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Wholesale</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Bulk Orders</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4 text-2xl">Social media</h3>
      <ul className="space-y-2">
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Facebook</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">Instagram</li>
        <li className="hover:text-orange-200 cursor-pointer transition-colors">WhatsApp</li>
      </ul>
    </div>
  </div>
</footer>

 </section>

 </>
  );
}

export default Home;

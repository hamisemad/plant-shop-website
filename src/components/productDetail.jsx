import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import allProducts from './allProducts';
import Lottie from 'lottie-react';
import flowerBranch from '../assets/animations/Plant recolor.json';
import CartIcon from '../assets/images/wheelbarrow-cart-garden-svgrepo-com (1).svg';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { useCart } from 'react-use-cart'; 
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { isLoggedIn } from './auth';
import { motion} from 'framer-motion';
import { ClipLoader } from "react-spinners";

function ProductDetail() {
  const { addItem } = useCart(); // ⬅️ Destructure addItem from useCart
  const { productName } = useParams();
  const decodedName = decodeURIComponent(productName);
  const product = allProducts.find((p) => p.name === decodedName);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const increase = () => setQuantity((prev) => Math.min(prev + 1, 999));
  const decrease = () => setQuantity((prev) => Math.max(prev - 1, 1));

const handleAddToCart =  async () => {
    setLoading(true);

    // Simulate async action (e.g. API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
  
   if (!isLoggedIn()) {
      toast.warning("Please login to add items to cart");
      navigate("/AuthPage");
        return;
    }

  if (product) {
    const productWithNumericPrice = {
      ...product,
      price: Number(product.price), 
    };
    addItem(productWithNumericPrice, quantity);
    console.log("Toast should appear now!");
     toast.success("Item added to cart!");
  }
};


const handleBuyNow = () => {

   if (!isLoggedIn()) {
      toast.warning("Please login to use Buy Now");
      navigate("/AuthPage");
      return;
    }

  const productToBuyNow = {
    ...product,
    quantity,
    price: Number(product.price),
  };

  navigate('/checkOut', {
    state: {
      productToBuyNow,
      mode: 'Buy Now',
    },
  });
};



  if (!product) {
    return (
      <div className="p-6 text-center text-red-600 text-xl">
        Product not found.
      </div>
    );
  }

  return (
         <>

      <Helmet>
        <title>{product.name} | Botanica</title>
        <meta name="description" content={`Buy ${product.name} at Botanica. ${product.description}`} />
      </Helmet>
    <div className="mt-10">
      <div className="max-w-5xl mx-auto p-6 relative">
        <div className="flex flex-col md:flex-row gap-16 relative">
          <div className="w-full md:w-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-[25em] h-auto rounded object-cover"
            />
          </div>

          <div className="flex-1 mt-10 relative">
            <h1 className="text-4xl font-bold text-green-900 mb-3">{product.name}</h1>
            <p className="text-gray-700 mb-5 leading-relaxed text-2xl">{product.description}</p>
            <p className="text-xl text-green-700 font-semibold mb-4">price: {product.price} egp</p>

            <div className="inline-flex border border-gray-400 rounded overflow-hidden mb-4">
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-12 h-16 text-center leading-[3rem] text-xl text-black bg-white border-r border-gray-600 focus:outline-none"
                style={{ MozAppearance: 'textfield' }}
              />

              <div className="flex flex-col">
                <button
                  onClick={increase}
                  className="w-14 h-8 flex items-center justify-center border-b hover:border-b-gray-600 border-gray-600 bg-white hover:bg-gray-100 active:scale-95 transition-transform focus:outline-none"
                >
                  <HiChevronUp className="w-4 h-4 text-black" />
                </button>

                <button
                  onClick={decrease}
                  className="w-14 h-8 flex items-center justify-center bg-white hover:bg-gray-100 active:scale-95 transition-transform focus:outline-none select-none"
                >
                  <HiChevronDown className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
           <motion.button
            whileHover={{ scale: 1.05 }}
              disabled={loading}
               onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 bg-[#5D755E] hover:bg-gray-300 hover:text-green-950 border-0 transition-all duration-200 text-white font-semibold w-44 py-3 px-6 rounded focus:outline-none"
              >
                {loading ? (
            <ClipLoader color="#ffffff" size={20} />
             ) : (
              <>
          Add to Cart
            
                <img
                  src={CartIcon}
                  alt="cart"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                </>
            )}
              
            </motion.button>

                      <motion.button
            whileHover={{ scale: 1.05 }}

                onClick={handleBuyNow}
               className="bg-[#93B792] hover:bg-gray-300 hover:text-green-950 border-0 transition-all duration-200 text-white font-semibold w-36 py-3 px-6 rounded focus:outline-none">
                Buy Now
           </motion.button>

            </div>
          </div>
        </div>
      </div>

      {product.careTips && (
        <div className="p-9 mt-10 bg-[#F8F4E3]">
          <h2 className="text-center text-5xl font-bold text-green-950 mb-10">Care Tips</h2>

          <div className="flex flex-col md:flex-row items-start gap-10 justify-center">
            <div className="bg-yellow-100 p-6 rounded-lg shadow-lg border-l-4 border-yellow-300 max-w-xl text-green-900 text-xl leading-relaxed font-medium">
              <p>{product.careTips}</p>
            </div>

            <div className="w-[200px] opacity-90 pointer-events-none">
              <Lottie animationData={flowerBranch} autoplay />
            </div>
          </div>
        </div>
      )}
    </div>
     </>
  );
}

export default ProductDetail;

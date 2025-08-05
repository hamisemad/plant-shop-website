import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import wallpaper from '../assets/images/wallpaper.jpeg';
import { useCart } from 'react-use-cart';
import { toast } from "react-toastify";
import Lottie from 'lottie-react';
import emptyBox from '../assets/animations/empty.json';
import { ClipLoader } from "react-spinners"; 


const CartPage = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  const [loading, setLoading] = useState(false);

const handleCheckOut = async () => {
  setLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  setLoading(false);

  navigate('/checkOut', { state: { giftCardApplied } });
};

  const navigate = useNavigate();
  const [giftCardApplied, setGiftCardApplied] = useState(false);
  const giftCardValue = 50;
  
    useEffect(() => {
    const savedGiftCard = localStorage.getItem("giftCardApplied");
    if (savedGiftCard === "true") {
      setGiftCardApplied(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("giftCardApplied", giftCardApplied);
  }, [giftCardApplied]);


  const totalWithGift = cartTotal + (giftCardApplied ? giftCardValue : 0);

  const handleQuantityChange = (itemId, action) => {
    const item = items.find((i) => i.id === itemId);
    if (!item) return;

    if (action === 'decrease' && item.quantity > 1) {
      updateItemQuantity(itemId, item.quantity - 1);
    } else if (action === 'increase') {
      updateItemQuantity(itemId, item.quantity + 1);
    }
  };

  if (isEmpty) {
    return (
      <div className="text-center py-20" >
        <div className="mb-7">
          <h1 className="text-4xl font-light text-green-950 mb-8">CART</h1>
          <h2 className="text-l sm:text-2xl font-semibold text-green-950 p-4 mb-4">Looks like your cart is empty. Start exploring our garden treasures!</h2>
        </div>
        <Link to="/" className="bg-[#5D755E] text-white px-4 py-2 rounded hover:opacity-75">
          Back to Home
        </Link>
     <div className='flex justify-center items-center'>
      <Lottie animationData={emptyBox} autoplay className='w-[20em]' />
      </div>

      </div>
    );
  }

  return (
    <div className="mx-auto p-4 md:p-6 text-green-950 bg-cover min-h-screen" style={{ backgroundImage: `url(${wallpaper})` }}>
      <h1 className="text-4xl font-light text-center mb-8">CART</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 border p-4 md:p-6 rounded bg-[#F7F6F2] shadow-sm">
          <h2 className="text-xl font-medium mb-4">
            Your items ({items.length} item{items.length > 1 ? 's' : ''})
          </h2>

          {/* Mobile View */}
          <div className="space-y-4 lg:hidden px-2">
            {items.map(item => {
              const unitPrice = Number(item.price);
              const subtotal = unitPrice * item.quantity;

              return (
                <div key={item.id} className="flex flex-col border rounded-xl p-4 bg-white shadow-md">
                  <div className="flex gap-4">
                    <Link to={`/product/${item.category}/${encodeURIComponent(item.name)}`}>
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md border" />
                    </Link>
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-base font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">Unit Price: {unitPrice.toFixed(2)} EGP</p>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button onClick={() => handleQuantityChange(item.id, 'decrease')} className="w-6 h-6 flex items-center justify-center text-sm border rounded">−</button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, 'increase')} className="w-6 h-6 flex items-center justify-center text-sm border rounded">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 text-xl font-bold self-start">×</button>
                  </div>
                  <div className="mt-3 text-right">
                    <p className="text-sm font-semibold">Subtotal: {subtotal.toFixed(2)} EGP</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View */}
          <table className="w-full border-collapse hidden lg:table">
            <thead>
              <tr className="border-b text-left text-sm text-gray-600">
                <th className="py-2">ITEM</th>
                <th>DESCRIPTION</th>
                <th>UNIT PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => {
                const unitPrice = Number(item.price);
                const subtotal = unitPrice * item.quantity;

                return (
                  <tr key={item.id} className="border-b text-sm">
                    <td className="py-4">
                      <Link to={`/product/${item.category}/${encodeURIComponent(item.name)}`}>
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                      </Link>
                    </td>
                    <td>{item.name}</td>
                    <td>EGP {unitPrice.toFixed(2)}</td>
                    <td>
                      <div className="flex items-center border w-20">
                        <button className="w-6 text-center" onClick={() => handleQuantityChange(item.id, 'decrease')}>−</button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button className="w-6 text-center" onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                      </div>
                    </td>
                    <td>EGP {subtotal.toFixed(2)}</td>
                    <td>
                      <button className="text-red-500 text-xl" onClick={() => removeItem(item.id)}>×</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center gap-3">
            <input type="text" placeholder="Coupon code" className="border p-2 rounded sm:w-48 text-black" />
            <button className="bg-[#5D755E] text-white px-4 py-2 rounded hover:opacity-75 w-[10em]">
              Apply coupon
            </button>
<button
  onClick={() => {
    if (!giftCardApplied) {
      setGiftCardApplied(true);
      toast.success("Gift Card Added!");
    } else {
      setGiftCardApplied(false);
      toast.info("Gift Card Removed!");
    }
  }}
  className={`border px-4 py-2 rounded w-full sm:w-auto ${
    giftCardApplied
      ? ' text-red-700 border-red-300 hover:border-red-300 hover:bg-yellow-100'
      : 'border-gray-700 hover:bg-[#D2CEC5] hover:border-gray-700'
  }`}
>
  {giftCardApplied ? "Remove Gift Card" : "Add Gift Card (+EGP 50.00) 🎁"}
</button>
            <button onClick={emptyCart} className="border border-gray-700 px-4 py-2 rounded hover:border-green-950 w-full sm:w-auto">
              Empty Cart
            </button>
          </div>
        </div>

        {/* Totals Section */}
        <div className="border p-4 md:p-6 rounded bg-[#F7F6F2] shadow-sm">
          <h3 className="text-xl font-medium mb-4">Totals</h3>

          <div className="flex justify-between font-bold mb-2">
            <span>Subtotal</span>
            <span>EGP {cartTotal.toFixed(2)}</span>
          </div>

          {giftCardApplied && (
            <div className="flex justify-between text-green-700 mb-2 font-semibold">
              <span>Gift Card</span>
              <span>+ EGP {giftCardValue.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between font-bold mb-4 text-lg border-t pt-2">
            <span>Total</span>
            <span>EGP {totalWithGift.toFixed(2)}</span>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Shipping fees are calculated upon address selection.
          </p>

<button
  onClick={handleCheckOut}
  className="bg-[#5D755E] w-full text-white py-3 rounded hover:opacity-75"
  disabled={loading}
>
  {loading ? (
    <ClipLoader color="#ffffff" size={20} />
  ) : (
    "Proceed to checkout"
  )}
</button>
          <Link to="/" className="block mt-3 text-center border text-green-950 border-gray-700 py-2 rounded hover:bg-gray-100">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

import { Formik } from "formik";
import * as Yup from "yup";
import { useCart } from "react-use-cart";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";


const CheckOut = () => {
  const { items, cartTotal, emptyCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { productToBuyNow, mode } = location.state || {};

  const SHIPPING_FEE = 70;
  
  const giftCardApplied = localStorage.getItem("giftCardApplied") === "true";
  const giftCardCharge = giftCardApplied ? 50 : 0;

  const isBuyNow = mode === "Buy Now";
  const products = isBuyNow ? [productToBuyNow] : items;

  const subtotal = isBuyNow
    ? Number(productToBuyNow.price) * (productToBuyNow.quantity || 1)
    : cartTotal;

const total = subtotal + giftCardCharge + SHIPPING_FEE;

  if (!isBuyNow && items.length === 0) {
    navigate("/CartPage");
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-md shadow-md mt-6 text-green-950">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

      <div className="mb-8 border border-green-200 rounded p-4 bg-[#f7f6f2]">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
<div className="space-y-4">
  {products.map((item) => {
    const unitPrice = Number(item.price);
    const quantity = item.quantity || 1;
    const subtotal = unitPrice * quantity;

    return (
      <div
        key={item.id}
        className="flex gap-4 items-center border-b pb-3 border-green-300"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div className="flex flex-col flex-1">
          <span className="font-semibold mb-2">{item.name}</span>
          <span className="text-sm mb-2">Price: EGP {unitPrice.toFixed(2)}</span>
          <span className="text-sm mb-2">Qty: {quantity}</span>
        </div>
      </div>
    );
  })}
</div>

<div className="text-right mt-4 space-y-1 text-green-800 font-medium">
  {giftCardApplied && (
    <div className="text-green-800">Gift Card: +EGP 50.00</div>
  )}
  <div>Shipping Fees: EGP {SHIPPING_FEE.toFixed(2)}</div>
</div>
        <div className="flex flex-col text-right min-w-[160px]">
          <span className="text-sm font-semibold">
            Subtotal: EGP {subtotal.toFixed(2)}
          </span>
        </div>

{/* Total */}
<div className="mt-4 text-right font-bold text-lg">
  Total: <span className="text-green-950">EGP {total.toFixed(2)}</span>
</div>
</div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          governorate: "",
          city: "",
          paymentMethod: "cash",
          cardNumber: "",
          cardName: "",
          expiry: "",
          cvv: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          phone: Yup.string().required("Phone is required"),
          address: Yup.string().required("Address is required"),
          governorate: Yup.string().required("Governorate is required"),
          city: Yup.string().required("City is required"),
          paymentMethod: Yup.string().oneOf(["cash", "card"]).required(),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const order = {
            userInfo: values,
            items: products,
            total: total.toFixed(2),
            date: new Date().toISOString(),
          };

          const orders = JSON.parse(localStorage.getItem("orders") || "[]");
          orders.push(order);
          localStorage.setItem("orders", JSON.stringify(orders));

          if (!isBuyNow) emptyCart();
          toast.success("Order placed successfully!");
          resetForm();
          navigate("/order-confirmation");
          setSubmitting(false);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              ["name", "Name"],
              ["email", "Email", "email"],
              ["phone", "Phone"],
              ["address", "Address"],
              ["governorate", "Governorate"],
              ["city", "City"],
            ].map(([field, label, type = "text"]) => (
              <div key={field} className="col-span-1">
                <label className="block font-medium">{label}</label>
                <input
                  type={type}
                  name={field}
                  value={values[field]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border rounded p-2 bg-[#F7F6F2]"
                />
                {touched[field] && errors[field] && (
                  <div className="text-red-500 text-sm">{errors[field]}</div>
                )}
              </div>
            ))}

            <div className="col-span-1 md:col-span-2">
              <label className="block font-medium">Payment Method</label>
              <div className="flex gap-4 mt-1">
                {["cash", "card"].map((method) => (
                  <label key={method} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={values.paymentMethod === method}
                      onChange={handleChange}
                      className="w-4 h-4 rounded-full border border-gray-400 appearance-none bg-white checked:bg-[#5D755E] checked:border-transparent"
                    />
                    {method === "cash" ? "Cash on Delivery" : "Card"}
                  </label>
                ))}
              </div>
              {touched.paymentMethod && errors.paymentMethod && (
                <div className="text-red-500 text-sm">{errors.paymentMethod}</div>
              )}
            </div>

            {values.paymentMethod === "card" && (
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  ["cardNumber", "Card Number", "text", "xxxx xxxx xxxx xxxx"],
                  ["cardName", "Card Holder Name", "text", "Full Name"],
                  ["expiry", "Expiry Date", "text", "MM/YY"],
                  ["cvv", "CVV", "password", "123"],
                ].map(([name, label, type, placeholder]) => (
                  <div key={name}>
                    <label htmlFor={name} className="block font-medium mb-1">
                      {label}
                    </label>
                    <input
                      type={type}
                      id={name}
                      name={name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[name]}
                      placeholder={placeholder}
                      className="w-full border border-gray-300 rounded p-2 bg-[#F7F6F2] text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="col-span-1 md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5D755E] text-white p-3 rounded hover:opacity-80"
              >
                Confirm Order
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CheckOut;

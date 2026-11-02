type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartDropdownProps = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  visible: boolean;
};

export default function CartDropdown({
  cart,
  setCart,
  visible,
}: CartDropdownProps) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function removeItem(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div
      className={`gap-4 absolute right-0 top-full z-50 w-80 rounded-lg border border-gray-200 bg-white p-4 text-gray-900 shadow-lg transition duration-300 ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <h2 className="mb-3 border-b border-gray-200 pb-2 text-lg font-semibold">
        Your Cart ({cart.length})
      </h2>

      {cart.length === 0 ? (
        <p className="py-4 text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="max-h-80 space-y-4 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{item.title}</p>
                  <p>${item.price.toFixed(2)}</p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="cursor-pointer text-sm font-semibold text-gray-500 hover:text-gray-900 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-4 justify-between border-t border-gray-200 pt-3 font-semibold">
            <div className="flex justify-between">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              className="w-full cursor-pointer rounded-full bg-gray-900 p-2 transition duration-300 hover:bg-gray-700 flex justify-center text-white"
              onClick={() => {
                {
                  alert("Checkout success!");
                  setCart([]);
                }
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

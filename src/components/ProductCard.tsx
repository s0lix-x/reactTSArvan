import { Check, ShoppingCart } from "lucide-react";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
  isAdded: boolean;
};

const ProductCard = ({
  name,
  price,
  image,
  onAddToCart,
  isAdded,
}: ProductCardProps) => {
  return (
    <div className="flex gap-2 aspect-square">
      <div
        className={`group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border-2 transition duration-300 ${isAdded ? "border-gray-700" : "border-gray-200 hover:border-gray-400"}`}
      >
        <img
          src={image}
          alt={`${name} ${price}`}
          className="h-full w-full object-contain p-6 transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={onAddToCart}
            disabled={isAdded}
            className={`absolute bottom-3 right-3 flex rounded-full p-3 transition duration-300 ${
              isAdded
                ? "cursor-default bg-gray-700 text-white"
                : "cursor-pointer bg-gray-900 text-white hover:bg-gray-700"
            }`}
          >
            {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

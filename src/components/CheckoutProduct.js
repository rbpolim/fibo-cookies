import Image from "next/image";
import { useDispatch } from "react-redux";

import { addToBasket, removeFromBasket } from "../slices/basketSlice";

export function CheckoutProduct({ id, image, title, description, price }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      image,
      title,
      description,
      price,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 bg-white rounded-lg shadow-md p-2">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        objectFit="contain"
      />

      <div className="flex flex-col justify-evenly col-span-3 ml-4">
        <h1 className="font-black">{title}</h1>
        <p className="text-gray-900 italic">{description}</p>
        <span>${price}</span>
      </div>

      <div className="flex flex-col space-y-2 my-auto mr-4 justify-self-end">
        <button onClick={addItemToBasket} className="buttonThree text-xs">
          Add to basket
        </button>
        <button onClick={removeItemFromBasket} className="buttonRemove text-xs">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

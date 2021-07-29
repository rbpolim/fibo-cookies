import Image from "next/image";
import { useDispatch } from "react-redux";

import { addToBasket } from "../slices/basketSlice";

export function Product({ image, title, description, price }) {
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

  return (
    <div className="">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        objectFit="contain"
      />

      <div onClick={addItemToBasket} className="text-center">
        <button className="buttonTwo w-full">Add to Basket</button>
      </div>

      <div className="flex flex-col items-center mt-4 space-y-2">
        <h1>{title}</h1>
        <p className="text-gray-900 italic">{description}</p>
        <span>${price}</span>
      </div>
    </div>
  );
}

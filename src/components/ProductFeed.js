import requests from "../utils/requests";

import { Product } from "./Product";

export function ProductFeed() {
  return (
    <div className="flex min-h-screen font-mono">
      <div className="my-16 flex flex-col p-4 mx-auto space-y-20">
        {Object.entries(requests).map(
          ([key, { image, title, description, price }]) => (
            <Product
              key={key}
              image={image}
              title={title}
              description={description}
              price={price}
            />
          )
        )}
      </div>
    </div>
  );
}

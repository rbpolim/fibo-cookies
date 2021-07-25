import requests from "../utils/requests";

export function ProductFeed() {
  return (
    <div className="flex min-h-screen font-mono">
      <div className="flex flex-col p-4 space-y-16 mx-auto mt-4">
        {Object.entries(requests).map(
          ([key, { image, title, description, price }]) => (
            <div className="" key={key}>
              <img className="max-w-sm" src={image} alt={title} />
              <div className="buttonTwo text-center mt-4">
                <button>Add to Basket</button>
              </div>
              <div className="flex flex-col items-center mt-4 space-y-2">
                <h1 className="">{title}</h1>
                <p className="italic">{description}</p>
                <span>{price}</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

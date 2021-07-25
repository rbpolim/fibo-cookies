export function ProductFeed() {
  return (
    <div className="flex min-h-screen font-mono">
      <div className="flex flex-col p-4 space-y-4 mx-auto mt-4">
        <img className="max-w-md shadow-lg" src="/images/cookies.png" alt="" />
        <div className="flex flex-col items-center ">
          <h1 className="font-black text-2xl md:text-3xl tracking-wider">
            COOKIE #1
          </h1>
          <p className="italic text-sm md:text-lg text-gray-900">
            Dark chocolate 😈
          </p>
          <span className="font-bold text-2xl md:text-3xl mt-3">$6</span>
        </div>
        <div className="text-center">
          <button className="button">Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

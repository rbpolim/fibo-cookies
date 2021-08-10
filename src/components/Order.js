export function Order({ id, amount, amountShipping, timestamp, items }) {
  return (
    <div className="flex space-x-4 border rounded-md mt-4 p-4 text-sm ">
      <div>
        <h1>ORDER PLACE</h1>
        <p>{timestamp}</p>
      </div>

      <div>
        <h1>TOTAL</h1>
        <p>${amount}</p>
      </div>

      {/* description */}
      <div>
        <p>{id}</p>
      </div>
    </div>
  );
}

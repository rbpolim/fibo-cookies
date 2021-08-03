const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (request, response) => {
  const { items, email } = request.body;

  // creating a new [] of items w/ the required stripe information;
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
      },
    },
  }));

  // creating the Stripe Session;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JJfRaB59N2wWo5NcpeiOzJ4"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
    },
  });

  // responding w/ the Session Id created;
  response.status(200).json({ id: session.id });
};

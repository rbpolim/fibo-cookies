import moment from "moment";
import { getSession } from "next-auth/client";

import db from "../services/firebase";

import { Navbar } from "../components/Navbar";
import { Order } from "../components/Order";
import { Footer } from "../components/Footer";

export default function Orders({ orders }) {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-lg mx-auto h-screen">
        <div className="p-8">
          <div className="space-y-2">
            <h1 className="text-2xl border-b border-gray-500 pb-4">
              Order page
            </h1>
            <p className="italic text-gray-700">{orders.length} orders</p>
          </div>

          {/* ITEM */}
          <div className="">
            {orders?.map(({ id, amount, amountShipping, timestamp, items }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                timestamp={timestamp}
                items={items}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}

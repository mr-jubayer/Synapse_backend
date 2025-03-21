import "dotenv/config";
import Stripe from "stripe";

const stripe = new Stripe(process.env.stripe_sk);

const createPaymentIntent = async (req, res) => {
  const { totalCost } = req.body;

  const totalPaymentInCent = parseFloat(totalCost) * 100;

  const { client_secret } = await stripe.paymentIntents.create({
    amount: totalPaymentInCent,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({ client_secret });
};

export { createPaymentIntent };

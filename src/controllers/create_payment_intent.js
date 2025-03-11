const createPaymentIntent = async (req, res) => {
  const body = req.body;

  console.log(body);

  res.send({ perMonth: { h: "hello" } });
};

export { createPaymentIntent };

import Payment from "../models/payment.js";

const paymentHistory = (req, res) => {
  const { paymentInfo } = req.body;

  const result = new Payment({
    trxnId: paymentInfo.trxnId,
    email: paymentInfo.email,
    name: paymentInfo.name,
    paymentAt: paymentInfo.paymentAt,
    package: paymentInfo.package,
  });

  result.save();

  res.send({ success: true, result });
};

export { paymentHistory };

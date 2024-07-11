class PaymentController {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  async getPaymentLink(req, res) {
    try {
      const payment = await this.paymentService.createPayment(req.body);

      return res.json(payment);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Failed to create payment" });
    }
  }

  async getSubscriptionLink(req, res) {
    try {
      const subscription = await this.paymentService.createSubscription(req.body);

      return res.json(subscription);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Failed to create subscription" });
    }
  }
}

module.exports = PaymentController;
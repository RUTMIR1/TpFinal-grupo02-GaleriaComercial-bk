const axios = require("axios");

class PaymentService {
  async createPayment(paymentData) {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const payment = await axios.post(url, paymentData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }

  async createSubscription(subscriptionData) {
    const url = "https://api.mercadopago.com/preapproval";

    const subscription = await axios.post(url, subscriptionData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return subscription.data;
  }
}

module.exports = PaymentService;
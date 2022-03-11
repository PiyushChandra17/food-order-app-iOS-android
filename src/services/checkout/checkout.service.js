import createStripe from "stripe-client"
import { host } from "../../utils/env"

const stripe = createStripe(
    "pk_test_51KbdhpSEyPVzQ6BDtbsi8nJX7hJAG6gsuBlpky4cu81iZNpX287f3371A0rwNTjFGbqHrMVSdictDocu0qjrv6Hu00qAEuyYR4"
)

export const cardTokenRequest = (card) => stripe.createToken({card})

export const payRequest = (token, amount, name) => {
    return fetch(`${host}/pay`, {
      body: JSON.stringify({
        token,
        name,
        amount,
      }),
      method: "POST",
      header: {
        'Content-Type': 'application/json'
      }

    }).then((res) => {
      if (res.status > 200) {
        return Promise.reject("something went wrong processing your payment");
      }
      return res.json();
    });
  };
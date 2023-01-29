import { useSession, signIn } from "next-auth/client";
import React from "react";
import { api } from "../../services/Api";
import { getStripeJs } from "../../services/Stripe-js";
import styles from "./styles.module.scss";

interface ISubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    } else {
      try {
        const { data } = await api.post("/subscribe");
        const { sessionId } = await data;
        const stripejs = await getStripeJs();
        await stripejs.redirectToCheckout({ sessionId });
      } catch (error) {
        alert(error.message);
      }
    }
  }
  return (
    <button
      onClick={handleSubscribe}
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}

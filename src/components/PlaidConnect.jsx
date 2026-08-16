import { useEffect, useState, useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";
import supabase from "../lib/supabase";

export default function PlaidConnect() {
  const [linkToken, setLinkToken] = useState(null);

  useEffect(() => {
    async function getLinkToken() {
      const { data, error } = await supabase.functions.invoke(
        "create-link-token"
      );

      if (error) {
        console.error(error);
        return;
      }

      setLinkToken(data.link_token);
    }

    getLinkToken();
  }, []);

  const onSuccess = useCallback(async (public_token, metadata) => {
    console.log("Public Token:", public_token);
    console.log(metadata);

    alert("Bank connected successfully!");
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess,
  });

  return (
    <button
      className="connect-button"
      disabled={!ready}
      onClick={() => open()}
    >
      {ready ? "Connect Bank" : "Loading..."}
    </button>
  );
}
import { useEffect, useState, useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";
import supabase from "../lib/supabase";

export default function PlaidConnect() {
  const [linkToken, setLinkToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLinkToken() {
      try {
        console.log("Requesting Plaid link token...");

        const { data, error } = await supabase.functions.invoke(
          "create-link-token"
        );

        if (error) {
          console.error("Supabase Function Error:", error);
          alert(`Function Error:\n${JSON.stringify(error, null, 2)}`);
          return;
        }

        console.log("Function Response:", data);

        if (!data?.link_token) {
          console.error("No link token returned:", data);
          alert("No link token returned from function.");
          return;
        }

        setLinkToken(data.link_token);
      } catch (err) {
        console.error("Unexpected Error:", err);
        alert(`Unexpected Error:\n${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    getLinkToken();
  }, []);

  const onSuccess = useCallback(async (public_token, metadata) => {
    console.log("Public Token:", public_token);
    console.log("Metadata:", metadata);

    alert("Bank connected successfully!");
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess,
  });

  return (
    <button
      className="connect-button"
      disabled={!ready || loading}
      onClick={() => open()}
    >
      {loading
        ? "Loading..."
        : ready
        ? "Connect Bank"
        : "Failed to Load"}
    </button>
  );
}
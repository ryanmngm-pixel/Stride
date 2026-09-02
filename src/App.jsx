import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

import Auth from "./pages/Auth";
import Universe from "./pages/Universe";

function App() {
  const [session, setSession] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadSession() {
      const {
        data: { session },
      } =
        await supabase.auth.getSession();

      setSession(session);
      setLoading(false);
    }

    loadSession();

    const {
      data: { subscription },
    } =
      supabase.auth.onAuthStateChange(
        (_event, session) => {
          setSession(session);
          setLoading(false);
        }
      );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!session) {
    return <Auth />;
  }

  return <Universe />;
}

export default App;
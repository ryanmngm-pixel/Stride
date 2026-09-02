import { supabase } from "../lib/supabase";

import FinanceRow from "../components/FinanceRow";
import GoalsContent from "../components/GoalsContent";
import AccountsContent from "../components/AccountsContent";

import { useState } from "react";

export default function Universe() {
  const [goals, setGoals] =
    useState([
      {
        id: 1,
        title: "Emergency Fund",
        progress: 65,
      },
      {
        id: 2,
        title: "New Car Fund",
        progress: 22,
      },
    ]);

  const [accounts, setAccounts] =
    useState([]);

  const netWorth =
    accounts.reduce(
      (
        total,
        account
      ) =>
        total +
        (account.balance || 0),
      0
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "2rem",
        maxWidth: "500px",
        margin: "0 auto",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            opacity: 0.45,
            fontSize: ".9rem",
          }}
        >
          Logic
        </div>

        <button
          onClick={() =>
            supabase.auth.signOut()
          }
          style={{
            border:
              "1px solid rgba(255,255,255,.08)",
            background:
              "rgba(255,255,255,.03)",
            color:
              "rgba(255,255,255,.7)",
            borderRadius:
              "999px",
            padding:
              ".55rem 1rem",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            fontSize:
              "clamp(3rem, 12vw, 5rem)",
            fontWeight: 300,
            letterSpacing:
              "-0.06em",
            lineHeight: 1,
          }}
        >
          $
          {netWorth.toLocaleString()}
        </div>

        <div
          style={{
            opacity: 0.45,
            marginTop: "0.5rem",
            fontSize: "0.95rem",
          }}
        >
          Net Worth
        </div>
      </div>

      <FinanceRow
        label="Income"
        value="$0"
        color="#22c55e"
      >
        <div
          style={{
            paddingTop: "1rem",
          }}
        >
          Income data coming
          from Plaid.
        </div>
      </FinanceRow>

      <FinanceRow
        label="Spending"
        value="$0"
        color="#f97316"
      >
        <div
          style={{
            paddingTop: "1rem",
          }}
        >
          Spending data coming
          from Plaid.
        </div>
      </FinanceRow>

      <FinanceRow
        label="Debt"
        value="$0"
        color="#ef4444"
      >
        <div
          style={{
            paddingTop: "1rem",
          }}
        >
          Debt data coming
          from Plaid.
        </div>
      </FinanceRow>

      <FinanceRow
        label="Goals"
        value={`${goals.length} Active`}
        color="#8b5cf6"
      >
        <GoalsContent
          goals={goals}
          setGoals={setGoals}
        />
      </FinanceRow>

      <FinanceRow
        label="Accounts"
        value={`${accounts.length}`}
        color="#3b82f6"
      >
        <AccountsContent
          accounts={accounts}
          setAccounts={
            setAccounts
          }
        />
      </FinanceRow>

      <FinanceRow
        label="Settings"
        color="#94a3b8"
      >
        <div
          style={{
            paddingTop: "1rem",
          }}
        >
          Settings coming next.
        </div>
      </FinanceRow>
    </div>
  );
}
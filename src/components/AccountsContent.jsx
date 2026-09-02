import { useState } from "react";

export default function AccountsContent({
  accounts,
  setAccounts,
}) {
  const [showAdd, setShowAdd] =
    useState(false);

  function addDemoAccount() {
    setAccounts((current) => [
      ...current,
      {
        id: Date.now(),
        name: "Checking Account",
        balance: 0,
      },
    ]);

    setShowAdd(false);
  }

  return (
    <div style={{ paddingTop: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontWeight: 300,
              fontSize: "2rem",
            }}
          >
            Accounts
          </h2>

          <div
            style={{
              opacity: 0.45,
              marginTop: ".25rem",
            }}
          >
            {accounts.length} Connected
          </div>
        </div>
      </div>

      {accounts.map((account) => (
        <div
          key={account.id}
          style={{
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "18px",
            background:
              "rgba(255,255,255,.04)",
          }}
        >
          <div>{account.name}</div>

          <div
            style={{
              opacity: 0.5,
              marginTop: ".25rem",
            }}
          >
            ${account.balance}
          </div>
        </div>
      ))}

      {!showAdd ? (
        <div
          onClick={() =>
            setShowAdd(true)
          }
          style={{
            border:
              "1px dashed rgba(255,255,255,.15)",
            borderRadius: "18px",
            minHeight: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "rgba(255,255,255,.03)",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          + Connect Account
        </div>
      ) : (
        <div
          style={{
            padding: "1rem",
            borderRadius: "18px",
            background:
              "rgba(255,255,255,.04)",
          }}
        >
          <div
            style={{
              opacity: 0.5,
              marginBottom: "1rem",
            }}
          >
            Plaid integration coming
            soon
          </div>

          <button
            onClick={addDemoAccount}
            style={{
              width: "100%",
              border: "none",
              padding: "0.9rem",
              borderRadius: "12px",
              background: "#3b82f6",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add Demo Account
          </button>
        </div>
      )}
    </div>
  );
}
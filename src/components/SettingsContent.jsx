import { useState } from "react";

export default function SettingsContent({
  settings,
  setSettings,
}) {
  return (
    <div
      style={{
        paddingTop: "1rem",
      }}
    >
      <div
        style={{
          marginBottom: "2rem",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontWeight: 300,
            fontSize: "2rem",
          }}
        >
          Settings
        </h2>

        <div
          style={{
            opacity: 0.45,
            marginTop: ".25rem",
          }}
        >
          Personalize your experience
        </div>
      </div>

      <SettingRow
        label="Display Name"
        value={settings.displayName}
      />

      <ToggleRow
        label="Notifications"
        value={settings.notifications}
        onChange={() =>
          setSettings((current) => ({
            ...current,
            notifications:
              !current.notifications,
          }))
        }
      />

      <ToggleRow
        label="Weekly Reports"
        value={settings.weeklyReports}
        onChange={() =>
          setSettings((current) => ({
            ...current,
            weeklyReports:
              !current.weeklyReports,
          }))
        }
      />

      <ToggleRow
        label="Biometric Lock"
        value={settings.biometricLock}
        onChange={() =>
          setSettings((current) => ({
            ...current,
            biometricLock:
              !current.biometricLock,
          }))
        }
      />

      <SettingRow
        label="Theme"
        value={settings.theme}
      />

      <SettingRow
        label="Currency"
        value={settings.currency}
      />

      <div
        style={{
          marginTop: "2rem",
          opacity: 0.35,
          fontSize: ".9rem",
        }}
      >
        Stride Beta v0.1.0
      </div>
    </div>
  );
}

function SettingRow({
  label,
  value,
}) {
  return (
    <div
      style={{
        padding: "1rem 0",
        borderBottom:
          "1px solid rgba(255,255,255,.06)",

        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
      }}
    >
      <div>{label}</div>

      <div
        style={{
          opacity: 0.5,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  value,
  onChange,
}) {
  return (
    <div
      style={{
        padding: "1rem 0",
        borderBottom:
          "1px solid rgba(255,255,255,.06)",

        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
      }}
    >
      <div>{label}</div>

      <button
        onClick={onChange}
        style={{
          width: "50px",
          height: "28px",

          border: "none",

          borderRadius: "999px",

          background: value
            ? "#22c55e"
            : "rgba(255,255,255,.12)",

          position: "relative",

          cursor: "pointer",

          transition:
            "all .25s ease",
        }}
      >
        <div
          style={{
            position: "absolute",

            top: "3px",

            left: value
              ? "25px"
              : "3px",

            width: "22px",

            height: "22px",

            borderRadius: "50%",

            background: "white",

            transition:
              "all .25s ease",
          }}
        />
      </button>
    </div>
  );
}
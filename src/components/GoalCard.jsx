export default function GoalCard({
  title,
  progress,
  editing,
}) {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "16px",

        background:
          "rgba(255,255,255,0.04)",

        marginBottom: "1rem",

        animation: editing
          ? "wiggle .35s infinite alternate"
          : "none",
      }}
    >
      <div>{title}</div>

      <div
        style={{
          opacity: 0.5,
          marginTop: ".25rem",
        }}
      >
        {progress} Complete
      </div>

      <style>
        {`
          @keyframes wiggle {
            from {
              transform: rotate(-1deg);
            }

            to {
              transform: rotate(1deg);
            }
          }
        `}
      </style>
    </div>
  );
}
import { useState } from "react";

export default function GoalsContent({
  goals,
  setGoals,
}) {
  const [editing, setEditing] =
    useState(false);

  const [showAddForm, setShowAddForm] =
    useState(false);

  const [newGoal, setNewGoal] =
    useState("");

  function addGoal() {
    if (!newGoal.trim()) return;

    setGoals((current) => [
      ...current,
      {
        id: Date.now(),
        title: newGoal,
        progress: 0,
      },
    ]);

    setNewGoal("");
    setShowAddForm(false);
  }

  function removeGoal(id) {
    setGoals((current) =>
      current.filter(
        (goal) => goal.id !== id
      )
    );
  }

  return (
    <div
      style={{
        paddingTop: "1rem",
      }}
    >
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
            Goals
          </h2>

          <div
            style={{
              opacity: 0.45,
              marginTop: ".25rem",
            }}
          >
            {goals.length} Active
          </div>
        </div>

        <button
          onClick={() => {
            setEditing(!editing);

            if (editing) {
              setShowAddForm(false);
            }
          }}
          style={{
            border: "none",
            borderRadius: "999px",
            padding:
              "0.65rem 1.1rem",

            background:
              editing
                ? "#22c55e"
                : "#8b5cf6",

            color: "white",

            fontWeight: 600,

            cursor: "pointer",

            transition:
              "all .25s ease",
          }}
        >
          {editing
            ? "Done"
            : "Edit"}
        </button>
      </div>

      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          editing={editing}
          onDelete={() =>
            removeGoal(goal.id)
          }
        />
      ))}

      <div
        style={{
          maxHeight: editing
            ? "300px"
            : "0px",

          opacity: editing
            ? 1
            : 0,

          overflow: "hidden",

          transition:
            "all .3s ease",
        }}
      >
        {!showAddForm ? (
          <div
            onClick={() =>
              setShowAddForm(true)
            }
            style={{
              marginTop: "1rem",

              border:
                "1px dashed rgba(255,255,255,.15)",

              borderRadius: "18px",

              minHeight: "80px",

              display: "flex",

              alignItems: "center",

              justifyContent:
                "center",

              background:
                "rgba(255,255,255,.03)",

              cursor: "pointer",

              fontWeight: 600,
            }}
          >
            + Add Goal
          </div>
        ) : (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              borderRadius: "18px",
              background:
                "rgba(255,255,255,.04)",
            }}
          >
            <input
              value={newGoal}
              onChange={(e) =>
                setNewGoal(
                  e.target.value
                )
              }
              placeholder="Goal name..."
              style={{
                width: "100%",
                boxSizing:
                  "border-box",

                padding: "0.9rem",

                borderRadius:
                  "12px",

                border:
                  "1px solid rgba(255,255,255,.1)",

                background:
                  "rgba(255,255,255,.05)",

                color: "white",

                outline: "none",
              }}
            />

            <div
              style={{
                display: "flex",
                gap: ".75rem",
                marginTop: "1rem",
              }}
            >
              <button
                onClick={addGoal}
                style={{
                  flex: 1,
                  border: "none",
                  borderRadius:
                    "12px",
                  padding:
                    "0.85rem",
                  background:
                    "#8b5cf6",
                  color: "white",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Add Goal
              </button>

              <button
                onClick={() =>
                  setShowAddForm(
                    false
                  )
                }
                style={{
                  flex: 1,
                  border: "none",
                  borderRadius:
                    "12px",
                  padding:
                    "0.85rem",
                  background:
                    "rgba(255,255,255,.08)",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
        @keyframes wiggle {
          from {
            transform: rotate(-0.7deg);
          }
          to {
            transform: rotate(0.7deg);
          }
        }
      `}
      </style>
    </div>
  );
}

function GoalCard({
  goal,
  editing,
  onDelete,
}) {
  return (
    <div
      style={{
        position: "relative",
        padding: "1rem",
        borderRadius: "18px",
        background:
          "rgba(255,255,255,.04)",
        marginBottom: "1rem",

        animation: editing
          ? "wiggle .18s infinite alternate"
          : "none",

        transition:
          "all .25s ease",
      }}
    >
      <button
        onClick={onDelete}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",

          width: "22px",
          height: "22px",

          borderRadius: "50%",
          border: "none",

          background:
            "#ef4444",

          color: "white",

          fontWeight: 700,

          cursor: "pointer",

          opacity: editing
            ? 1
            : 0,

          transform: editing
            ? "scale(1)"
            : "scale(.5)",

          pointerEvents:
            editing
              ? "auto"
              : "none",

          transition:
            "all .25s ease",
        }}
      >
        −
      </button>

      <div
        style={{
          marginBottom:
            ".75rem",
        }}
      >
        {goal.title}
      </div>

      <div
        style={{
          height: "6px",
          borderRadius:
            "999px",
          overflow:
            "hidden",
          background:
            "rgba(255,255,255,.08)",
        }}
      >
        <div
          style={{
            width: `${goal.progress}%`,
            height: "100%",
            background:
              "#8b5cf6",
          }}
        />
      </div>

      <div
        style={{
          opacity: 0.45,
          marginTop: ".5rem",
        }}
      >
        {goal.progress}% Complete
      </div>
    </div>
  );
}
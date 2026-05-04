import React from "react";

const ZoneCard = ({ zone }) => {
  const traffic = zone.traffic;
  const violations = zone.violations;

  // -----------------------------
  // INTELLIGENCE ENGINE (PURE FRONTEND)
  // -----------------------------

  const risk_score = Math.min(
    100,
    Math.round((traffic * 0.6) + (violations * 12))
  );

  let prediction = "LOW";
  let reason = "Stable zone with normal activity";

  if (risk_score > 70) {
    prediction = "HIGH";
    reason = "Traffic rising + violations increasing";
  } else if (risk_score > 40) {
    prediction = "MEDIUM";
    reason = "Moderate fluctuations in traffic/violations";
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        margin: "10px",
        background:
          risk_score > 70
            ? "#ffe6e6"
            : risk_score > 40
            ? "#fff6e5"
            : "#e6ffe6",
      }}
    >
      <h3>Zone {zone.id}</h3>

      <p>Traffic: {traffic}</p>
      <p>Violations: {violations}</p>

      <hr />

      <p><b>Risk Score:</b> {risk_score}</p>
      <p><b>Prediction:</b> {prediction}</p>
      <p><b>Reason:</b> {reason}</p>
    </div>
  );
};

export default ZoneCard;
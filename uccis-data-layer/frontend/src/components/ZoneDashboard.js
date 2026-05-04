import React from "react";
import ZoneCard from "./ZoneCard";

const ZoneDashboard = () => {
  // -----------------------------
  // STATIC FRONTEND DATA (NO BACKEND)
  // -----------------------------
  const zones = [
    { id: 1, traffic: 80, violations: 3 },
    { id: 2, traffic: 55, violations: 1 },
    { id: 3, traffic: 30, violations: 0 },
    { id: 4, traffic: 90, violations: 5 },
    { id: 5, traffic: 45, violations: 2 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚦 Zone Intelligence Dashboard</h2>

      {zones.map((zone) => (
        <ZoneCard key={zone.id} zone={zone} />
      ))}
    </div>
  );
};

export default ZoneDashboard;
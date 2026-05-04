const zoneData = require("./zoneData");

// helper: last value
const last = (arr) => arr[arr.length - 1];
const prev = (arr) => arr[arr.length - 2];

// MOVING AVERAGE (last 3 values)
function movingAverage(arr) {
  const last3 = arr.slice(-3);
  const sum = last3.reduce((a, b) => a + b, 0);
  return sum / last3.length;
}

// TREND DETECTION
function getTrend(arr) {
  if (last(arr) > prev(arr)) return "increasing";
  if (last(arr) < prev(arr)) return "decreasing";
  return "stable";
}

// RISK SCORE ENGINE
function getRiskScore() {
  let score = 0;

  const traffic = last(zoneData.traffic_history);
  const violations = last(zoneData.violations_history);

  const trafficTrend = getTrend(zoneData.traffic_history);
  const violationTrend = getTrend(zoneData.violations_history);

  // RULE 1: traffic threshold
  if (traffic > 70) score += 30;

  // RULE 2: violations threshold
  if (violations > 10) score += 30;

  // RULE 3: increasing trend adds risk
  if (trafficTrend === "increasing") score += 20;
  if (violationTrend === "increasing") score += 20;

  return Math.min(score, 100);
}

// MAIN ANALYSIS FUNCTION
function analyzeZone() {
  return {
    traffic_trend: getTrend(zoneData.traffic_history),
    violation_trend: getTrend(zoneData.violations_history),

    traffic_moving_average: movingAverage(zoneData.traffic_history),
    violation_moving_average: movingAverage(zoneData.violations_history),

    risk_score: getRiskScore()
  };
}

module.exports = analyzeZone;
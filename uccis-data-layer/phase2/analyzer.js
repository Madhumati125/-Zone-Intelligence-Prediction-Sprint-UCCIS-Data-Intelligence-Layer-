function getLastThree(arr) {
    return arr.slice(-3);
}

function movingAverage(arr) {
    const last3 = getLastThree(arr);
    const sum = last3.reduce((a, b) => a + b, 0);
    return Number((sum / 3).toFixed(2));
}

function getTrend(arr) {
    const last = arr[arr.length - 1];
    const prev = arr[arr.length - 2];

    if (last > prev) return "increasing";
    if (last < prev) return "decreasing";
    return "stable";
}

// risk scoring engine
function calculateRisk(trafficAvg, violationAvg, trafficTrend, violationTrend) {
    let score = 0;

    // traffic weight
    if (trafficAvg > 70) score += 30;
    else if (trafficAvg > 40) score += 15;

    // violations weight
    if (violationAvg > 10) score += 30;
    else if (violationAvg > 5) score += 15;

    // trend weight
    if (trafficTrend === "increasing") score += 20;
    if (violationTrend === "increasing") score += 20;

    if (score > 100) score = 100;

    return score;
}

function analyzeZone(zone) {
    const traffic = zone.traffic_history;
    const violations = zone.violations_history;

    const trafficAvg = movingAverage(traffic);
    const violationAvg = movingAverage(violations);

    const trafficTrend = getTrend(traffic);
    const violationTrend = getTrend(violations);

    const riskScore = calculateRisk(
        trafficAvg,
        violationAvg,
        trafficTrend,
        violationTrend
    );

    return {
        trafficAvg,
        violationAvg,
        trafficTrend,
        violationTrend,
        riskScore
    };
}

module.exports = {
    analyzeZone
};
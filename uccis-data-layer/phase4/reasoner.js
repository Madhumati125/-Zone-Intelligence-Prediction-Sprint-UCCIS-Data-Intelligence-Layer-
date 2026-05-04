function generateReason(zoneName, data, prediction) {
    const reasons = [];

    const [a, b, c] = data;
    const avg = prediction.average;

    // reason 1: trend
    if (prediction.trend > 0) {
        reasons.push("trend is increasing");
    } else if (prediction.trend < 0) {
        reasons.push("trend is decreasing");
    } else {
        reasons.push("stable pattern observed");
    }

    // reason 2: traffic/activity level
    if (avg > 70) {
        reasons.push("high activity detected");
    } else if (avg > 40) {
        reasons.push("moderate activity detected");
    } else {
        reasons.push("low activity detected");
    }

    // reason 3: volatility
    const volatility = Math.max(a, b, c) - Math.min(a, b, c);

    if (volatility > 15) {
        reasons.push("high fluctuation in values");
    } else {
        reasons.push("stable zone behavior");
    }

    // final sentence builder
    return {
        predictionText: `${zoneName} likely ${prediction.predicted >= 80 ? "HIGH" : prediction.predicted >= 50 ? "MEDIUM" : "LOW"} in next cycle`,
        reasons
    };
}

module.exports = { generateReason };
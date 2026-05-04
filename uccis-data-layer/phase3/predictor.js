function getLastThree(values) {
    return values.slice(-3);
}

function calculateAverage(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// simple trend-based prediction
function predictNext(values) {
    if (values.length < 3) {
        throw new Error("Need at least 3 data points");
    }

    const last3 = getLastThree(values);

    const avg = calculateAverage(last3);

    const trend = last3[2] - last3[0];

    // small controlled increment
    const increment = trend * 0.1;

    const predicted = avg + increment;

    return {
        last3,
        average: Number(avg.toFixed(2)),
        trend,
        predicted: Number(predicted.toFixed(2))
    };
}

module.exports = {
    predictNext
};
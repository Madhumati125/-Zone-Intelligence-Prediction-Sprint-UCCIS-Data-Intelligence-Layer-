function classify(value) {
    if (value < 50) return "LOW";
    if (value < 80) return "MEDIUM";
    return "HIGH";
}

module.exports = {
    classify
};